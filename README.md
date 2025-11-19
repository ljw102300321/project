# 昆虫识别与防治系统

一个基于Vue.js的昆虫信息查询应用程序，能够通过输入昆虫名称来查询昆虫种类的详细信息，并提供相关的防治建议。该应用采用现代化的Web技术栈，支持昆虫名称搜索、智能搜索建议和交互式昆虫图鉴功能。

## 功能特性

1. **昆虫名称查询**：通过输入昆虫名称快速获取详细信息
2. **昆虫图鉴**：提供常见昆虫的详细信息浏览，包括形态特征、生活习性、分布范围等
3. **智能搜索建议**：根据输入内容提供实时搜索建议，提高查询效率
4. **热门昆虫推荐**：展示常见昆虫，方便快速浏览
5. **查看介绍**：查看在古代诗词中对搜索昆虫的描写，了解其历史文化
6. **响应式设计**：适配不同屏幕尺寸的设备，包括桌面端、平板和移动设备
7. **友好的错误处理**：当查询不到结果时提供替代建议

## 技术栈

- **前端框架**：Vue 3 (Composition API)
- **构建工具**：Vite
- **样式**：CSS3
- **部署**：Nginx (Windows/Linux)

## 环境要求

- Node.js >= 14.x
- npm >= 6.x
- 现代浏览器（支持ES6+和WebGL）

## 安装与运行

### 开发模式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 生产构建

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

### 预览生产构建

```bash
npm run preview
```

## 部署方式

### Nginx部署（Windows）

1. **解压Nginx**：项目根目录下已有 `nginx-1.26.0.zip` 压缩包，解压到项目根目录

2. **配置Nginx**：
   - 编辑项目根目录下的 `nginx.conf` 文件，确保配置正确
   - 确保 `server` 块包含以下配置：
     ```nginx
     server {
         listen 3000;
         server_name localhost;
         location / {
             root html;
             index index.html index.htm;
             try_files $uri $uri/ /index.html;
         }
     }
     ```

3. **部署应用**：
   - 运行 `npm run build` 构建应用
   - 将构建后的 `dist` 目录内容复制到Nginx的 `html` 目录
   - 复制项目根目录下的 `nginx.conf` 到Nginx的 `conf` 目录

4. **启动Nginx**：
   - 进入 `nginx-1.26.0` 目录
   - 直接双击 `start.bat` 或在命令行运行：
     ```bash
     # 直接启动
     nginx.exe
     
     # 或使用提供的启动脚本
     start.bat
     ```

5. **停止Nginx**：
   - 进入 `nginx-1.26.0` 目录
   - 直接双击 `stop.bat` 或在命令行运行：
     ```bash
     nginx.exe -s stop
     
     # 或使用提供的停止脚本
     stop.bat
     ```

6. **访问应用**：打开浏览器访问 `http://localhost:3000`

### Docker部署（可选）

1. **构建Docker镜像**：
   ```bash
   docker build -t insect-recognition .
   ```

2. **运行Docker容器**：
   ```bash
   docker run -p 3000:80 insect-recognition
   ```

## API接口说明

### 获取昆虫详情接口

**请求方式**：GET
**URL**：`/api/insect/:name`
**参数**：
- `name`: 昆虫名称

**响应**：
```json
{
  "success": true,
  "insect": {
    "name": "蜜蜂",
    "category": "益虫",
    "description": "...",
    "habitat": "...",
    "diet": "...",
    "lifespan": "...",
    "controlMethods": "..."
  }
}
```

### 获取所有昆虫名称接口

**请求方式**：GET
**URL**：`/api/insects`
**响应**：
```json
{
  "success": true,
  "insects": ["蜜蜂", "苍蝇", "蚂蚁", "蝴蝶", ...]
}
```

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── AudioRecognition.vue      # 音频识别组件（未实现功能）
│   │   ├── InsectGuide.vue           # 昆虫图鉴组件
│   │   └── ResultDisplay.vue         # 搜索结果显示组件
│   ├── utils/
│   │   ├── errorHandler.js           # 错误处理模块
│   │   ├── insectDatabase.js         # 昆虫数据库
│   │   └── qwenApi.js                # 文心一言API封装（未实现功能）
│   ├── App.vue                       # 主应用组件
│   ├── main.js                       # 应用入口文件
│   └── style.css                     # 全局样式
├── public/
│   └── models/                       # 预训练模型目录（未使用）
├── dist/                             # 生产构建产物
├── nginx-1.26.0/                     # Nginx部署文件
├── nginx-1.26.0.zip                  # Nginx压缩包
├── nginx.zip                         # Nginx压缩包
├── .gitignore                        # Git忽略文件
├── Dockerfile                        # Docker配置文件
├── index.html                        # HTML模板
├── nginx.conf                        # Nginx配置文件
├── package-lock.json                 # 依赖锁定文件
├── package.json                      # 项目配置文件
├── README.md                         # 项目文档
└── vite.config.js                    # Vite配置文件
```

## 使用说明

1. 打开应用程序首页
2. 在搜索框中输入昆虫名称（如：蜜蜂、蝴蝶、蜻蜓等）
3. 系统会根据输入内容提供实时搜索建议
4. 点击搜索按钮或按回车键进行查询
5. 查看昆虫的详细信息，包括形态特征、生活习性等
6. 也可以通过点击热门昆虫推荐快速查看常见昆虫信息
7. 如果查询不到结果，系统会提供替代搜索建议

## 错误处理

应用程序包含完善的错误处理机制，能够处理以下类型的错误：
- 昆虫名称查询错误（未找到相关信息）
- 网络请求错误（API调用失败、超时等）
- 输入验证错误
- 其他未知错误

所有错误都会在用户界面显示友好的错误信息，并提供替代建议。



## 优化建议

### 性能优化

1. **代码分割**：使用动态导入来分割应用代码，减少初始加载时间
2. **缓存策略**：合理设置静态资源缓存，减少重复请求
3. **数据库优化**：优化昆虫数据库结构，提高查询效率

### 功能优化

1. **添加图像识别**：集成图像识别功能，支持通过上传图片识别昆虫
2. **增强搜索功能**：添加模糊搜索、分类筛选等高级搜索功能
3. **多语言支持**：添加国际化支持，支持多种语言
4. **用户反馈**：添加用户反馈功能，收集使用体验建议

## 贡献指南

欢迎贡献代码和提出建议！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。

## 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues: [项目Issues页面](https://github.com/ljw102300321/project/issues)
- 电子邮件: [your-email@example.com]


## 致谢

感谢以下项目和资源的支持：

- Vue.js 团队
- 所有贡献者和用户