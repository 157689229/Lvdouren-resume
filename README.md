# 个人网站上线说明

这个项目现在是纯静态网页，可以直接部署到 GitHub Pages。

## 本地预览

1. 保持 `index.html` 和 `简历照片.JPG` 在同一个文件夹里。
2. 直接双击 `index.html`。
3. 浏览器会本地打开网站。

## GitHub Pages 部署方式

这个项目是纯静态网页，最简单稳定的方式是直接使用 GitHub Pages 的分支发布：

- 使用 `main` 分支
- 发布目录选 `/ (root)`
- 不需要 Node.js 或其他构建工具

## 上线步骤

1. 在 GitHub 新建一个空仓库。
2. 把这个项目推送到那个仓库的 `main` 分支。
3. 打开 GitHub 仓库的 `Settings -> Pages`。
4. 在 `Build and deployment` 里选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. 保存后等待 GitHub Pages 发布完成。
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
- 再次上线：修改后重新 `git add`、`git commit`、`git push` 即可，GitHub Pages 会从 `main` 分支重新发布。
