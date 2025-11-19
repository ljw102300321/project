<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <span class="title-icon">🐛</span>
          <span class="title-text">昆虫百科系统</span>
        </h1>
        <p class="subtitle">探索昆虫世界的奥秘，了解每个小生命的独特之处</p>
      </div>
    </header>

    <main class="main-content">
      <!-- 搜索区域 -->
      <section class="search-section">
        <div class="search-card">
          <div class="search-header">
            <h2 class="search-title">🔍 昆虫查询</h2>
            <p class="search-description">输入昆虫名称，获取详细信息</p>
          </div>
          <div class="search-container">
            <div class="search-input-wrapper">
              <input
                v-model="searchQuery"
                @keyup.enter="searchInsect"
                @input="onSearchInput"
                placeholder="请输入昆虫名称（如：蝉、萤火虫、螳螂等）"
                class="search-input"
              />
              <button @click="searchInsect" class="search-button">
                <span class="search-icon">🔍</span>
                <span>查询</span>
              </button>
            </div>
            <!-- 搜索建议下拉框 -->
            <div v-if="searchSuggestions.length > 0" class="search-suggestions">
              <div
                v-for="suggestion in searchSuggestions"
                :key="suggestion"
                @click="selectSuggestion(suggestion)"
                class="suggestion-item"
              >
                {{ suggestion }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 热门昆虫推荐 -->
      <section class="popular-section">
        <div class="section-header">
          <h3 class="section-title">🔥 热门昆虫推荐</h3>
          <p class="section-description">点击快速查看这些有趣的昆虫</p>
        </div>
        <div class="insect-grid">
          <div
            v-for="insect in popularInsects"
            :key="insect"
            @click="selectInsect(insect)"
            class="insect-card"
          >
            <div class="insect-icon">🐛</div>
            <span class="insect-name">{{ insect }}</span>
          </div>
        </div>
      </section>

      <!-- 查询结果区域 -->
      <section class="result-section">
        <ResultDisplay v-if="identifiedInsect" :result="identifiedInsect" />
        <div v-else-if="searchQuery && !identifiedInsect" class="no-result-card">
          <div class="no-result-icon">❌</div>
          <h3 class="no-result-title">未找到相关昆虫</h3>
          <p class="no-result-description">请检查输入的昆虫名称是否正确，或尝试其他名称</p>
          <div class="suggestions">
            <p class="suggestions-title">您可以尝试搜索：</p>
            <div class="suggestion-tags">
              <span
                v-for="suggestion in fallbackSuggestions"
                :key="suggestion"
                @click="selectInsect(suggestion)"
                class="suggestion-tag"
              >
                {{ suggestion }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>© 昆虫百科系统 - 让昆虫知识触手可及</p>
        <p class="footer-subtitle">探索自然，保护生态</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ResultDisplay from './components/ResultDisplay.vue'
import { getInsectInfo, getAllInsectNames } from './utils/insectDatabase.js'

const searchQuery = ref('')
const identifiedInsect = ref(null)
const searchSuggestions = ref([])
const allInsectNames = ref([])
const isLoading = ref(false)

const popularInsects = ref(['蜜蜂', '苍蝇', '蚂蚁', '蝴蝶', '蜻蜓', '蝉', '萤火虫', '螳螂', '白蛾', '蓟马'])

const fallbackSuggestions = ['蟋蟀', '金龟子', '红蜘蛛', '蟑螂', '蝗虫', '瓢虫', '蚊子', '蚜虫', '草蛉', '食蚜蝇', '竹节虫', '天牛', '蠋蝽', '叶蝉', '步行虫', '粉虱', '潜叶蝇']

onMounted(() => {
  try {
    const allNames = getAllInsectNames()
    allInsectNames.value = allNames
    if (allNames.length > 0) {
      popularInsects.value = allNames.slice(0, 8)
    }
  } catch (error) {
    console.error('获取昆虫列表失败:', error)
  }
})

const onSearchInput = () => {
  if (!searchQuery.value.trim()) {
    searchSuggestions.value = []
    return
  }
  
  // 根据输入内容过滤昆虫名称
  const query = searchQuery.value.toLowerCase()
  searchSuggestions.value = allInsectNames.value
    .filter(name => name.toLowerCase().includes(query))
    .slice(0, 5) // 最多显示5个建议
}

const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion
  searchSuggestions.value = []
  searchInsect()
}

const searchInsect = () => {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  identifiedInsect.value = null
  searchSuggestions.value = [] // 清空搜索建议
  
  // 模拟API调用延迟
  setTimeout(() => {
    try {
      const insectInfo = getInsectInfo(searchQuery.value.trim())
      if (insectInfo) {
        identifiedInsect.value = insectInfo
      }
    } catch (error) {
      console.error('查询失败:', error)
      alert('查询失败，请重试')
    } finally {
      isLoading.value = false
    }
  }, 300)
}

const selectInsect = (insectName) => {
  searchQuery.value = insectName
  searchInsect()
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

/* 头部样式 */
.app-header {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.app-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.title-icon {
  font-size: 3.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
}

/* 主要内容区域 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* 搜索区域 */
.search-section {
  margin-bottom: 3rem;
}

.search-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.search-card:hover {
  transform: translateY(-2px);
}

.search-header {
  text-align: center;
  margin-bottom: 2rem;
}

.search-title {
  color: #1976d2;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.search-description {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.search-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper {
  display: flex;
  gap: 1rem;
  background: #f5f5f5;
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.search-input-wrapper:focus-within {
  background: #e3f2fd;
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.2);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  background: transparent;
  border-radius: 50px;
}

.search-button {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4);
}

.search-icon {
  font-size: 1.2rem;
}

/* 搜索建议 */
.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  overflow: hidden;
  z-index: 1000;
}

.suggestion-item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background-color: #e3f2fd;
}

/* 热门昆虫推荐 */
.popular-section {
  margin-bottom: 3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  color: #1976d2;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.section-description {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.insect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.insect-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
}

.insect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #1976d2;
}

.insect-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.insect-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* 结果区域 */
.result-section {
  margin-bottom: 2rem;
}

/* 视图切换按钮 */
.view-toggle {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.toggle-button {
  padding: 0.8rem 1.5rem;
  border: 2px solid #1976d2;
  background: white;
  color: #1976d2;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.toggle-button:hover {
  background: #e3f2fd;
}

.toggle-button.active {
  background: #1976d2;
  color: white;
}

/* 无结果卡片 */
.no-result-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.no-result-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.no-result-title {
  color: #d32f2f;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}

.no-result-description {
  color: #666;
  font-size: 1rem;
  margin: 0 0 2rem 0;
}

.suggestions {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.suggestions-title {
  color: #1976d2;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.suggestion-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.suggestion-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.suggestion-tag:hover {
  background: #1976d2;
  color: white;
  transform: translateY(-2px);
}

/* 页脚 */
.app-footer {
  background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-subtitle {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0.5rem 0 0 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-title {
    font-size: 2.2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .title-icon {
    font-size: 3rem;
  }
  
  .search-card {
    padding: 1.5rem;
  }
  
  .search-input-wrapper {
    flex-direction: column;
    border-radius: 15px;
  }
  
  .search-button {
    border-radius: 15px;
    justify-content: center;
  }
  
  .insect-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .insect-card {
    padding: 1rem;
  }
  
  .no-result-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 2rem 0;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .insect-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .suggestion-tags {
    gap: 0.3rem;
  }
  
  .suggestion-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>