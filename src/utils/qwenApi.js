// 通义千问API工具函数
import { createError, ERROR_TYPES, logError } from './errorHandler';

// 通义千问API配置
const QWEN_API_URL = 'https://bailian.console.aliyun.com/?tab=model#/model-market/detail/qwen3-vl-plus';
// 从环境变量中获取API密钥
const API_KEY = import.meta.env.VITE_QWEN_API_KEY;

/**
 * 调用通义千问API进行图像识别
 * @param {string} imageBase64 - 图片的base64编码
 * @param {string} prompt - 识别提示词
 * @returns {Promise<Object>} 识别结果
 */
export const identifyImageWithQwen = async (imageBase64, prompt = "请识别这张图片中的昆虫，并提供昆虫的详细信息，包括名称、分类、特征、颜色、形状、大小等。") => {
  try {
    // 检查API密钥
    if (!API_KEY ) {
      const error = createError(
        ERROR_TYPES.NETWORK,
        new Error('Missing Qwen API key'),
        { reason: '缺少通义千问API密钥，请在环境变量中设置VITE_QWEN_API_KEY' }
      );
      logError(error);
      throw error;
    }

    // 移除base64前缀
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    // 构造请求参数
    const requestData = {
      model: "qwen-vl-plus",
      input: {
        messages: [
          {
            role: "user",
            content: [
              {
                image: base64Data
              },
              {
                text: prompt
              }
            ]
          }
        ]
      },
      parameters: {
        seed: 1234,
        response_format: { type: "text" }
      }
    };

    // 发送请求到通义千问API
    const response = await fetch(QWEN_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'X-DashScope-Async': 'disable'
      },
      body: JSON.stringify(requestData)
    });

    // 检查响应状态
    if (!response.ok) {
      const errorText = await response.text();
      const error = createError(
        ERROR_TYPES.NETWORK,
        new Error(`API request failed with status ${response.status}`),
        { 
          reason: `通义千问API请求失败: ${response.status} ${response.statusText}`,
          details: errorText
        }
      );
      logError(error);
      throw error;
    }

    // 解析响应数据
    const result = await response.json();
    
    // 检查API返回的错误
    if (result.code) {
      const error = createError(
        ERROR_TYPES.NETWORK,
        new Error(`Qwen API error: ${result.message}`),
        { 
          reason: `通义千问API返回错误: ${result.message}`,
          details: result
        }
      );
      logError(error);
      throw error;
    }

    // 返回识别结果
    return {
      success: true,
      data: result.output.choices[0].message.content,
      rawResponse: result
    };
  } catch (error) {
    console.error('通义千问API调用失败:', error);
    
    // 如果是自定义错误，直接抛出
    if (error.type) {
      throw error;
    }
    
    // 否则创建未知错误
    const unknownError = createError(ERROR_TYPES.UNKNOWN, error);
    logError(unknownError);
    throw unknownError;
  }
};

/**
 * 解析通义千问的文本响应为结构化昆虫数据
 * @param {string} responseText - 通义千问的文本响应
 * @returns {Object} 结构化的昆虫数据
 */
export const parseQwenResponse = (responseText) => {
  try {
    // 这里可以添加更复杂的解析逻辑
    // 目前我们只是简单地返回响应文本
    return {
      name: "识别结果",
      description: responseText,
      features: "请查看详细描述了解昆虫特征"
    };
  } catch (error) {
    console.error('解析通义千问响应失败:', error);
    return {
      name: "解析失败",
      description: responseText,
      features: "无法解析识别结果"
    };
  }
};

export default {
  identifyImageWithQwen,
  parseQwenResponse
};