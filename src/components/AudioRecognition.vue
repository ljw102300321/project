<template>
  <div class="audio-recognition">
    <h2>昆虫声音识别</h2>
    <p>录制或上传昆虫的鸣叫声，系统将为您识别可能的昆虫种类</p>
    
    <div class="audio-controls">
      <div class="record-section">
        <button 
          @click="toggleRecording" 
          class="record-button" 
          :class="{ recording: isRecording }"
          :disabled="!hasPermission"
        >
          {{ isRecording ? '停止录制' : '开始录制' }}
        </button>
        <span v-if="!hasPermission" class="permission-warning">
          需要麦克风权限才能录制音频
        </span>
      </div>
      
      <div class="upload-section">
        <input 
          type="file" 
          accept="audio/*" 
          @change="handleFileUpload"
          class="file-input"
          id="audio-file"
        />
        <label for="audio-file" class="upload-button">
          上传音频文件
        </label>
      </div>
    </div>
    
    <div class="audio-preview" v-if="audioPreview">
      <h3>音频预览</h3>
      <audio :src="audioPreview" controls class="audio-player"></audio>
      <button @click="recognizeAudio" class="recognize-button" :disabled="isRecognizing">
        {{ isRecognizing ? '识别中...' : '识别昆虫' }}
      </button>
    </div>
    
    <div class="recognition-results" v-if="recognitionResults.length > 0">
      <h3>识别结果</h3>
      <div class="result-list">
        <div 
          v-for="result in recognitionResults" 
          :key="result.insect.name"
          class="result-item"
          @click="selectInsect(result)"
        >
          <h4>{{ result.insect.name }}</h4>
          <p>匹配度: {{ result.confidence.toFixed(2) * 100 }}%</p>
          <span :class="['classification-tag', result.insect.isPest ? 'pest' : 'beneficial']">
            {{ result.insect.isPest ? '害虫' : '益虫' }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="error-message" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getInsectInfo } from '../utils/insectDatabase.js'

// 音频录制相关变量
const isRecording = ref(false)
const hasPermission = ref(false)
const audioChunks = ref([])
const mediaRecorder = ref(null)
const audioPreview = ref('')

// 识别相关变量
const isRecognizing = ref(false)
const recognitionResults = ref([])
const errorMessage = ref('')

// 检查麦克风权限
onMounted(async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true })
    hasPermission.value = true
  } catch (err) {
    console.error('无法获取麦克风权限:', err)
    hasPermission.value = false
  }
})

// 切换录制状态
async function toggleRecording() {
  if (isRecording.value) {
    // 停止录制
    mediaRecorder.value.stop()
    isRecording.value = false
  } else {
    // 开始录制
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder.value = new MediaRecorder(stream)
      audioChunks.value = []
      
      mediaRecorder.value.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunks.value.push(e.data)
        }
      }
      
      mediaRecorder.value.onstop = () => {
        const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' })
        audioPreview.value = URL.createObjectURL(audioBlob)
        
        // 停止所有音频轨道
        stream.getTracks().forEach(track => track.stop())
      }
      
      mediaRecorder.value.start()
      isRecording.value = true
    } catch (err) {
      console.error('录制失败:', err)
      errorMessage.value = '录制失败，请检查麦克风权限'
    }
  }
}

// 处理文件上传
function handleFileUpload(e) {
  const file = e.target.files[0]
  if (file) {
    audioPreview.value = URL.createObjectURL(file)
  }
}

// 识别音频
async function recognizeAudio() {
  if (!audioPreview.value) {
    errorMessage.value = '请先录制或上传音频'
    return
  }
  
  isRecognizing.value = true
  recognitionResults.value = []
  errorMessage.value = ''
  
  try {
    // 这里将实现音频识别逻辑
    // 目前使用模拟数据进行演示
    await simulateRecognition()
  } catch (err) {
    console.error('识别失败:', err)
    errorMessage.value = '识别失败，请重试'
  } finally {
    isRecognizing.value = false
  }
}

// 模拟音频识别（实际应用中需要替换为真实的识别算法）
async function simulateRecognition() {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // 模拟识别结果
  // 实际应用中，这里应该调用音频识别模型获取结果
  const possibleInsects = ['蟋蟀', '蝉', '蝈蝈', '纺织娘']
  const randomInsect = possibleInsects[Math.floor(Math.random() * possibleInsects.length)]
  
  const insectInfo = getInsectInfo(randomInsect)
  if (insectInfo) {
    recognitionResults.value = [
      {
        insect: insectInfo,
        confidence: 0.85 + Math.random() * 0.15 // 随机生成85%-100%的置信度
      }
    ]
  }
}

// 选择昆虫
function selectInsect(result) {
  // 这里可以触发父组件的事件，显示昆虫详情
  // 实际应用中需要根据项目结构进行调整
  console.log('选择的昆虫:', result.insect)
}
</script>

<style scoped>
.audio-recognition {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #1976d2;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.audio-controls {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.record-section, .upload-section {
  text-align: center;
}

.record-button {
  background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
}

.record-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(244, 67, 54, 0.4);
}

.record-button.recording {
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.permission-warning {
  display: block;
  margin-top: 1rem;
  color: #ff9800;
  font-size: 0.9rem;
}

.file-input {
  display: none;
}

.upload-button {
  display: inline-block;
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
}

.upload-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
}

.audio-preview {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 10px;
}

.audio-preview h3 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.audio-player {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
}

.recognize-button {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
}

.recognize-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
}

.recognize-button:disabled {
  background: #bdbdbd;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.recognition-results {
  margin-top: 2rem;
}

.recognition-results h3 {
  color: #1976d2;
  margin-bottom: 1.5rem;
  text-align: center;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-item {
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.result-item:hover {
  background: #e3f2fd;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.result-item h4 {
  color: #1976d2;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.result-item p {
  margin: 0 0 1rem 0;
  color: #666;
  text-align: left;
}

.classification-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.classification-tag.pest {
  background-color: #ffebee;
  color: #c62828;
}

.classification-tag.beneficial {
  background-color: #e8f5e8;
  color: #2e7d32;
}

.error-message {
  text-align: center;
  color: #f44336;
  background: #ffebee;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 2rem;
}
</style>