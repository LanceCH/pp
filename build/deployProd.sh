#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYFILES=deployProd_${TIMESPAN}.tar.gz
SERVER_1=123.207.242.224
SERVER_2=203.195.236.26

tar -zcvf dist/${DEPLOYFILES} ./*.html ./favicon.ico
# 构建成功后打包文件上传到服务器
scp -P 9528 -o StrictHostKeyChecking=no dist/${DEPLOYFILES} node@${SERVER_1}:/home/node/deploy/cloud_platform
scp -P 9528 -o StrictHostKeyChecking=no dist/${DEPLOYFILES} node@${SERVER_2}:/home/node/deploy/cloud_platform

# 解压文件
ssh -p 9528 -o StrictHostKeyChecking=no node@${SERVER_1} tar xzf /home/node/deploy/cloud_platform/${DEPLOYFILES} -C /home/www/cloud_platform
ssh -p 9528 -o StrictHostKeyChecking=no node@${SERVER_2} tar xzf /home/node/deploy/cloud_platform/${DEPLOYFILES} -C /home/www/cloud_platform


if [ $? -ne 0 ]; then
    echo "部署失败"
else
    echo "部署成功"
fi
