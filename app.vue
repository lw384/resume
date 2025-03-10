<script setup lang="ts">
import { ref } from 'vue'
import { locales } from './locales'

const currentLang = ref<'zh' | 'en'>('zh')
const content = ref(locales[currentLang.value])

const toggleLanguage = (lang: 'zh' | 'en') => {
  currentLang.value = lang
  content.value = locales[lang]
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8 text-[#444] text-[0.95rem] font-sans">
    <div class="resume-container">
      <!-- 语言切换按钮 -->
      <div class="absolute top-4 right-4 text-sm">
        <button 
          class="px-2 py-0.5 rounded mr-1 transition-colors"
          :class="currentLang === 'zh' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-800'"
          @click="toggleLanguage('zh')"
        >
          中
        </button>
        <span class="text-gray-300 mr-1">|</span>
        <button 
          class="px-2 py-0.5 rounded transition-colors"
          :class="currentLang === 'en' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-800'"
          @click="toggleLanguage('en')"
        >
          En
        </button>
      </div>

      <!-- 简历头部 -->
      <header class="resume-header flex flex-col items-start">
        <div class="mb-12">
          <h1 class="resume-name">{{ content.name }}</h1>
        </div>
        <div class="flex items-center gap-8 mb-6">
          <div class="status-tag">{{ content.status }}</div>
          <div class="location-tag">
            <span class="mr-4">{{ content.location }}</span>
            <span>/</span>
            <span class="ml-4">{{ content.role.split('/').join(' / ') }}</span>
          </div>
        </div>

        <div class="resume-contact flex flex-col items-start gap-2">
          <div class="flex items-center gap-8">
            <span class="flex items-center gap-3 text-gray-500"><span class="mr-1">📱</span> {{ content.contact.phone }}</span>
            <span class="flex items-center gap-3 text-gray-500"><span class="mr-1">📧</span> <a :href="'mailto:' + content.contact.email">{{ content.contact.email }}</a></span>
          </div>
        </div>

        <div class="skill-tags mt-4 flex flex-wrap gap-2">
          <span v-for="(tag, index) in content.skillTags" 
                :key="index" 
                class="skill-tag">
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- 工作经历 -->
      <section class="resume-section">
        <h2 class="section-title">{{ content.sections.experience.title }}</h2>
        
        <div v-for="(company, index) in content.sections.experience.companies" 
             :key="index" 
             class="mb-8">
          <div class="flex justify-between items-center mb-2">
            <div class="resume-company text-xl font-bold">{{ company.name }}</div>
            <span class="text-gray-500">{{ company.period }}</span>
          </div>
          
          <div class="mb-2">
            <span class="text-gray-700">{{ company.position }}</span>
          </div>

          <!-- 技术标签 -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in company.techStack" 
                  :key="tag" 
                  class="tech-tag">
              {{ tag }}
            </span>
          </div>

          <!-- 工作内容 -->
          <div class="space-y-2">
            <div v-for="(project, pIndex) in company.projects" 
                 :key="pIndex">
              <div class="project-title">{{ project.title }}</div>
              <ul class="list-disc list-inside space-y-2 mb-[1.2rem]">
                <li v-for="(detail, dIndex) in project.details" 
                    :key="dIndex"
                    class="leading-relaxed text-gray-500">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 教育经历 -->
      <section class="resume-section">
        <h2 class="section-title">{{ content.sections.education.title }}</h2>
        <div v-for="(school, index) in content.sections.education.schools"
             :key="index"
             class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <div class="text-lg font-bold">{{ school.name }}</div>
            <span class="text-gray-500">{{ school.period }}</span>
          </div>
          <div class="text-gray-500">
            {{ school.major }} | {{ school.degree }}
          </div>
        </div>
      </section>

      <!-- 技能特长 -->
      <section class="resume-section">
        <h2 class="section-title">{{ content.sections.skills.title }}</h2>
        <div class="resume-content">
          <ul class="list-disc list-inside space-y-2">
            <li v-for="(category, index) in content.sections.skills.categories" 
                :key="index">
              {{ category.name }}：{{ category.items }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --border-color: #eaecef;
}
</style>

<style scoped>
.section-title {
  @apply text-black items-center gap-4 mb-6 text-[1.8rem] font-normal flex;
}

.section-title:after {
  content: "";
  background-color: var(--border-color);
  flex: 1;
  height: 1px;
}

.resume-name {
  @apply text-[2.5rem];
}

.status-tag {
  @apply px-3 py-1 bg-black text-white text-sm rounded-md;
}

.location-tag {
  @apply text-gray-500 text-sm;
}

.skill-tag {
  @apply px-4 py-1 bg-gray-800 text-white rounded-md text-sm;
}

.tech-tag {
  @apply px-3 py-1 border border-gray-300 text-gray-500 text-sm rounded-md;
}

.project-title {
  @apply text-[#333] mb-2 text-[1rem] font-bold;
}

.resume-container {
  @apply text-[#444] max-w-[1000px] mx-auto bg-white shadow-lg my-8 px-10 py-10 relative;
}

.resume-content li {
  @apply leading-relaxed;
}

.resume-contact a {
  color: #42b983;
  text-decoration: none;
  border-bottom: 2px solid #42b983;
}
</style>
