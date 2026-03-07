# 个人网站上线说明

这个项目的网页部分适合直接部署到 GitHub Pages，但大体积原始视频不建议继续放在仓库里。

推荐结构：

- GitHub Pages：放 `index.html`、图片、简历 PDF、缩略图
- 腾讯云 COS：放完整作品视频直链

## 本地预览

1. 保持 `index.html` 和 `简历照片.JPG` 在同一个文件夹里。
2. 直接双击 `index.html`。
3. 浏览器会本地打开网站。

## GitHub Pages 部署方式

这个项目是纯静态网页，最简单稳定的方式是直接使用 GitHub Pages 的分支发布：

- 使用 `main` 分支
- 发布目录选 `/ (root)`
- 不需要 Node.js 或其他构建工具
- 页面中的作品按钮改为跳转到 COS，不再直接读取本地大视频

## 上线步骤

1. 先把每个作品上传到腾讯云 COS，拿到访问链接。
2. 打开 `index.html`，把作品区里每个 `待填写 COS...` 的条目替换成你的真实链接。
3. 在 GitHub 新建一个干净仓库，只放网页和轻量资源。
4. 把这个项目推送到那个仓库的 `main` 分支。
5. 打开 GitHub 仓库的 `Settings -> Pages`。
6. 在 `Build and deployment` 里选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
7. 保存后等待 GitHub Pages 发布完成。
8. 访问：
   - 如果仓库名是 `username.github.io`，地址是 `https://username.github.io/`
   - 否则地址通常是 `https://username.github.io/仓库名/`

## 重要提醒

- 你当前本地目录里有多个超大视频文件，单个已经达到数百 MB 到数 GB，不适合直接 push 到 GitHub。
- 如果这些大文件已经进过 Git 历史，单纯删除工作区文件也不够，仓库历史仍然会很大。
- 最稳妥的方式通常是新建一个只包含网页文件的发布仓库。

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
- 更新作品链接：把作品数据里的 COS 链接替换掉即可。
- 再次上线：修改后重新 `git add`、`git commit`、`git push` 即可，GitHub Pages 会从 `main` 分支重新发布。
