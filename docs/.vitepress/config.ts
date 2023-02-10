import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/Shmily/',
    lastUpdated: true,

    head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],

    title: 'Shmily',
    lang: 'zh-Hans-CN',
    description: 'Shmily docs',

    themeConfig: {
        logo: '/favicon.png',
        nav: [{ text: 'Demo', link: 'http://demo.shmily.lqzh.me/' }],
        sidebar: [
            {
                text: '指南',
                items: [
                    { text: '这是啥', link: '/guide/what-is' },
                    { text: '理念', link: '/guide/concept' },
                ],
            },
            {
                text: '数据格式',
                items: [
                    { text: 'Shmily-Msg', link: '/guide/use/msg' },
                    { text: 'Shmily-Data', link: '/guide/use/data' },
                ],
            },
            {
                text: '使用说明',
                items: [
                    { text: 'Get', link: '/guide/use/get' },
                    { text: 'Merger', link: '/guide/use/merger' },
                    { text: 'Show', link: '/guide/use/show' },
                ],
            },
            {
                text: 'Utils',
                items: [
                    { text: 'Web', link: '/introduction' },
                    { text: 'Server-Modify', link: '/getting-started' },
                ],
            },
            {
                text: '安装运行时环境',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'nodejs', link: '/guide/setup-runtime/nodejs' },
                    { text: 'python', link: '/guide/setup-runtime/python' },
                    { text: 'java', link: '/guide/setup-runtime/java' },
                ],
            },
            {
                text: '其他',
                items: [
                    { text: '感谢', link: '/guide/other/thanks' },
                    { text: '捐赠', link: '/guide/other/donation' },
                ],
            },
        ],
        outlineTitle: '这一页',
        socialLinks: [{ icon: 'github', link: 'https://github.com/lqzhgood/Shmily' }],
        footer: {
            message: 'GPLv3 License.',
            copyright: 'Made by lqzh, Powered by <span style="color:red">♥</span>',
        },
        editLink: {
            pattern: 'https://github.com/lqzhgood/Shmily/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
        lastUpdatedText: 'Updated Date',
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    },
});
