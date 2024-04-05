---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HaRei"
  text: "我的blog"
  tagline: /Slow Build/哈雷/
  actions:
    - theme: brand
      text: 近期项目
      link: http://47.115.227.86:8080/
    - theme: alt
      text: 个人主页
      link: https://lidachui.online


features:
- icon: 🤹️
  title: Java后端
  details: 野生程序员;在校生。主要研究Java后端,对android逆向也有稍许研究。
  link: /
- icon: 🐕
  title: 猫猫狗狗
  details: 猫猫狗狗
- icon: ❓❓
  title: 问号青年
  details: 一看就会,一做就懵——满头问号的问号青年。

---

<!-- 自定义组件 -->
<script setup>
import footerPage from '.vitepress/components/footerPage.vue';
</script>

<footerPage/>





