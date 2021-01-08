import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import * as xml from 'xml-js'
import * as xlsx from 'xlsx'
window['Buffer'] = Uint8Array
interface Data {
  计数: number
  名称: string
  ID: string
  SN: string
  类别: number
  产品描述: string
  单价: number
  单位: string
  规格: string
  内序号: string
  区域名称: string
  位置码: string
  型号: string
  备注: string
}

interface SaleData {
  计数: number
  产品名称: string
  总价: number
  描述: string
  单价: number
  单位: string
  规格: string
  型号: string
  备注: string
}

interface TechData {
  编号: number;
  区域: string;
  设备名称: string;
  区域内序号: string;
  型号: string;
  规格: string;
  SN: string;
  ID: string;
  位置码: string;
  备注: string;
}

enum DEVICETYPE {
  SMART = 1,
  UNSMART = 0
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  DEVICETYPE = DEVICETYPE
  uploading = false;
  fileList: UploadFile[] = [];
  listOfData: Data[];
  editIndex: number;


  constructor(private http: HttpClient, private msg: NzMessageService) {}

  beforeUpload = (file: UploadFile): boolean => {
    console.log(file)
    this.fileList = [file]
    this.parseForm(file)
    return false;
  };

  parseForm(file) {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = (e: any) => {  // 数据读取完成后的回调函数
      console.log(e)
      const data = new Uint8Array(e.target.result);
      const workbook = xlsx.read(data, {type: 'array'});  // workbook 是 xlsx 解析 excel 后返回的对象
  
      const firstSheetName = workbook.SheetNames[0];  // 获取第一个 sheet 的名字
      const worksheet = workbook.Sheets[firstSheetName];  // 获取第一个 sheet 的内容
      const listOfData = xlsx.utils.sheet_to_json(worksheet);  // 使用 utils 里的方法转换内容为便于使用的数组

      // 下面就是自己对数组进行操作就行了
      console.log(listOfData)
      this.listOfData = listOfData as any
      
    };
  }
  
  startEdit(index: number) {
    this.editIndex = index
  }

  stopEdit(): void {
    this.editIndex = null;
  }

  saveToSheet(type: 'sale' | 'tech') {
    const json: any = type === 'sale'
      ? this.getJsonOfSale(this.listOfData)
      : this.getJsonOfTech(this.listOfData)
    console.log(json)
    const worksheet = xlsx.utils.json_to_sheet(json)
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    /* save to file */
    xlsx.writeFile(workbook, `SheetJS.xlsx`);
  }

  saveToXml() {
    const body = JSON.parse('{"_declaration":{"_attributes":{"version":"1.0","encoding":"utf-8"}}}')
    body.devices = {}
    const json = this.getJsonOfTech(this.listOfData.filter(data => data.类别 == DEVICETYPE.SMART))
    body.devices.device = json
    const xmlString = xml.json2xml(JSON.stringify(body), {compact: true, spaces: 4})
    console.log(xmlString)
    const blob = new Blob([xmlString]) // 创建一个blob对象
    const a = document.createElement('a') // 创建一个<a></ a>标签
    a.href = URL.createObjectURL(blob) // response is a blob
    a.download = `test.xml` // 文件名称
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  getJsonOfSale(dataList: Data[]) {
    const json: SaleData[] = []
    for (const data of dataList) {
      if (json.find(ele => ele.产品名称 == data.名称)) {
        continue
      }
      const sum = dataList
        .filter(ele => ele.名称 === data.名称)
        .reduce((pre, current) => {
          current.计数 += pre.计数
          return current
        })
      const sale: SaleData = {
        计数: sum.计数,
        产品名称: data.名称,
        总价: sum.计数 * data.单价,
        描述: data.产品描述,
        单价: data.单价,
        单位: data.单位,
        规格: data.规格,
        型号: data.型号,
        备注: data.备注,
      }
      json.push(sale)
    }
    return json
  }
  
  getJsonOfTech(dataList: Data[]) {
    const json: TechData[] = []
    const add = (function() {
      let count = 0
      return function () {
        return ++count
      }
    }())
    for (const data of dataList) {
      const tech: TechData = {
        编号: null,
        区域: data.区域名称,
        设备名称: data.名称,
        区域内序号: data.内序号,
        型号: data.型号,
        规格: data.规格,
        SN: data.SN,
        ID: data.ID,
        位置码: data.位置码,
        备注: data.备注
      }
      for (let index = 0; index < data.计数; index++) {
        const copy = JSON.parse(JSON.stringify(tech))
        copy.编号 = add()
        json.push(copy)
      }
    }
    return json
  }
}
