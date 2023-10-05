import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "快速入门",
        icon: "fa-solid fa-rocket",
        children: [
            "/10.快速入门/10.快速入门/10.什么是帧率、分辨率和码率.md",
            "/10.快速入门/10.快速入门/20.什么是补帧.md",
            "/10.快速入门/10.快速入门/30.什么是超分.md",
            "/10.快速入门/10.快速入门/40.快速上手SVFI.md",
            "/10.快速入门/10.快速入门/50.快速上手SVFI超分.md"
        ],
    },
    {
        text: "相关文章科普",
        icon: "fa-solid fa-atom",
        children: [
            "/10.快速入门/20.相关文章（科普）/01.图像表示与画质.md",
            "/10.快速入门/20.相关文章（科普）/03.编码、编码器与封装格式.md",
            "/10.快速入门/20.相关文章（科普）/07.什么是压制.md",
            "/10.快速入门/20.相关文章（科普）/08.什么是HDR.md",
        ],
    },
    {
        text: "软件使用指南",
        icon: "fa-brands fa-readme",
        children: [
            "/20.指南/10.必读导引.md",
            "/20.指南/20.高级内容详解.md",
            "/20.指南/21.命令行进阶讲解.md",
            "/20.指南/23.相关缩写说明.md",
            "/20.指南/30.分享与导入设置.md",
        ],
    },
    {
        text: "常见问题与预设",
        icon: "lightbulb",
        children: [
            "/30.常见问题解答/01.Q&A.md",
            "/30.常见问题解答/10.使用技巧与预设.md",
        ],
    },
    "/40.支持/01.关于SVFI.md",
    "/40.支持/10.支持.md",
]);
