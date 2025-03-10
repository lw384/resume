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
    name: '敖天羽',
    status: '目前在职',
    location: '上海',
    role: '前端/后端/全栈开发',
    contact: {
      phone: '1752127****',
      email: 'beichu.zhang@gmail.com'
    },
    skillTags: ['Go', 'TypeScript', 'Node.js', 'Python', 'Vue'],
    sections: {
      experience: {
        title: '工作经历',
        companies: [
          {
            name: '字节跳动',
            period: '2023-08 ~ 至今',
            position: '技术专家',
            techStack: ['Go', 'MySQL', 'MongoDB', 'Redis', 'RocketMQ'],
            projects: [
              {
                title: '国际化改造',
                details: [
                  '根据合规区域的规范对数据平台内大量业务域名进行迁移，设计切流方案并通过 DNS 劫持解决办公网和生产网需要指向不同七层代理的问题',
                  '解决业务数据合规改造，为业务提出通用技术方案和整改流程，保证业务不因合规调导致业务不可用',
                  '多语言方案升级：将数据平台内的多语言服务迁移至公司基建，提供整套从迁移到迭代的完整方案，为业务提供平滑过渡，并最终下线旧服务',
                  '协助业务排查海外环境带来的一些访问问题，比如网站无法访问，白屏分析等等'
                ]
              },
              {
                title: '第三方 Cookie 解决方案',
                details: [
                  '尝试目前全部的三方 Cookie 解决方案，并对数据平台内的全部业务进行访谈和调研，最终抽象、整理和提供覆盖全部场景的多种解决方案'
                ]
              },
              {
                title: '协同服务',
                details: [
                  '负责协同和同步服务的服务端开发，其中协同服务提供了引擎能力，解决开发冲突处理和数据获取；同步服务提供了保序和可靠性，通过推拉结合来解决长链大包传输问题。',
                  '弱网优化通过公网域名来解决海外用户端到端失败率高导致协同不稳定的问题：成功率从 99.89% -> 99.99%',
                  '可靠性治理，通过服务合并、链路简化、日志监控告警的治理等等，保证了服务 SLO >= 99.99%',
                  '基于埋点数据开发，为业务提供包括了有效协同数、在线人数等业务指标以及一系列协同的技术指标看板'
                ]
              },
              {
                title: '消息中心',
                details: [
                  '数据平台内部消息中心服务重写，解决由于旧基建下线需要进行架构升级以及部署海外合规机房的问题，新旧服务切流过程中 0 业务影响',
                  '旧服务链路混乱，由多个服务合并提供接口，且存在安全问题，重写后服务合并并通过安全检查',
                  '服务从原本的故障之后无法自动恢复，必须人工干预，在重写后达到 SLO >= 99.99%，消息列表接口 P90 耗时从 80ms -> 8ms'
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
            name: '上海交通大学',
            period: '2015-09 ~ 2019-06',
            major: '计算机科学与技术',
            degree: '学士'
          }
        ]
      },
      skills: {
        title: '技能特长',
        categories: [
          {
            name: '前端框架',
            items: 'Vue.js, Nuxt.js, React'
          },
          {
            name: 'UI/CSS',
            items: 'Tailwind CSS, Element UI, SCSS'
          },
          {
            name: '工具链',
            items: 'Webpack, Vite, Git'
          },
          {
            name: '其他',
            items: 'TypeScript, Node.js, Docker'
          }
        ]
      }
    }
  },
  en: {
    name: 'Ao Tianyu',
    status: 'Currently Employed',
    location: 'Shanghai',
    role: 'Frontend/Backend/Full-Stack Developer',
    contact: {
      phone: '1752127****',
      email: 'beichu.zhang@gmail.com'
    },
    skillTags: ['Go', 'TypeScript', 'Node.js', 'Python', 'Vue'],
    sections: {
      experience: {
        title: 'Work Experience',
        companies: [
          {
            name: 'ByteDance',
            period: 'Aug 2023 - Present',
            position: 'Technical Expert',
            techStack: ['Go', 'MySQL', 'MongoDB', 'Redis', 'RocketMQ'],
            projects: [
              {
                title: 'Internationalization Transformation',
                details: [
                  'Migrated numerous business domain names within the data platform according to compliance requirements, designed traffic switching solutions and resolved cross-network proxy issues through DNS hijacking',
                  'Resolved business data compliance transformation, proposed universal technical solutions and improvement processes to ensure business continuity',
                  'Upgraded multilingual solution: migrated platform language services to company infrastructure, provided complete migration and iteration solution, ensuring smooth transition and legacy service retirement',
                  'Assisted in troubleshooting overseas environment access issues, such as website accessibility and blank screen analysis'
                ]
              },
              {
                title: 'Third-party Cookie Solution',
                details: [
                  'Explored all current third-party cookie solutions, conducted interviews and research across platform businesses, ultimately abstracting, organizing, and providing multiple solutions covering all scenarios'
                ]
              },
              {
                title: 'Collaboration Service',
                details: [
                  'Responsible for collaboration and synchronization service development, implementing engine capabilities for conflict resolution and data acquisition; sync service ensures ordering and reliability through push-pull combination',
                  'Optimized weak network performance through public domain names, improving overseas user end-to-end success rate from 99.89% to 99.99%',
                  'Improved reliability through service consolidation, pipeline simplification, and monitoring, achieving SLO >= 99.99%',
                  'Developed analytics based on tracking data, providing business metrics including effective collaboration count, online users, and technical indicator dashboards'
                ]
              },
              {
                title: 'Message Center',
                details: [
                  'Rewrote internal message center service to address architecture upgrade needs and overseas compliance deployment, achieving zero business impact during migration',
                  'Consolidated and secured complex service architecture, resolving security issues through service merger and security audits',
                  'Improved service reliability from manual recovery to automatic recovery, achieving SLO >= 99.99%, reducing message list API P90 latency from 80ms to 8ms'
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
            name: 'Shanghai Jiao Tong University',
            period: 'Sep 2015 - Jun 2019',
            major: 'Computer Science and Technology',
            degree: "Bachelor's Degree"
          }
        ]
      },
      skills: {
        title: 'Technical Skills',
        categories: [
          {
            name: 'Frontend Frameworks',
            items: 'Vue.js, Nuxt.js, React'
          },
          {
            name: 'UI/CSS',
            items: 'Tailwind CSS, Element UI, SCSS'
          },
          {
            name: 'Tool Chain',
            items: 'Webpack, Vite, Git'
          },
          {
            name: 'Others',
            items: 'TypeScript, Node.js, Docker'
          }
        ]
      }
    }
  }
}; 