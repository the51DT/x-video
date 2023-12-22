<template>
  <!-- 비디오 상세 정보 -->
  <div class="video-details">
    <h2>{{ video.title }}</h2>
    <p>{{ video.nickName }} • {{ video.uploadtime }}</p>
    <div class="statistics">
      <span>{{ video.statistics.comment_count }}</span>
      <span>{{ video.statistics.like_count }}</span>
      <span>{{ video.statistics.play_count }}</span>
      <span>{{ video.statistics.share_count }}</span>
    </div>
  </div>
  <!-- 댓글 -->
  <div class="comments">
    <div v-for="(comment, commentIndex) in video.comments" :key="commentIndex" class="comment">
      <p>{{ comment.nickName }}</p>
      <p>{{ comment.writeTime }}</p>
      <p>{{ comment.user_comment }}</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>