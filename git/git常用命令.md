###git命令
#### 操作本地
    git init //git初始化，生成.git文件夹
    git status //查看当前版本库状态
    git add 文件名/-u(将本地有改动文件标记到暂存区) //将修改提交到暂存区
    git commit -m "描述"//将暂存区中修改提交
    git log //显示提交日志
    git reset --hard 参数 //版本回滚 参数：HEAD^ 上一版本,HEAD-100 100个版本前，commit id
    git reset HEAD 文件名 //撤销暂存区的修改
    git reflog //显示命令日志
    git checkout --文件名//使文件回到最后一次commit或add的状态
    git rm 文件名 //从版本库中删除文件
#### 操作远程库
    git remote add origin git@github.com:ms-1995/仓库名.git //关联远程库
    git remote -v //显示全部远程仓库
    git remote rm 远程仓库名 //删除远程仓库
    git push -u origin(远程库) master(分支) (-f 强制提交)//第一次推，以后不需要-u
    git clone git@github.com:用户名/文件名.git //从github克隆项目
    git fetch -u origin(远程库) master(远程分支):tmp(本地分支)//只下载到tmp分支不merge
    git pull -u origin(远程库) master(远程分支) //下载并merge
####分支
    git checkout -b 分支名 //创建并切换分支
    git checkout 分支名 //切换到指定分支
    git branch //查看当前分支
    git branch -d 分支名 //删除指定分支
    git merge 分支名 //合并指定分支到当前分支 --no-ff参数表示禁用fast forward 能看到合并前分支的历史

    master分支一般仅用于版本更新，在dev分支上合并小组代码，每人再在不同分支干活

####修复bug
    git stash 保存暂存空间中的信息
    git checkout -b  新建临时分支
    git stash pop 取出信息，并删除已保存stash

    git branch -D 分支名 //强制删除未合并的分支

    git tag (版本号) (commit id)//版本号
    git tag -a 版本号 -m 说明 commitId
    git show 版本号 //显示说明文字
    git push 远程库 版本号/--tags(推送所有标签) //标签推送到远程
    git push origin :refs/tags/版本号 //删除远程标签
#### 其他
    git config --global alias.st(别名) status //设置别名
    
    创建.gitignore文件，可以设置忽略git目录