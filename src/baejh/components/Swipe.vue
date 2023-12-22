<template>
  <div class="video-swipe" :ref="videoSwipeRef">
    <!-- <swiper v-bind="swiperOptions" ref="swiperRef"> -->
    <swiper
      ref="swiperRef"
      :direction="'vertical'"
      :slides-per-view="1"
      :mousewheel="true"
      :modules="modules"
    >
      <swiper-slide v-for="(video, index) in videos" :key="index" class="video">
        <video
          :src="video.url"
          loop
          muted
          x-webkit-airplay="true"
          webkit-playsinline="true"
          playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          autoplay="autoplay"
          :playing="video.playing"
          ref="videoRef"
          @click="toggleVideo(video, index)"
          @dblclick="handleToggle(video, index)"
        ></video>
        <i
          :class="`icon-video ${
            video.playing == true ? 'icon-video--pause' : 'icon-video--play'
          } ${video.playing}`"
        ></i>
        <i
          :screenActive="true"
          :class="
            screenActive == true
              ? 'icon-video icon-video--add-like-cnt'
              : 'icon-video'
          "
        ></i>
        <div class="video-details">
          <h2>{{ video.title }}</h2>
          <p>{{ video.nickName }} &nbsp; • &nbsp; {{ video.uploadtime }}</p>
        </div>
        <div class="button-bar statistics">
          <div>
            <base-button
              type="like"
              :class="video.active"
              :is-active="video.active"
              @toggle="handleToggle(video)"
            ></base-button>
            <span>{{ video.statistics.like_count }}</span>
          </div>
          <div>
            <base-button
              type="comments"
              @click="commentopenModal(video)"
            ></base-button>
            <span>{{ video.statistics.comment_count }}</span>
          </div>
          <div>
            <base-button
              type="share"
              @click="shareopenModal(video)"
            ></base-button>
            <span>{{ video.statistics.share_count }}</span>
          </div>
        </div>
        <!-- 모달창 -->
        <!-- <div v-if="video.commentModalOpen || video.shareModalOpen" class="swiper-dim"></div> -->
        <div v-if="video.commentModalOpen" class="modal">
          <div class="modal-comment">
            <button class="button-close" @click="closeModal(video)">닫기</button>
            <!-- 댓글 -->
            <div
              v-for="(comment, commentIndex) in video.comments"
              :key="commentIndex"
              class="comment"
            >
              <div class="modal-comment--top">
                <p class="comment-user">
                  {{ comment.nickName }} &nbsp; • &nbsp; {{ comment.writeTime }}
                </p>
                <div class="modal-comment--button">
                  <button @click="editComment(video, commentIndex)">
                    수정
                  </button>
                  <button @click="deleteComment(video, commentIndex)">
                    삭제
                  </button>
                </div>
              </div>
              <div v-if="editCommentIndex === commentIndex">
                <textarea v-model="editedComment"></textarea>
                <div class="modal-comment--button">
                  <button @click="saveComment(video)">저장</button>
                  <button @click="cancelEditComment">취소</button>
                </div>
              </div>
              <div v-else>
                <p>{{ comment.user_comment }}</p>
              </div>
            </div>
            <!-- 댓글 등록 -->
            <div class="comment-new">
              <textarea v-model="newComment"></textarea>
              <button @click="addNewComment(video)">댓글 등록</button>
            </div>
          </div>
        </div>
        <div v-if="video.shareModalOpen" class="modal">
          <div class="modal-share">
            <button @click="closeModal(video)">닫기</button>
            <!-- 공유 -->
            <button @click="shareLink(video)">URL 복사하기</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import BaseButton from '@/baejh/components/BaseButton.vue'
import { defineProps, ref, onMounted, computed } from 'vue'
import SwiperCore, { Mousewheel } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'

import VideoData from '@/baejh/components/videoList.js'

SwiperCore.use([Mousewheel])

const props = defineProps(['videos'])
// const videoSwipeRef = ref(null)
const swiperRef = ref(null)
// const isActive = ref(false)
const commentModalOpen = ref(false)
const shareModalOpen = ref(false)
const screenActive = ref(false)
// const myVideo = ref(null)
// const isPlaying = ref(false)
const isModalOpen = ref(false)
const editCommentIndex = ref(null)
const editedComment = ref('')
const newComment = ref('')

const handleToggle = (video, index) => {
  video.statistics.like_count++
  video.active = true
  screenActive.value = true
  // counter fn(t/f)
  console.log('double', video.active.value)
  setTimeout(() => {
    screenActive.value = false
  }, 1000)
}


// 댓글 수정
const editComment = (video, commentIndex) => {
  editCommentIndex.value = commentIndex
  editedComment.value = video.comments[commentIndex].user_comment
}

// 댓글 수정 저장
const saveComment = (video) => {
  if (editCommentIndex.value !== null) {
    video.comments[editCommentIndex.value].user_comment = editedComment.value
    cancelEditComment()
  }
}

const cancelEditComment = () => {
  editCommentIndex.value = null
  editedComment.value = ''
}

// 댓글 삭제
const deleteComment = (video, commentIndex) => {
  // 배열에서 해당 댓글 삭제
  video.comments.splice(commentIndex, 1)
  // 카운트 삭제
  video.statistics.comment_count--
  cancelEditComment()
}

// 댓글 등록
const addNewComment = (video) => {
  // 아무 문자 없을 시 등록 안됨
  if (newComment.value.trim() !== '') {
    const currentDate = new Date();
  // 현재 시간 설정 
    const formatter = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const [{ value: month }, , { value: day }, , { value: year }, , { value: hour }, , { value: minute },] = formatter.formatToParts(currentDate);
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
    // 댓글 등록시
    video.comments.push({
      nickName: '@user', // 사용자 이름
      writeTime: formattedDate, // 현재 시간
      user_comment: newComment.value,
    });
    // 카운트 ++
    video.statistics.comment_count++;
    newComment.value = '';
  }
};

const commentopenModal = (video) => {
  video.commentModalOpen = true
  video.shareModalOpen = false
}

const shareopenModal = (video) => {
  video.shareModalOpen = true
  video.commentModalOpen = false
}

const closeModal = (video) => {
  video.commentModalOpen = false
  video.shareModalOpen = false
}


const shareLink = (el) => {
  console.log('video.url:', el.url)
  let btnShareLink = el.url
  navigator.clipboard.writeText(btnShareLink).then(() => {
    alert('주소가 복사되었습니다!')
  })
}

const videoRef = ref([])
const toggleVideo = (video, index) => {
  const videoElement = videoRef.value[index]

  video.playing = !video.playing

  // 영상 정지, 재생
  if (video.playing) {
    videoElement.pause()
  } else {
    videoElement.play()
  }
}

// const swiperOptions = {
//   direction: 'vertical',
//   loop: true,
//   mousewheel: true,
// }
</script>

<style scoped></style>
