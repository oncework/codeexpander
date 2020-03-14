#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd public

git init
# git remote add github https://github.com/oncework/codeexpander.git
# git checkout -b master
git add -A
git commit -m 'deploy'
git push github master -f

cd -