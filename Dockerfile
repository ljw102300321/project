# 使用官方Nginx镜像作为基础镜像
FROM nginx:alpine

# 设置工作目录
WORKDIR /app

# 将构建好的文件复制到Nginx的默认网站目录
COPY dist/ /usr/share/nginx/html/

# 复制Nginx配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]