## 快速开始

### 环境要求

- Node.js v20.18.0
- PostgreSQL 12+
- pnpm 包管理器

### 部署方式

1. **Vercel 部署**（推荐）
   - 查看 [Vercel 部署文档](/VERCEL.md)
   - 点击上方 "Deploy with Vercel" 按钮一键部署

2. **Docker 部署**（推荐）
   - 查看 [Docker 部署文档](/DEPLOY.md#docker-部署推荐)
   ```bash
   # 1. 配置环境变量
   cp .env.example .env
   
   # 2. 构建并运行
   docker compose up -d
   ```

3. **传统部署**
   - 查看 [传统部署文档](/DEPLOY.md#传统部署)

## 项目结构

```
aipan-netdisk-search/
├── assets/          # 静态资源
├── components/      # Vue 组件
├── layouts/         # 布局组件
├── pages/          # 页面组件
├── prisma/         # 数据库模型和迁移
├── public/         # 公共文件
├── server/         # 服务端 API
├── stores/         # Pinia 状态管理
└── utils/          # 工具函数
```

## 开发指南

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量
cp .env.example .env

# 3. 数据库设置
npx prisma generate
npx prisma migrate deploy

# 4. 启动开发服务器
pnpm run dev
```

## API 说明

后台管理 API 路径：
- 登录：`/login`
- 仪表盘：`/admin/dashboard`
- 网盘管理：`/admin/clouddrive`

## 注意事项

- 项目使用第三方 API，对 IP 有访问限制
- 建议自行部署使用
- 确保数据库配置正确
- 定期备份重要数据

## 贡献指南

1. 创建特性分支：`git checkout -b feature/AmazingFeature`
2. 提交更改：`git commit -m 'Add some AmazingFeature'`
3. 推送分支：`git push origin feature/AmazingFeature`
4. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 截图展示

![部署成功截图](https://r2cf.aipan.me/readme/screen-6.png)

## 支持项目

如果这个项目对你有帮助，欢迎：

1. 🌟 给项目点个 Star
2. 💝 [打赏支持](https://www.aipan.me/donate)

## 联系方式

- 项目地址：[GitHub](https://github.com/unilei/aipan-netdisk-search)
- 问题反馈：[Issues](https://github.com/unilei/aipan-netdisk-search/issues)
- 功能建议：[Discussions](https://github.com/unilei/aipan-netdisk-search/discussions)
