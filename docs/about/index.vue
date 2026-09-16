<template>
  <div class="about-page">
    <!-- 背景光斑 -->
    <div class="orbs" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="orb orb-3"></span>
    </div>

    <!-- 头部名片 -->
    <header class="hero">
      <div class="hero-inner">
        <div class="avatar-wrap">
          <span class="avatar-ring"></span>
          <div class="avatar">
            <img
              v-if="avatarSrc"
              :src="avatarSrc"
              alt="avatar"
              @error="handleAvatarError"
            />
            <span v-else class="avatar-text">WO</span>
          </div>
        </div>

        <h1 class="name">woge</h1>
        <p class="role">
          <span class="typed">{{ typedText }}</span><span class="caret"></span>
        </p>

        <div class="chips">
          <a class="chip" :href="'mailto:lpw9494@gmail.com'">
            <svg viewBox="0 0 24 24" class="icon"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2.2.5L12 12.7l7.8-6.2H4.2Z"/></svg>
            lpw9494@gmail.com
          </a>
          <span class="chip">
            <svg viewBox="0 0 24 24" class="icon"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>
            广东深圳
          </span>
          <a class="chip" href="https://github.com/lpw94" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" class="icon"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
            github.com/lpw94
          </a>
        </div>
      </div>
    </header>

    <!-- 数据概览 -->
    <section class="stats reveal" style="animation-delay: 0.05s">
      <div v-for="s in stats" :key="s.label" class="stat">
        <div class="stat-num">
          <span>{{ s.display }}</span><i>{{ s.suffix }}</i>
        </div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </section>

    <!-- 基本信息 -->
    <section class="card reveal" style="animation-delay: 0.15s">
      <h2 class="card-title">基本信息</h2>

      <div class="info-grid">
        <div v-for="item in infoData" :key="item.label" class="info-item">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-value">{{ item.value }}</span>
        </div>
      </div>
    </section>

    <!-- 求职意向 -->
    <section class="card reveal" style="animation-delay: 0.25s">
      <h2 class="card-title">求职意向</h2>
      <div class="intent">
        <div v-for="i in intents" :key="i.label" class="intent-item">
          <span class="intent-label">{{ i.label }}</span>
          <span class="intent-value">{{ i.value }}</span>
        </div>
      </div>
    </section>

    <!-- 自我评价 -->
    <section class="card reveal" style="animation-delay: 0.35s">
      <h2 class="card-title">自我评价</h2>
      <p class="desc">
        具备独立分析和解决问题的能力；有较好的团队协作和沟通能力，有强烈的责任心；
        具有良好的沟通表达、团队协作能力，有较强的学习能力和探索精神，责任心强。
      </p>
      <div class="tags">
        <span v-for="t in traits" :key="t" class="tag">{{ t }}</span>
      </div>
    </section>

    <!-- 技能特长 -->
    <section class="card reveal" style="animation-delay: 0.45s">
      <h2 class="card-title">技能特长</h2>
      <div class="skills">
        <div v-for="(s, index) in skills" :key="s.name" class="skill">
          <div class="skill-head">
            <span class="skill-name">{{ s.name }}</span>
            <span class="skill-percent">{{ s.value }}%</span>
          </div>
          <div class="skill-track">
            <div
              class="skill-bar"
              :style="{ '--w': s.value + '%', animationDelay: 0.55 + index * 0.07 + 's' }"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">保持热爱，奔赴山海 · Powered by VuePress</footer>
  </div>
</template>

<script>
const ROLE_TEXT = 'Web 前端研发工程师 · 广东深圳 · 热爱折腾的技术人'

