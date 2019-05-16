## git

### 基础操作
```shell
// 添加仓库地址
git remote add origin git@github.com:git_username/repository_name.git
git push -u origin master
```

### Reset Checkout Revert区别

### 回退到某个版本
```shell
// 回到某个版本，并且所有的commit修改都会退回缓冲区中
git reset --soft commitId
// 强制回退到某个版本
git reset --hard commitId/reflogId
// 回退到上个版本
git reset --hard HEAD^
```

### 断开远程连接
```shell
git remove -v
git remote remove origin
```

### 清理Git的Log
```shell
// 创建临时分支
git checkout --orphan tmp
// 添加所需提交的文件
git add .
// 添加commit信息
git commit -m "Clean Log"
// 删除master分支
git branch -D master
// 更名分支
git branch -m master
// 提交新的master分支代码
git push -f origin master
```