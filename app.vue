<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="resume-container">
      <!-- 简历头部 -->
      <header class="resume-header">
        <h1 class="resume-name">张三</h1>
        <div class="resume-contact">
          <span>📧 email@example.com</span>
          <span>📱 13800138000</span>
          <span>📍 北京市</span>
          <span>💼 Github: github.com/zhangsan</span>
        </div>
      </header>

      <!-- 工作经历 -->
      <section class="resume-section">
        <h2 class="resume-section-title">工作经历</h2>
        
        <div class="mb-6">
          <h3 class="resume-company">ABC科技有限公司</h3>
          <p class="text-sm text-gray-500 mb-2">2020年1月 - 至今 | 高级前端开发工程师</p>
          <div class="resume-content">
            <ul class="list-disc list-inside space-y-2">
              <li>负责公司核心产品的前端架构设计和开发</li>
              <li>优化前端性能，提升用户体验</li>
              <li>指导初级开发人员，组织技术分享会</li>
            </ul>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="resume-company">XYZ互联网公司</h3>
          <p class="text-sm text-gray-500 mb-2">2018年3月 - 2019年12月 | 前端开发工程师</p>
          <div class="resume-content">
            <ul class="list-disc list-inside space-y-2">
              <li>参与电商平台的开发和维护</li>
              <li>实现响应式设计，确保跨平台兼容性</li>
              <li>开发和维护公共组件库</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 技能特长 -->
      <section class="resume-section">
        <h2 class="resume-section-title">技能特长</h2>
        <div class="resume-content">
          <ul class="list-disc list-inside space-y-2">
            <li>前端框架：Vue.js, Nuxt.js, React</li>
            <li>UI/CSS：Tailwind CSS, Element UI, SCSS</li>
            <li>工具链：Webpack, Vite, Git</li>
            <li>其他：TypeScript, Node.js, Docker</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
