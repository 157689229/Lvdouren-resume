# 个人网站上线说明

这个项目现在是纯静态网页，可以直接部署到 GitHub Pages。

## 本地预览

1. 保持 `index.html` 和 `简历照片.JPG` 在同一个文件夹里。
2. 直接双击 `index.html`。
3. 浏览器会本地打开网站。

## 已配置好的 GitHub 部署方式

仓库里已经加了 GitHub Pages 自动部署工作流：

- 推送到 `main` 分支后会自动发布
- 不需要安装 Node.js 或其他构建工具
- 网站会直接把当前仓库内容作为静态站部署

## 上线步骤

1. 在 GitHub 新建一个空仓库。
2. 把这个项目推送到那个仓库的 `main` 分支。
3. 打开 GitHub 仓库的 `Settings -> Pages`。
4. 如果页面里显示部署来源，选择 `GitHub Actions`。
5. 等待 `Actions` 里的部署任务完成。
6. 访问：
   - 如果仓库名是 `username.github.io`，地址是 `https://username.github.io/`
   - 否则地址通常是 `https://username.github.io/仓库名/`

## 常用命令

把下面的地址替换成你自己的仓库地址：

```bash
git add .
git commit -m "Initial website launch"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## 后续更新

- 替换头像：直接换掉同目录下的 `简历照片.JPG`，名字保持不变即可。
- 修改内容：编辑 `index.html`。
- 再次上线：修改后重新 `git add`、`git commit`、`git push` 即可自动发布。
