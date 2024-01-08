# 构建
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
git init			
git add -A
git commit -m 'master'
git push -f git@github.com:lpw94/lpw94.github.io.git master

