<template>
  <div class="result-display">
    <div class="result-card">
      <!-- 昆虫基本信息头部 -->
      <div class="insect-header">
        <div class="insect-avatar">
          <span class="insect-emoji">🐛</span>
        </div>
        <div class="insect-basic-info">
          <h2 class="insect-name">{{ result.name }}</h2>
          <div class="insect-meta">
            <span v-if="result.category" class="insect-category">{{ result.category }}</span>
            <div v-if="result.isPest !== undefined" :class="['insect-type-badge', result.isPest ? 'pest' : 'beneficial']">
              <span class="type-icon">{{ result.isPest ? '⚠️' : '✅' }}</span>
              <span class="type-text">{{ result.isPest ? '害虫' : '益虫' }}</span>
            </div>
          </div>
          <div class="poem-section">
            <button v-if="result.classicalPoems && result.classicalPoems.length > 0" 
                    @click="showPoems = !showPoems" 
                    class="poem-btn">
              {{ showPoems ? '收起介绍' : '查看介绍' }}📖
            </button>
            <div v-if="showPoems && result.classicalPoems && result.classicalPoems.length > 0" class="classical-poems">
              <div class="section-header">
                <span class="section-icon">📜</span>
                <h3 class="section-title">诗词中的{{ result.name }}</h3>
              </div>
              <div class="poem-list">
                <div v-for="(poem, index) in result.classicalPoems" :key="index" class="poem-item">
                  <div class="poem-title">{{ poem.title }}</div>
                  <div class="poem-author">— {{ poem.author }}</div>
                  <div class="poem-content">{{ poem.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 昆虫特征标签 -->
      <div v-if="result.keyFeatures && result.keyFeatures.length > 0" class="features-section">
        <h3 class="section-title">🔑 关键特征</h3>
        <div class="feature-tags">
          <span v-for="(feature, index) in result.keyFeatures" :key="index" class="feature-tag">
            {{ feature }}
          </span>
        </div>
      </div>

      <!-- 详细信息网格 -->
      <div class="details-grid">
        <div class="detail-card">
          <div class="detail-icon">🎨</div>
          <div class="detail-content">
            <h4 class="detail-title">外观特征</h4>
            <p class="detail-text">{{ Array.isArray(result.features) ? result.features.join('、') : result.features || '暂无信息' }}</p>
            <div v-if="result.colors && result.colors.length > 0" class="color-palette">
              <span class="color-label">颜色：</span>
              <span v-for="color in result.colors" :key="color" class="color-tag">{{ color }}</span>
            </div>
            <div v-if="result.shape" class="detail-item">
              <span class="item-label">形状：</span>
              <span class="item-value">{{ result.shape }}</span>
            </div>
            <div v-if="result.size" class="detail-item">
              <span class="item-label">大小：</span>
              <span class="item-value">{{ result.size }}</span>
            </div>
          </div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">🏠</div>
          <div class="detail-content">
            <h4 class="detail-title">生活环境</h4>
            <p class="detail-text">{{ result.habitat || '暂无信息' }}</p>
            <div v-if="result.habits || result.description" class="detail-item">
              <span class="item-label">习性：</span>
              <span class="item-value">{{ result.habits || result.description }}</span>
            </div>
          </div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">🍽️</div>
          <div class="detail-content">
            <h4 class="detail-title">食性特点</h4>
            <p class="detail-text">{{ result.diet || '暂无信息' }}</p>
            <div v-if="result.lifecycle" class="detail-item">
              <span class="item-label">生命周期：</span>
              <span class="item-value">{{ result.lifecycle }}</span>
            </div>
          </div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">🌍</div>
          <div class="detail-content">
            <h4 class="detail-title">生态功能</h4>
            <p class="detail-text">{{ result.function || '暂无信息' }}</p>
          </div>
        </div>
      </div>

      <!-- 天敌信息 -->
      <div v-if="result.naturalEnemies && result.naturalEnemies.length > 0" class="action-section natural-enemies">
        <div class="section-header">
          <span class="section-icon">🐦</span>
          <h3 class="section-title">天敌</h3>
          <p class="section-description">这种昆虫的自然天敌</p>
        </div>
        <div class="natural-enemies-list">
          <div v-for="(enemy, index) in result.naturalEnemies" :key="index" class="enemy-item">
            <span class="enemy-number">{{ index + 1 }}</span>
            <span class="enemy-text">{{ enemy }}</span>
          </div>
        </div>
      </div>

      <!-- 防治方法（仅对害虫显示） -->
      <div v-if="result.isPest && result.controlMethods && result.controlMethods.length > 0" class="action-section pest-control">
        <div class="section-header">
          <span class="section-icon">🛡️</span>
          <h3 class="section-title">防治方法</h3>
          <p class="section-description">有效控制这种害虫的方法</p>
        </div>
        <div class="method-list">
          <div v-for="(method, index) in result.controlMethods" :key="index" class="method-item">
            <span class="method-number">{{ index + 1 }}</span>
            <span class="method-text">{{ method }}</span>
          </div>
        </div>
      </div>
      
      <!-- 对益虫显示保护建议 -->
      <div v-else-if="!result.isPest && result.name !== '未识别昆虫'" class="action-section protection-advice">
        <div class="section-header">
          <span class="section-icon">🌱</span>
          <h3 class="section-title">保护建议</h3>
          <p class="section-description">如何保护这种有益的昆虫</p>
        </div>
        <div class="protection-content">
          <p class="protection-text">该昆虫为益虫，对生态环境有积极作用。请注意保护，避免使用广谱杀虫剂，为其提供适宜的生存环境。</p>
          <div class="protection-tips">
            <div class="tip-item">
              <span class="tip-icon">🌸</span>
              <span class="tip-text">种植多样化的植物</span>
            </div>
            <div class="tip-item">
              <span class="tip-icon">💧</span>
              <span class="tip-text">提供清洁的水源</span>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🏡</span>
              <span class="tip-text">创造适宜的栖息环境</span>
            </div>
          </div>
        </div>
      </div>



      <!-- 未识别昆虫提示 -->
      <div v-if="result.name === '未识别昆虫'" class="unknown-insect">
        <div class="unknown-icon">❓</div>
        <h3 class="unknown-title">未识别昆虫</h3>
        <p class="unknown-description">抱歉，我们的数据库中暂时没有这种昆虫的信息。请检查输入的名称是否正确，或尝试使用其他常见名称搜索。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  result: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

// 控制古诗词展示的状态
const showPoems = ref(false)
</script>

<style scoped>
.result-display {
  margin-top: 2rem;
}

.result-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.result-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 昆虫头部信息 */
.insect-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.insect-basic-info {
  flex: 1;
}

.insect-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.insect-basic-info {
  flex: 1;
}

.insect-name {
  margin: 0 0 0.5rem 0;
  color: #1976d2;
  font-size: 2.2rem;
  font-weight: 700;
}

.insect-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.insect-category {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.insect-type-badge {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.insect-type-badge.pest {
  background: #ffebee;
  color: #c62828;
}

.insect-type-badge.beneficial {
  background: #e8f5e9;
  color: #2e7d32;
}

/* 关键特征标签 */
.features-section {
  margin-bottom: 2rem;
}

.section-title {
  color: #1976d2;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: #f5f5f5;
  color: #333;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* 详细信息网格 */
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.detail-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.detail-card:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.detail-icon {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.detail-title {
  color: #1976d2;
  font-size: 1.1rem;
  margin: 0 0 0.8rem 0;
  font-weight: 600;
}

.detail-text {
  color: #495057;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.color-palette {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.color-label {
  font-weight: 500;
  color: #495057;
  font-size: 0.9rem;
}

.color-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.2rem 0.8rem;
  border-radius: 10px;
  font-size: 0.8rem;
}

.detail-item {
  display: flex;
  gap: 0.5rem;
}

.item-label {
  font-weight: 500;
  color: #495057;
}

.item-value {
  color: #495057;
}

/* 操作建议区域 */
.action-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.section-title {
  color: #1976d2;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  display: inline-block;
  vertical-align: middle;
}

.section-description {
  color: #6c757d;
  margin: 0;
  font-size: 0.95rem;
}

/* 防治方法 */
.method-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.method-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.method-number {
  background: #1976d2;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.method-text {
    color: #495057;
    line-height: 1.6;
    flex: 1;
  }

  /* 天敌信息 */
  .natural-enemies-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .enemy-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .enemy-number {
    background: #1976d2;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .enemy-text {
    color: #495057;
    line-height: 1.6;
    flex: 1;
  }

/* 保护建议 */
.protection-content {
  background: #e8f5e9;
  border-radius: 15px;
  padding: 1.5rem;
}

.protection-text {
  color: #2e7d32;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.protection-tips {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.tip-icon {
  font-size: 1.2rem;
}

.tip-text {
  color: #2e7d32;
  font-weight: 500;
}

/* 未识别昆虫 */
.unknown-insect {
  text-align: center;
  padding: 2rem;
}

.unknown-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.unknown-title {
  color: #6c757d;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}

.unknown-description {
  color: #6c757d;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* 古诗词样式 */
.poem-section {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.poem-btn {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.poem-btn:hover {
  background-color: #45a049;
}

.classical-poems {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #2196f3;
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.classical-poems .section-header {
  margin-bottom: 1.5rem;
}

.poem-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.poem-item {
  padding: 1.5rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.poem-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.poem-author {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.poem-content {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
  font-style: italic;
  text-align: justify;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .result-card {
    padding: 1.5rem;
  }
  
  .insect-header {
    flex-direction: column;
    text-align: center;
  }
  
  .insect-meta {
    justify-content: center;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .insect-name {
    font-size: 1.8rem;
  }
  
  .protection-tips {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .result-card {
    padding: 1rem;
  }
  
  .detail-card {
    padding: 1rem;
  }
  
  .protection-content {
    padding: 1rem;
  }
}
</style>