<template>
  <div class="news-page">

    <!-- <img class="media" src="../news/img/11.jpg" alt="" /> -->

    <!-- controls 显示播放控件；poster 用封面图，加载前不会是一片空白 -->
    <video
      class="media"
      src="../news/img/11.mp4"
      poster="../news/img/11.jpg"
      controls
      playsinline
      preload="metadata"
    >
      您的浏览器不支持 HTML5 video 标签。
    </video>
  </div>
</template>

<script>
export default {
  name: 'new'
}
</script>

<style scoped>
.media {
  display: block;
  width: 100%;
  max-width: 720px;
  margin: 16px auto;
  border-radius: 12px;
}
video.media {
  background: #000;
}
</style>
