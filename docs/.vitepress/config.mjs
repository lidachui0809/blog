import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base:'/blog/',
    title: "HaRei",
    description: "这是一个vue项目",
    // lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '关于我',
                items: [
                    {
                        text: "个人主页",
                        link: "https://lidachui.online"
                    },
                    {
                        text: "文章",
                        link: "/column/article/"
                    }
                ],
                // link: '/markdown-examples'
            }
        ],

        logo: '/user.jpg',
        // sidebar: [
        //   {
        //     text: 'Examples',
        //     items: [
        //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/api-examples' }
        //     ]
        //   }
        // ],
        sidebar: {
            '/column/article': [
                {
                    text: 'Spring框架系列',
                    collapsed: false,
                    items: [
                        {
                            text: "Spring",
                            collapsed: false,
                            items: [
                                {
                                    text: "spring原理分析",
                                    link: "/column/article/spring-framework/spring/spring文章"
                                }
                            ],
                        },
                        {
                            text: "SpringMVC",
                            collapsed: false,
                            items: [
                                {
                                    text: "springMVC原理分析",
                                    link: "/column/article/spring-framework/spring-mvc/springMVC的文章"
                                }
                            ]
                        },
                        {
                            text: 'Spring-Boot',
                            collapsed: false,
                            items: [
                                {
                                    text: "springboot的自动装载原理",
                                    link: '/column/article/spring-framework/springboot/springboot的自动装载原理'
                                }
                            ],

                        }
                    ]
                },
                {
                    text: 'Java',
                    collapsed: false,
                    items: [
                        {
                            text: 'java的反射机制原理',
                            link: '/column/article/java/Java的反射机制'
                        }
                    ],
                }
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
