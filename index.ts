/* 
interface fullName {
  firstName: string
  secondName?: string
}
function printname (info: fullName) {
  console.log(info)
}
printname({
  firstName: 'asas'

}) */


/* interface encrypt{
  (key: string, value: string): string
}
var md5: encrypt = function(key: string, value: string): string {
  return key + value
}

md5('name', 'zhangsan') */

/* interface UserArr {
  [index: number]: string
}
const arr: UserArr = {
  1: 'AD',
  100: '13'
} */

/* interface Animal {
  name: string
  eat(str: string):void
}

interface Dog extends Animal {
  work():void
}

class Bigdog implements Dog{
  name: string
  eat(name: string): void{

  }
  work(){

  }
} */

/* function getData<T>(value:  T): T{
  return value
}
getData<number>(1546)
getData<string>('146') */

/* class MinClass<T> {
  public list:T[] = [];
  add(num: T): void{
    this.list.push(num)
  }
  min(): T{
    let minNum = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum
  }
}

const m = new MinClass<number | string>();
m.add('1');
m.add(0);
m.add('425');
m.add('41');
m.add('51');
console.log(m.min()) */

/* interface ConfigFn {
  <T>(value: T): T;
}
const getData: ConfigFn = function<T>(value: T): T {
  return value
}
getData<string>('zhangsan')
console.log(getData<string>('zhangsan')) */

/* class User {
  username: string
  password: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

class ArticleCate {
  title: string
  desc: string
  status: boolean
  constructor(title: string, desc: string, status: boolean) {
    this.title = title
    this.desc = desc
    this.status = status
  }
}

class MysqlDb<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    return
  }
}

const u = new User('zhangsan', '1456456')

const userDb = new MysqlDb<User>()
userDb.add(u)

const a = new ArticleCate('垃圾分类', '这是一本垃圾分类的书', true)
const articleDb = new MysqlDb<ArticleCate>()
articleDb.add(a) */

/* interface DBI<T> {
  add(info: T): boolean
  update(info: T, id: number): boolean
  delete(id: number): boolean
  get(id: number): any[]
}

class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class MsSqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}


class User {
  username: string
  password: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

var u = new User('zhansgan', 'ailisi')

const oMysql = new MysqlDb<User>()
oMysql.add(u)
oMysql.update(u, 456)

const oMssql = new MsSqlDb<User>()
oMssql.add(u)
oMysql.update(u, 123)
 */

/* export const dbUrl = 'xxx.com'
export  default function getData(): any[] {
  console.log('i am exported')
  return [
    {
      title: 'asx'
    },
    {
      title: '1314'
    }
  ]
}  */

/* export namespace Z {
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(`${this.name}is eating`)
    }
  }
}

namespace S {
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(`${this.name}is eating`)
    }
  }
}
const a = new Z.Dog('danny')
const b = new S.Dog('banny')

a.eat()
b.eat()
 */

/*  function logClass(params: string) {
  return function(target: any) {
    console.log(target)
    console.log(params)
  }
 }

 @logClass('asdas')
 class HttpClient {
   constructor() {

   }
   getData() {
   }
 } */
/* const http: any = new HttpClient() */
/* console.log(http.apiUrl) */

function logClass(target:any) {
  console.log(target)
  return class extends target{
    apiUrl: any = '我是修改后的值'

    getData() {
      /* console.log(this.apiUrl) */
    }
  }
}

//属性装饰器
// function logProrerty(params: any) {
//   return function(target: any, attr: any) {
//     console.log('target', target) //target 类似与对象中的this 不再需要 .prototype
//     console.log('attr', attr)
//     console.log('params', params)
//     target[attr] = params
//   }
// }

// /* @logClass */
// class HttpClient {
//   @logProrerty('http://www.baidu.com')
//   public apiUrl: string
//   constructor() {
//     this.apiUrl = 'i am  url of the constructor'
//   }
//   getData() {
//     console.log('this.apiUrl', this.apiUrl)
//   }
// }

// const a = new HttpClient()
// a.getData()

/* function logMethod(params: any) {
  return function(target: any, methodName: any, desc: any) {
    console.log('target', target)
    console.log('methodName', methodName)
    console.log('desc', desc)

    target.apiUrl = 'xxxx'
    target.run = function() {
      console.log('run')
    }

    //修改装饰器的方法
    const oldMethod = desc.value
    desc.value = function (...args: any[]) {
      args = args.map((value) => {
        return String(value)
      })
      console.log(args)
      // 对象冒充
      oldMethod.apply(this, args)
    }
  }
}

class HttpClient {
  public apiUrl: string
  constructor() {
    this.apiUrl = 'i am  url of the constructor'
  }
  @logMethod('www.baidu.com')
  getData(...args: any[]) {
    console.log('this.apiUrl', this.apiUrl)
  }
}

const u = new HttpClient()
u.getData(1546, 'asxa', 1546)
 */

function logParams(params:any) {
  return function (target:any, methodName: any, paramsIndex: any) {
    console.log('params', params)
    console.log('target', target)
    console.log('methodName', methodName)
    console.log('paramsIndex', paramsIndex)

    target.apiUrl = params
  }
}

class HttpClient{
  public url: string = 'xasxaxs'
  constructor() {
  }
  getData(@logParams('sxsa') uuid: any) {
    console.log(uuid)
  }
}

const http: any = new HttpClient()
http.getData(13462)
console.log('http.apiUrl', http.apiUrl)
