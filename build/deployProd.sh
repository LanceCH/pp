#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYFILES=deployProd_${TIMESPAN}.tar.gz
# SERVER_1=

tar -zcvf dist/${DEPLOYFILES} ./*.html
tar -zcvf dist/${DEPLOYFILES} ./*.html
# # 构建成功后打包文件上传到服务器
scp -r ./dist/${DEPLOYFILES} root@120.78.150.165:/project/pp/

# # 解压文件
ssh -o StrictHostKeyChecking=no root@120.78.150.165 tar xzf /project/pp/${DEPLOYFILES} -C /home/www/pp


if [ $? -ne 0 ]; then
    echo "部署失败"
else
    echo "部署成功"
fi
