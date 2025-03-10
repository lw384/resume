interface ResumeContent {
  name: string;
  status: string;
  location: string;
  role: string;
  contact: {
    phone: string;
    email: string;
  };
  skillTags: string[];
  sections: {
    experience: {
      title: string;
      companies: Array<{
        name: string;
        period: string;
        position: string;
        techStack: string[];
        projects: Array<{
          title: string;
          details: string[];
        }>;
      }>;
    };
    education: {
      title: string;
      schools: Array<{
        name: string;
        period: string;
        major: string;
        degree: string;
      }>;
    };
    skills: {
      title: string;
      categories: Array<{
        name: string;
        items: string;
      }>;
    };
  };
}

export const locales: Record<'zh' | 'en', ResumeContent> = {
  zh: {
    name: '罗薇',
    status: '求职中',
    location: '北京',
    role: 'Web 前端开发工程师',
    contact: {
      phone: '1565175****',
      email: '15651756926@163.com'
    },
    skillTags: [
      'HTML', 'CSS/Less/Sass', 'JavaScript', 'TypeScript', 'Vue3', 'Vuex', 'React',
      '小程序', 'Hybrid 开发', 'Echarts', 'Git', 'Webpack', '计算机网络', '算法结构', '数据库'
    ],
    sections: {
      experience: {
        title: '工作经历',
        companies: [
          {
            name: '理想汽车',
            period: '2023.05 - 2024.05',
            position: '前端工程师',
            techStack: ['Vue', 'Echarts', 'CodeMirror', 'JSON-Schema'],
            projects: [
              {
                title: '智能空间—车云服务组',
                details: [
                  '支持理想汽车整车 OTA 升级服务，抓取车端事故数据并进行数据治理。',
                  '开发可视化 JSON-Schema 编辑器，实现 API 统一管理。',
                  '封装 CodeMirror 及自定义表单，实现自定义日志分析工具。',
                  '基于 Echarts 构建供应链数据可视化看板，提高故障追溯效率。'
                ]
              }
            ]
          },
          {
            name: '作业帮教育科技（北京）有限公司',
            period: '2022.10 - 2023.02',
            position: '前端工程师',
            techStack: ['React', 'Material-UI', 'Vue3', 'Element Plus', 'Vite'],
            projects: [
              {
                title: '海外国际资讯内容社区',
                details: [
                  '参与 Web 主站建设，优化页面响应式适配。',
                  '从 0 到 1 搭建国际版运营管理后台，实现内容管理与用户管理。',
                  '封装滑动拼图验证码与 Lottie 动画渲染组件，提高开发效率。'
                ]
              }
            ]
          },
          {
            name: '工银科技有限公司',
            period: '2019.07 - 2022.10',
            position: 'Web 前端工程师',
            techStack: ['Hybrid App', 'Vue', 'VantUI', 'Taro', 'Webpack', 'Element UI', 'Echarts'],
            projects: [
              {
                title: '"我的宁夏"政务建设项目',
                details: [
                  '参与"我的宁夏"组件库建设，封装 10+ 组件。',
                  '开发移动端 H5 支付款台，支持多种支付方式。',
                  '搭建小程序架构，实现多端统一开发。',
                  '构建电子政务中后台数据可视化平台，实现报表下载与大屏适配。',
                  '推进前端流程规范化，引入 eslint、commit 规则，提高代码质量。'
                ]
              }
            ]
          }
        ]
      },
      education: {
        title: '教育经历',
        schools: [
          {
            name: '东南大学',
            period: '2015.09 - 2019.06',
            major: '计算机科学与工程',
            degree: '本科'
          }
        ]
      },
      skills: {
        title: '专业技能',
        categories: [
          { name: '前端开发', items: 'HTML, CSS/Less/Sass, JavaScript, TypeScript' },
          { name: '前端框架', items: 'Vue3, Vuex, React, 小程序, Hybrid 开发' },
          { name: '数据可视化', items: 'Echarts' },
          { name: '工程化', items: 'Git, Webpack, eslint' },
          { name: '计算机基础', items: '计算机网络, 算法结构, 数据库' }
        ]
      }
    }
  },
  en: {
    name: 'Wei Luo',
    status: 'Seeking Opportunities',
    location: 'Beijing, China',
    role: 'Frontend Developer',
    contact: {
      phone: '+86 1565175****',
      email: 'weiluo384@outlook.com'
    },
    skillTags: [
      'Python', 'SQL', 'JavaScript', 'Node.js', 'Java', 'Vue', 'React', 'Taro',
      'Echarts', 'Canvas', 'BI', 'Konva', 'Matlab', 'HTML', 'CSS', 'MongoDB', 'IndexDB',
      'pnpm', 'yarn', 'npm'
    ],
    sections: {
      experience: {
        title: 'Work Experience',
        companies: [
          {
            name: 'Li Auto Inc.',
            period: 'May 2023 – May 2024',
            position: 'Frontend Developer',
            techStack: ['Vue', 'Echarts', 'Low-Code', 'Canvas', 'Svelte', 'Konva'],
            projects: [
              {
                title: 'Supply Chain Data Visualization Platform',
                details: [
                  'Developed a visualization platform using Echarts and Low-Code frameworks, reducing repetitive development and improving work order tracking efficiency by 15%.'
                ]
              },
              {
                title: 'Cross-Platform Image Annotation Tools',
                details: [
                  'Designed and developed an image annotation tool with Canvas, Konva, and Svelte, enabling image scaling, annotation, and downloading, significantly reducing frontend feature development time.'
                ]
              },
              {
                title: 'LLM-powered Chatbot Development',
                details: [
                  'Contributed to frontend development for a chatbot powered by LLM, supporting markdown, charts, code blocks, links, and multimedia, enhancing user experience.'
                ]
              }
            ]
          },
          {
            name: 'Zuoyebang Education Technology Co., Ltd.',
            period: 'October 2022 – February 2023',
            position: 'Frontend Developer',
            techStack: ['React', 'Material-UI', 'Echarts', 'Lottie', 'IndexedDB'],
            projects: [
              {
                title: 'International Education Community Platform',
                details: [
                  'Built an education platform using React and Material-UI, integrating Echarts to facilitate quick data insight identification.'
                ]
              },
              {
                title: 'Frontend Animation Optimization',
                details: [
                  'Created interactive animations using React and Lottie, leveraging IndexedDB for caching, improving animation smoothness by 25%.'
                ]
              }
            ]
          },
          {
            name: 'ICBC Technology Co., Ltd.',
            period: 'July 2019 – October 2022',
            position: 'Frontend Developer',
            techStack: ['Vue', 'VantUI', 'Taro', 'Echarts', 'Webpack', 'Element UI'],
            projects: [
              {
                title: 'My Ningxia Digital Government Services',
                details: [
                  'Developed frontend features for a government-backed mobile app serving 10.65 million users, streamlining digital services.'
                ]
              },
              {
                title: 'Mobile Payment Platform',
                details: [
                  'Built a payment system supporting Alipay, WeChat, UnionPay, and e-wallets, enhancing user convenience and engagement.'
                ]
              },
              {
                title: 'Frontend Monitoring System',
                details: [
                  'Developed a monitoring system to capture user behavior and errors, reducing loading time from 4s to 2s based on First Content Paint (FCP), significantly improving retention.'
                ]
              },
              {
                title: 'Code Quality & Review',
                details: [
                  'Conducted code reviews with ESLint and implemented Sonar quality gates, leading to a 30% bug reduction according to Jira statistics.'
                ]
              }
            ]
          }
        ]
      },
      education: {
        title: 'Education',
        schools: [
          {
            name: 'Southeast University',
            period: 'August 2015 – June 2019',
            major: 'Computer Science & Technology',
            degree: 'Bachelor of Engineering'
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          { name: 'Programming Languages', items: 'Python, SQL, JavaScript, Node.js, Java' },
          { name: 'Frontend Frameworks', items: 'Vue, React, Taro' },
          { name: 'Data Visualization', items: 'Echarts, Canvas, BI, Konva, Matlab' },
          { name: 'Development Tools', items: 'pnpm, yarn, npm, MongoDB, IndexedDB' }
        ]
      }
    }
  }
}; 