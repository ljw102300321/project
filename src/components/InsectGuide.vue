<template>
  <div class="insect-guide">
    <h2>昆虫图鉴</h2>
    <p>在这里您可以浏览我们的昆虫数据库，了解更多关于各种昆虫的信息。</p>
    
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="搜索昆虫..." 
        class="search-input"
      />
      <button @click="clearSearch" class="clear-btn" v-if="searchQuery">清除</button>
    </div>
    
    <div class="filter-controls">
      <div class="filter-group">
        <label>分类:</label>
        <select v-model="selectedClassification">
          <option value="">全部</option>
          <option value="益虫">益虫</option>
          <option value="害虫">害虫</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label>类别:</label>
        <select v-model="selectedCategory">
          <option value="">全部</option>
          <option v-for="category in allCategories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      
      <div class="filter-group">
        <label>颜色:</label>
        <select v-model="selectedColor">
          <option value="">全部</option>
          <option v-for="color in allColors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>
    </div>
    
    <div class="insect-grid">
      <div 
        v-for="insect in filteredInsects" 
        :key="insect.name"
        class="insect-card"
        @click="selectInsect(insect)"
      >
        <div class="insect-image">
          <!-- 使用默认图片占位符 -->
          <div class="image-placeholder">{{ insect.name.charAt(0) }}</div>
        </div>
        <div class="insect-info">
          <h3>{{ insect.name }}</h3>
          <span :class="['classification-tag', insect.isPest ? 'pest' : 'beneficial']">
            {{ insect.isPest ? '害虫' : '益虫' }}
          </span>
          <p class="features">{{ insect.keyFeatures.join(', ') }}</p>
        </div>
      </div>
    </div>
    
    <!-- 昆虫详情模态框 -->
    <div v-if="selectedInsect" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2>{{ selectedInsect.name }}</h2>
        <div class="insect-detail-info">
          <div class="detail-item">
            <strong>分类:</strong>
            <span :class="['classification-tag', selectedInsect.isPest ? 'pest' : 'beneficial']">
              {{ selectedInsect.isPest ? '害虫' : '益虫' }}
            </span>
            <span class="category-tag">{{ selectedInsect.category }}</span>
          </div>
          <div class="detail-item">
            <strong>主要特征:</strong>
            <ul>
              <li v-for="feature in selectedInsect.keyFeatures" :key="feature">{{ feature }}</li>
            </ul>
          </div>
          <div class="detail-item">
            <strong>栖息地:</strong>
            <p>{{ selectedInsect.habitat }}</p>
          </div>
          <div class="detail-item">
            <strong>食性:</strong>
            <p>{{ selectedInsect.diet }}</p>
          </div>
          <div class="detail-item">
            <strong>天敌:</strong>
            <ul v-if="selectedInsect.naturalEnemies && selectedInsect.naturalEnemies.length > 0">
              <li v-for="enemy in selectedInsect.naturalEnemies" :key="enemy">{{ enemy }}</li>
            </ul>
            <p v-else>无已知天敌信息</p>
          </div>
          
          <!-- 古诗词展示 -->
          <div class="detail-item">
            <strong>古诗词描写:</strong>
            <button v-if="selectedInsect.classicalPoems && selectedInsect.classicalPoems.length > 0" 
                    @click="showPoems = !showPoems" 
                    class="poem-btn">
              {{ showPoems ? '收起' : '查看' }}📖
            </button>
            <p v-else>暂无古诗词描写</p>
            
            <div v-if="showPoems && selectedInsect.classicalPoems && selectedInsect.classicalPoems.length > 0" class="poems-container">
              <div v-for="(poem, index) in selectedInsect.classicalPoems" :key="index" class="poem-item">
                <div class="poem-title">{{ poem.title }}</div>
                <div class="poem-author">— {{ poem.author }}</div>
                <div class="poem-content">{{ poem.content }}</div>
              </div>
            </div>
          </div>
          <div v-if="selectedInsect.isPest" class="detail-item">
            <strong>防治方法:</strong>
            <ul>
              <li v-for="method in selectedInsect.controlMethods" :key="method">{{ method }}</li>
            </ul>
          </div>
          <div v-else class="detail-item">
            <strong>保护建议:</strong>
            <p>{{ selectedInsect.protectionAdvice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { insectDatabase } from '../utils/insectDatabase.js'

export default {
  name: 'InsectGuide',
  setup() {
    // 搜索查询
    const searchQuery = ref('')
    
    // 分类筛选
    const selectedClassification = ref('')
    
    // 类别筛选
    const selectedCategory = ref('')
    
    // 颜色筛选
    const selectedColor = ref('')
    
    // 选中的昆虫
    const selectedInsect = ref(null)
    
    // 控制古诗词展示的状态
    const showPoems = ref(false)
    
    // 从数据库获取昆虫数据
    const insects = ref(Object.values(insectDatabase))
    
    // 获取所有唯一颜色
    const allColors = computed(() => {
      const colors = new Set()
      insects.value.forEach(insect => {
        insect.colors.forEach(color => colors.add(color))
      })
      return Array.from(colors)
    })
    
    // 获取所有唯一类别
    const allCategories = computed(() => {
      const categories = new Set()
      insects.value.forEach(insect => categories.add(insect.category))
      return Array.from(categories)
    })
    
    // 过滤后的昆虫列表
    const filteredInsects = computed(() => {
      return insects.value.filter(insect => {
        // 搜索过滤
        const matchesSearch = insect.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          insect.keyFeatures.some(feature => feature.toLowerCase().includes(searchQuery.value.toLowerCase()))
        
        // 分类过滤
        const matchesClassification = selectedClassification.value ? 
          (selectedClassification.value === '益虫' && !insect.isPest) ||
          (selectedClassification.value === '害虫' && insect.isPest) : true
        
        // 类别过滤
        const matchesCategory = selectedCategory.value ? 
          insect.category === selectedCategory.value : true
        
        // 颜色过滤
        const matchesColor = selectedColor.value ? 
          insect.colors.includes(selectedColor.value) : true
        
        return matchesSearch && matchesClassification && matchesCategory && matchesColor
      })
    })
    
    // 清除搜索
    const clearSearch = () => {
      searchQuery.value = ''
    }
    
    // 选择昆虫
    const selectInsect = (insect) => {
      selectedInsect.value = insect
    }
    
    // 关闭模态框
    const closeModal = () => {
      selectedInsect.value = null
    }
    
    return {
      searchQuery,
      selectedClassification,
      showPoems,
      selectedCategory,
      selectedColor,
      selectedInsect,
      insects,
      filteredInsects,
      allColors,
      allCategories,
      clearSearch,
      selectInsect,
      closeModal
    }
  }
}
</script>

<style scoped>
.insect-guide {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.insect-guide h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.insect-guide p {
  color: #34495e;
  margin-bottom: 2rem;
}

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.clear-btn {
  padding: 12px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.clear-btn:hover {
  background-color: #c0392b;
}

.filter-controls {
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-group label {
  font-weight: bold;
  color: #2c3e50;
}

.filter-group select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
}

.insect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.insect-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.insect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.insect-image {
  height: 150px;
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.insect-info {
  padding: 1.2rem;
}

.insect-info h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.classification-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.classification-tag.beneficial {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.classification-tag.pest {
  background-color: #ffebee;
  color: #c62828;
}

.features {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #7f8c8d;
}

.close-btn:hover {
  color: #2c3e50;
}

.modal-content h2 {
  margin-top: 0;
  color: #2c3e50;
}

.detail-item {
  margin-bottom: 1.5rem;
}

.detail-item strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.detail-item ul {
  margin: 0;
  padding-left: 1.5rem;
}

.detail-item li {
  margin-bottom: 0.3rem;
  color: #34495e;
}

.detail-item p {
  margin: 0;
  color: #34495e;
}

/* 古诗词样式 */
.poem-btn {
  margin-left: 10px;
  padding: 4px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}

.poem-btn:hover {
  background-color: #45a049;
}

.poems-container {
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.poem-item {
  margin-bottom: 10px;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
}

.poem-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.poem-author {
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}

.poem-content {
  font-size: 13px;
  line-height: 1.5;
  color: #444;
  font-style: italic;
}
</style>