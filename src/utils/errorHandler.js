// 错误处理工具模块

// 错误类型枚举
export const ERROR_TYPES = {
  IMAGE_PROCESSING: 'IMAGE_PROCESSING',
  MODEL_LOADING: 'MODEL_LOADING',
  FEATURE_EXTRACTION: 'FEATURE_EXTRACTION',
  NETWORK: 'NETWORK',
  UNKNOWN: 'UNKNOWN'
}

// 错误信息映射
export const ERROR_MESSAGES = {
  [ERROR_TYPES.IMAGE_PROCESSING]: '图片处理失败，请确保上传的是有效的图片文件',
  [ERROR_TYPES.MODEL_LOADING]: '模型加载失败，请检查网络连接后重试',
  [ERROR_TYPES.FEATURE_EXTRACTION]: '特征提取失败，无法识别图片中的昆虫',
  [ERROR_TYPES.NETWORK]: '网络请求失败，请检查网络连接后重试',
  [ERROR_TYPES.UNKNOWN]: '未知错误，请稍后重试或联系技术支持'
}

// 详细错误信息映射
export const DETAILED_ERROR_INFO = {
  [ERROR_TYPES.IMAGE_PROCESSING]: {
    title: '图片处理错误',
    description: '系统在处理您上传的图片时遇到了问题',
    possibleCauses: [
      '图片文件已损坏',
      '图片格式不受支持',
      '图片文件过大',
      '浏览器不支持该图片格式'
    ],
    solutions: [
      '尝试上传其他格式的图片（如JPG、PNG）',
      '压缩图片大小后重新上传',
      '使用其他浏览器重试'
    ]
  },
  [ERROR_TYPES.MODEL_LOADING]: {
    title: '模型加载错误',
    description: '系统无法加载识别模型',
    possibleCauses: [
      '网络连接不稳定',
      '模型文件服务器不可用',
      '浏览器缓存问题'
    ],
    solutions: [
      '检查网络连接是否正常',
      '刷新页面重试',
      '清除浏览器缓存后重试'
    ]
  },
  [ERROR_TYPES.FEATURE_EXTRACTION]: {
    title: '特征提取错误',
    description: '系统无法从图片中提取有效的昆虫特征',
    possibleCauses: [
      '图片质量过低',
      '图片中昆虫不清晰',
      '图片中无昆虫或昆虫特征不明显'
    ],
    solutions: [
      '上传更清晰的图片',
      '确保昆虫在图片中占据主要位置',
      '使用辅助识别功能手动提供特征'
    ]
  },
  [ERROR_TYPES.NETWORK]: {
    title: '网络错误',
    description: '网络请求过程中发生错误',
    possibleCauses: [
      '网络连接中断',
      '服务器响应超时',
      'API服务不可用'
    ],
    solutions: [
      '检查网络连接是否正常',
      '稍后重试',
      '联系技术支持'
    ]
  },
  [ERROR_TYPES.UNKNOWN]: {
    title: '未知错误',
    description: '系统遇到了未预期的错误',
    possibleCauses: [
      '系统内部错误',
      '浏览器兼容性问题',
      '资源加载失败'
    ],
    solutions: [
      '刷新页面重试',
      '使用其他浏览器重试',
      '联系技术支持'
    ]
  }
}

// 创建错误对象
export const createError = (type, originalError, additionalInfo = {}) => {
  return {
    type,
    message: ERROR_MESSAGES[type],
    details: DETAILED_ERROR_INFO[type],
    originalError,
    timestamp: new Date().toISOString(),
    ...additionalInfo
  }
}

// 记录错误日志
export const logError = (error) => {
  // 在生产环境中，这里可以将错误发送到日志服务器
  console.error('应用错误:', error)
  
  // 如果是开发环境，输出详细信息
  if (process.env.NODE_ENV === 'development') {
    console.group('详细错误信息')
    console.log('错误类型:', error.type)
    console.log('错误时间:', error.timestamp)
    console.log('错误信息:', error.message)
    console.log('原始错误:', error.originalError)
    console.groupEnd()
  }
}

// 格式化错误显示给用户
export const formatErrorForUser = (error) => {
  return {
    title: error.details?.title || '错误',
    message: error.message,
    description: error.details?.description || '',
    possibleCauses: error.details?.possibleCauses || [],
    solutions: error.details?.solutions || []
  }
}

// 导出默认错误处理函数
export default {
  ERROR_TYPES,
  ERROR_MESSAGES,
  DETAILED_ERROR_INFO,
  createError,
  logError,
  formatErrorForUser
}