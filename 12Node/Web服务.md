## Web 服务
* Shell命令
* 阿里云服务器 + CentOS
* nvm + Node JS（PM2）
* Mysql + Sequelize（ORM框架）
* Ngnix + Conf + Https
* Git or Svn，自动部署（使用github？）
* Express
* Redis
* MongoDB
* Jenkins CI？

## 上传、下载
```shell
scp file root@ip:~
scp root@ip:~ dir
```

## 工具
```shell
# 查看系统容量
df -h
```

## 安装git
```shell
yum install git
```

## 安装nvm
```shell
# 使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
# 激活
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
# 列出所有版本
nvm list-remote
# 安装多个版本
nvm install v6.9.5
nvm install v7.4.0
# 使用版本
nvm ls
nvm use default
```

## 安装mysql
```shell
# https://help.aliyun.com/document_detail/116727.html?spm=a2c4g.11186623.6.1122.5ab85ea5qibwqC
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
```

## 安装nginx
* 配置https，开启注释代码，配置ssl key和pem
* 配置web目录， root属性重新指向
* 修改访问权限（403问题），默认「nginx」用户权限，修改为「root」用户权限
```shell
yum install nginx -y
systemctl start nginx
systemctl stop nginx
systemctl reload nginx
systemctl status nginx
```