## git

### 基础操作
```shell
// 添加仓库地址
git remote add origin git@github.com:git_username/repository_name.git
git push -u origin master
git remote set-url origin URL
git submodule add https://github.com/Kujiale-Mobile/PainterCore.git src/components/painter  
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

### 删除分支
```shell
// 删除本地分支
git branch -d <BranchName>
// 强制删除
git branch -D <BranchName>
// 删除远程分支
git push origin --delete 分支名（remotes/origin/分支名）
```

### 查看文件大小
```shell
du -sh * 
```

### 打标签
https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE
```shell
git tag -a 1.3.0 -m 'tag message'
git push origin --tags
git push origin --delete <tagname>
```