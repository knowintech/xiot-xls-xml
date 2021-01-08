FROM registry.cn-zhangjiakou.aliyuncs.com/knowin-iot/nginx:latest
MAINTAINER FengXiao <fengxiao@knowin.com>

ARG AcmNS=AIoTPlatform_op
ENV AIoTEnv=$AcmNS

RUN  sed  -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

COPY dist-${AIoTEnv} /etc/nginx/html/dist

EXPOSE 80

ENTRYPOINT [ "/usr/sbin/nginx", "-g", "daemon off;" ]
