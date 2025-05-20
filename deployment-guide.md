# 电子菜单部署指南

本指南将帮助您将电子菜单网站部署到互联网上，使顾客可以通过扫描二维码访问您的菜单。

## 部署选项

### 选项1：使用GitHub Pages（免费，推荐新手使用）

1. **创建GitHub账号**：如果您还没有GitHub账号，请前往 [GitHub](https://github.com) 注册一个账号。

2. **创建新仓库**：
   - 登录GitHub后，点击右上角的 "+" 按钮，选择 "New repository"。
   - 为仓库命名（例如：menu-qr）。
   - 选择 "Public"（公开）。
   - 点击 "Create repository"。

3. **上传文件**：
   - 将您的所有项目文件（index.html, css/, js/, qr-generator.html等）上传到仓库。
   - 您可以通过GitHub网页界面上传，或使用Git命令行工具。

4. **启用GitHub Pages**：
   - 在仓库页面，点击 "Settings"。
   - 滚动到 "GitHub Pages" 部分。
   - 在 "Source" 下拉菜单中，选择 "main" 分支。
   - 点击 "Save"。
   - GitHub会提供一个URL（通常格式为 https://[用户名].github.io/[仓库名]/）。

5. **更新二维码生成器**：
   - 打开qr-generator.html页面。
   - 将菜单URL地址更改为您的GitHub Pages URL（例如：https://[用户名].github.io/[仓库名]/index.html）。

### 选项2：使用Netlify（免费，更专业）

1. **创建Netlify账号**：前往 [Netlify](https://www.netlify.com/) 注册一个账号。

2. **部署网站**：
   - 登录后，点击 "New site from Git"。
   - 选择GitHub（或其他Git提供商）。
   - 授权Netlify访问您的GitHub账号。
   - 选择包含菜单网站的仓库。
   - 保持默认设置，点击 "Deploy site"。

3. **自定义域名**（可选）：
   - Netlify会提供一个随机域名（例如：random-name.netlify.app）。
   - 您可以在 "Site settings" > "Domain management" 中设置自定义域名。

4. **更新二维码生成器**：
   - 使用Netlify提供的URL或您的自定义域名更新qr-generator.html中的菜单URL地址。

### 选项3：使用Vercel（免费，适合开发者）

1. **创建Vercel账号**：前往 [Vercel](https://vercel.com/) 注册一个账号。

2. **部署网站**：
   - 登录后，点击 "New Project"。
   - 导入您的Git仓库。
   - 保持默认设置，点击 "Deploy"。

3. **更新二维码生成器**：
   - 使用Vercel提供的URL更新qr-generator.html中的菜单URL地址。

### 选项4：传统虚拟主机或云服务器

如果您已有虚拟主机或云服务器：

1. **上传文件**：使用FTP客户端（如FileZilla）将所有文件上传到您的服务器。

2. **确定URL**：根据您的域名和文件位置确定菜单的URL。

3. **更新二维码生成器**：使用您的实际URL更新qr-generator.html中的菜单URL地址。

## 生成和使用二维码

1. **访问二维码生成器**：打开已部署的qr-generator.html页面。

2. **输入菜单URL**：确保URL字段包含您部署后的菜单实际地址。

3. **生成二维码**：点击"生成二维码"按钮。

4. **保存二维码**：右键点击生成的二维码图片，选择"图片另存为"保存到您的设备。

5. **打印和分发**：打印二维码并放置在餐桌上或前台，供顾客扫描访问。

## 注意事项

- 确保您的菜单在移动设备上显示正常，因为大多数顾客将使用手机扫描二维码。
- 定期检查您的网站是否正常运行。
- 如果您更新了菜单内容，确保重新部署网站。
- 考虑为您的菜单网站添加分析工具（如Google Analytics），以跟踪访问情况。

## 故障排除

- 如果二维码扫描后无法访问菜单，请检查URL是否正确。
- 确保所有图片路径正确，特别是如果您使用了相对路径。
- 如果使用自定义域名，确保DNS设置正确。

祝您的电子菜单使用愉快！如有任何问题，请随时联系技术支持。