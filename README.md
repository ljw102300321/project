# 昆虫识别与防治系统

一个基于Vue.js和TensorFlow.js的昆虫识别应用程序，能够通过上传昆虫图片来识别昆虫种类，并提供相关的防治建议。

## 功能特性

1. **昆虫图像识别**：使用MobileNet模型进行昆虫识别
2. **辅助识别功能**：当自动识别失败时，用户可以通过选择昆虫特征来辅助识别
3. **昆虫图鉴**：提供常见昆虫的详细信息浏览
4. **防治建议**：针对害虫提供防治方法，针对益虫提供保护建议
5. **响应式设计**：适配不同屏幕尺寸的设备

## 技术栈

- Vue 3 (Composition API)
- TensorFlow.js (MobileNet模型)
- Vite (构建工具)
- JavaScript/HTML/CSS

## 安装与运行

### 开发模式

```bash
npm install
npm run dev
```

### 生产构建

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

## 项目结构

```
src/
├── components/
│   ├── ImageUploader.vue       # 图片上传组件
│   ├── ResultDisplay.vue       # 识别结果显示组件
│   ├── UserAssistedIdentification.vue  # 用户辅助识别组件
│   └── InsectGuide.vue         # 昆虫图鉴组件
├── utils/
│   ├── api.js                 # 识别API和模型加载
│   ├── imageProcessing.js     # 图像处理工具
│   ├── insectDatabase.js      # 昆虫数据库
│   └── errorHandler.js        # 错误处理模块
├── App.vue                    # 主应用组件
└── main.js                    # 应用入口文件
```

## 使用说明

1. 打开应用程序首页
2. 点击"选择图片"按钮上传昆虫照片
3. 点击"开始识别"按钮进行识别
4. 查看识别结果和相关信息
5. 如需浏览其他昆虫信息，可点击导航栏的"昆虫图鉴"选项

## 错误处理

应用程序包含完善的错误处理机制，能够处理以下类型的错误：
- 图像处理错误
- 模型加载错误
- 特征提取错误
- 网络请求错误
- 其他未知错误

所有错误都会被记录并在用户界面显示友好的错误信息。

## 优化建议

对于生产部署，可以考虑以下优化措施：
1. 使用动态导入来代码分割应用
2. 调整构建配置以改善分块
3. 压缩资源文件大小