export default {
  name: 'AboutPage',
  data() {
    return {
      typedText: ROLE_TEXT,
      avatarSrc: '/head.png',
      avatarFallback: false,
      infoData: [
        { label: '姓名', value: '沃哥' },
        { label: '邮箱', value: 'lpw9494@gmail.com' },
        { label: '电话', value: '13058165962' },
        { label: '地址', value: '广东深圳' }
      ],
      intents: [
        { label: '求职类型', value: '全职' },
        { label: '意向岗位', value: 'Web 前端研发工程师' },
        { label: '意向城市', value: '广东深圳' },
        { label: '薪资要求', value: '20K' },
        { label: '求职状态', value: '随时到岗' }
      ],
      traits: ['独立解决问题', '团队协作', '责任心强', '学习能力', '探索精神', '沟通表达'],
      stats: [
        { label: '前端经验', value: 5, suffix: '年', display: 5 },
        { label: '参与项目', value: 20, suffix: '+', display: 20 },
        { label: '技术文章', value: 30, suffix: '+', display: 30 },
        { label: '掌握技能', value: 8, suffix: '项', display: 8 }
      ],
      skills: [
        { name: 'HTML5 + CSS3', value: 95 },
        { name: 'JavaScript / jQuery', value: 92 },
        { name: 'Vue', value: 90 },
        { name: 'Ajax / Axios', value: 88 },
        { name: 'Swiper / Bootstrap', value: 80 },
        { name: 'Angular', value: 75 },
        { name: 'Node.js / Webpack', value: 65 },
        { name: '微信小程序', value: 60 }
      ],
      timers: []
    }
  },
  mounted() {
    this.stats.forEach(s => {
      s.display = 0
    })
    this.runCountUp()

    this.typedText = ''
    let i = 0
    const typeTimer = setInterval(() => {
      i += 1
      this.typedText = ROLE_TEXT.slice(0, i)
      if (i >= ROLE_TEXT.length) clearInterval(typeTimer)
    }, 90)
    this.timers.push(typeTimer)
  },
  beforeDestroy() {
    this.timers.forEach(t => {
      clearTimeout(t)
      clearInterval(t)
    })
    this.timers = []
  },
  methods: {
    handleAvatarError() {
      if (!this.avatarFallback) {
        this.avatarFallback = true
        this.avatarSrc = '/logo.png'
      } else {
        this.avatarSrc = ''
      }
    },
    runCountUp() {
      const duration = 1200
      const start = performance.now()
      const step = now => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        this.stats.forEach(s => {
          s.display = Math.round(s.value * eased)
        })
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }
}
</script>

<style scoped>
.about-page {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;
}

/* ---------- 背景光斑 ---------- */
.orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  animation: float 14s ease-in-out infinite;
}
.orb-1 {
  width: 320px;
  height: 320px;
  top: -80px;
  left: -100px;
  background: #6366f1;
}
.orb-2 {
  width: 280px;
  height: 280px;
  top: 180px;
  right: -120px;
  background: #ec4899;
  animation-delay: -4s;
}
.orb-3 {
  width: 240px;
  height: 240px;
  bottom: 60px;
  left: 20%;
  background: #22d3ee;
  animation-delay: -8s;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -40px) scale(1.12); }
}

