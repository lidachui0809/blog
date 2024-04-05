<template>
  <div class="copy-right">
<!--    <h1 class="title">网站信息</h1>-->
    <p class="description">网站已运行时间:{{runTimeInfo}}</p>
    <p class="copyright-text">Copyright &copy; {{ currentYear }} HaRei的网站。基于vite-press</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startTime: '2024-03-25 15:20',
      runTimeInfo:''
    };
  },

  created() {
    setInterval(() => {
          this.operateRunTime()
        }
        , 1000)
  },
  methods: {
    operateRunTime() {
      let startTime
          = Date.parse(this.startTime);
      let nowTime = new Date();
      console.log(startTime,nowTime);
      let time = (nowTime.getTime() - startTime) / 1000;//计算秒数
      let days = parseInt(time / 86400); // 天  24*60*60*1000
      let hours = parseInt(time / 3600) - 24 * days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数
      let minutes = parseInt(time % 3600 / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
      let seconds = parseInt(time % 60);  // 以60秒为一整份 取余 剩下秒数
      console.log("时间差是: " + days + "天, " + hours + "小时, " + minutes + "分钟, " + seconds + "秒");
      this.runTimeInfo= days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    }
  }
};
</script>

<style scoped>
/* 添加您想要的样式 */
.copy-right {
  margin-top: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.62); /* 设置分割线 */
  padding-top: 20px; /* 为了让文本与分割线有间距，添加上内边距 */
  background: white;
  text-align: center;
  width: 100%;
  height: 200px;
  /*margin-top: 50px;*/
}

.title {
  font-size: 24px;
  color: #333;
}

.description {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.copyright-text {
  font-size: 16px;
  color: #999;
}
</style>