/* ---------- 头部 ---------- */
.hero {
  position: relative;
  z-index: 1;
  margin-bottom: 28px;
  padding: 46px 24px 38px;
  border-radius: 20px;
  background: linear-gradient(120deg, #4f46e5, #7c3aed, #db2777, #4f46e5);
  background-size: 300% 300%;
  animation: gradientMove 14s ease infinite;
  color: #fff;
  text-align: center;
  box-shadow: 0 18px 40px rgba(79, 70, 229, 0.28);
  overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25), transparent 55%);
}
.hero-inner {
  position: relative;
  z-index: 1;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.avatar-wrap {
  position: relative;
  width: 128px;
  height: 128px;
  margin: 0 auto 18px;
}
.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(#fff, #22d3ee, #a78bfa, #f472b6, #fff);
  animation: spin 6s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.avatar {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-text {
  font-size: 30px;
  font-weight: 700;
  color: #4f46e5;
  letter-spacing: 2px;
}

.name {
  margin: 0 0 8px;
  font-size: 34px;
  letter-spacing: 1px;
  color: #fff;
  border: none;
}
.role {
  margin: 0 0 18px;
  font-size: 15px;
  opacity: 0.92;
  min-height: 22px;
}
.caret {
  display: inline-block;
  width: 2px;
  height: 15px;
  margin-left: 3px;
  background: #fff;
  vertical-align: -2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease, background 0.25s ease;
}
.chip:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
}
.icon {
  width: 15px;
  height: 15px;
  fill: currentColor;
}

/* ---------- 数据 ---------- */
.stats {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 22px;
}
.stat {
  padding: 18px 10px;
  text-align: center;
  border-radius: 14px;
  background: rgba(127, 127, 127, 0.07);
  border: 1px solid rgba(127, 127, 127, 0.18);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
}
.stat:hover {
  transform: translateY(-5px);
}
.stat-num {
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat-num i {
  font-style: normal;
  font-size: 14px;
  margin-left: 2px;
}
.stat-label {
  margin-top: 4px;
  font-size: 13px;
  opacity: 0.7;
}

/* ---------- 卡片 ---------- */
.card {
  position: relative;
  z-index: 1;
  margin-bottom: 22px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(127, 127, 127, 0.07);
  border: 1px solid rgba(127, 127, 127, 0.18);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
}
.card-title {
  margin: 0 0 18px;
  padding-left: 12px;
  font-size: 18px;
  border: none;
  position: relative;
}
.card-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 18px;
  border-radius: 2px;
  background: linear-gradient(180deg, #6366f1, #ec4899);
}

/* 基本信息 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(127, 127, 127, 0.06);
  transition: background 0.25s ease;
}
.info-item:hover {
  background: rgba(99, 102, 241, 0.14);
}
.info-label {
  min-width: 44px;
  font-size: 13px;
  opacity: 0.65;
}
.info-value {
  font-size: 15px;
  font-weight: 600;
}

/* 求职意向 */
.intent {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.intent-item {
  flex: 1 1 160px;
  padding: 14px;
  border-radius: 12px;
  text-align: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(236, 72, 153, 0.14));
  border: 1px solid rgba(127, 127, 127, 0.16);
  transition: transform 0.25s ease;
}
.intent-item:hover {
  transform: scale(1.04);
}
.intent-label {
  display: block;
  font-size: 12px;
  opacity: 0.65;
}
.intent-value {
  display: block;
  margin-top: 6px;
  font-size: 15px;
  font-weight: 600;
}

/* 自我评价 */
.desc {
  margin: 0 0 16px;
  line-height: 1.9;
  font-size: 15px;
  opacity: 0.85;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  background: rgba(99, 102, 241, 0.16);
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: transform 0.2s ease;
}
.tag:hover {
  transform: translateY(-2px);
}

/* 技能 */
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 26px;
}
.skill-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 14px;
}
.skill-percent {
  opacity: 0.6;
}
.skill-track {
  height: 8px;
  border-radius: 999px;
  background: rgba(127, 127, 127, 0.2);
  overflow: hidden;
}
.skill-bar {
  height: 100%;
  width: var(--w, 0);
  border-radius: 999px;
  background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
  background-size: 200% 100%;
  animation: grow 1.1s cubic-bezier(0.25, 0.8, 0.25, 1) both,
    barFlow 3s linear infinite;
}
@keyframes grow {
  from { width: 0; }
  to { width: var(--w, 0); }
}
@keyframes barFlow {
  to { background-position: 200% 0; }
}

.footer {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 13px;
  opacity: 0.5;
  padding-top: 8px;
}

/* ---------- 入场动画 ---------- */
.reveal {
  animation: revealUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) both;
}
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 720px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .info-grid,
  .skills { grid-template-columns: 1fr; }
  .name { font-size: 26px; }
  .hero { padding: 34px 16px 28px; }
}

@media (prefers-reduced-motion: reduce) {
  .orb,
  .avatar-ring,
  .hero,
  .skill-bar,
  .caret,
  .reveal {
    animation: none;
  }
}
</style>
