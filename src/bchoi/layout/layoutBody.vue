<template>
  <!-- layoutTop [Start] -->
  <layoutTop :isActive="false" />
  <!-- layoutTop [End] -->
  <div class="container container--slide">
    <swiper
      :direction="'vertical'"
      :slides-per-view="1"
      :mousewheel="true"
      :pagination="{ clickable: false }"
      :scrollbar="{ draggable: true }"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in slideItemData">
        <slideContent
          :type="item.type"
          :src="item.src"
          :alt="item.title"
          :mediaRef="item.mediaRef"
          :mediaControl="item.mediaControl"
          @toggleMedia="toggleMedia(item)"
        />

        <div class="btn-wrap">
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnLike"
          >
            <btnComponent
              btnType="icon"
              btnName="like"
              :isActive="item.likeIsActive"
              :btnCnt="item.likeCnt"
              @click="toggleLike(item)"
            />
          </div>
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnComment"
          >
            <btnComponent
              btnType="icon"
              btnName="comment"
              :isActive="item.commentIsActive"
              :btnCnt="item.commentCnt"
              popupClass="commentLayer"
              @click="toggleComment"
            />
          </div>
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnShare"
          >
            <btnComponent
              btnType="icon"
              btnName="share"
              :isActive="item.shareIsActive"
              :btnCnt="item.shareCnt"
              popupClass="shareLayer"
              @click="toggleShare(item)"
            />
          </div>
        </div>

        <slideInfo
          :title="item.title"
          :author="item.author"
          :date="item.date"
        />
      </swiper-slide>
    </swiper>
  </div>
  <div class="container container--bottom-util">
    <div class="btn-wrap">
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent btnType="text" btnName="Home" />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent
          btnType="popup"
          btnName="Search"
          :popupClass="pop01"
          @click="toggleSearch"
        />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent
          btnType="popup"
          btnName="Upload"
          :popupClass="pop02"
          @click="togglePopup"
        />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent btnType="text" btnName="My Page" />
      </div>
    </div>
  </div>
  <!-- update popup  -->
  <popupComponent
    popupType="layer-bottom"
    popupClass="updateLayer"
    :visible="isUpdatePopupVisible"
    @close="closePopup"
    ref="popupUpdateRef"
    >Update popup</popupComponent
  >
  <!-- search popup  -->
  <popupComponent
    popupType="full"
    popupClass="searchLayer"
    :visible="isSearchPopupVisible"
    @close="closePopup"
    ref="popupSearchRef"
    >search popup</popupComponent
  >
  <!-- comment popup  -->
  <popupComponent
    popupType="layer-bottom"
    popupClass="commentLayer"
    :visible="isCommentPopupVisible"
    @close="closePopup"
    ref="popupCommentRef"
    >added comment</popupComponent
  >
  <!-- share popup  -->
  <popupComponent
    popupType="modal"
    popupClass="shareLayer"
    :visible="isSharePopupVisible"
    @close="closePopup"
    ref="popupShareRef"
    >share link!
    <div class="btn-wrap">
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <!-- 현재 slideItemData 의 shareUrl 받아야함 -->
        <btnComponent
          btnType="text"
          btnName="Copy URL"
          @click="copyUrl('http://www.naver.com')"
        />
      </div>
    </div>
  </popupComponent>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel, A11y } from 'swiper'
import layoutTop from '@/bchoi/layout/layoutTop.vue'
import slideContent from '@/bchoi/layout/slideContentComponent.vue'
import slideInfo from '@/bchoi/layout/slideInfoComponent.vue'
import btnComponent from '@/bchoi/layout/btnComponent.vue'
import popupComponent from '@/bchoi/layout/popup.vue'
import 'swiper/swiper.scss'
SwiperCore.use([Mousewheel, A11y])

// slide ref
const slideItemData = ref([
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요1',
    src: '/video/1.mp4',
    author: 'KKK',
    date: '2023-12-12',
    mediaRef: 'mediaVideo01',
    mediaControl: false,
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeIsActive: false,
    commentIsActive: false,
    shareIsActive: false,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
  {
    type: 'img',
    title: '안녕하세요 이제 시작해주세요2',
    src: '/src/assets/images/main/main02.jpg',
    author: 'KKK',
    date: '2023-12-13',
    mediaRef: 'mediaVideo02',
    mediaControl: true,
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeIsActive: false,
    commentIsActive: false,
    shareIsActive: false,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요3',
    src: '/video/3.mp4',
    author: 'KKK',
    date: '2023-12-14',
    mediaRef: 'mediaVideo03',
    mediaControl: false,
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeIsActive: false,
    commentIsActive: false,
    shareIsActive: false,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
])

// UpdatePopup ref
const isUpdatePopupVisible = ref(false)
// SearchPopup ref
const isSearchPopupVisible = ref(false)
// comment popup (full popup) ref
const isCommentPopupVisible = ref(false)
// Share popup ref
const isSharePopupVisible = ref(false)

// Popup Close
const closePopup = () => {
  isUpdatePopupVisible.value = false
  isSearchPopupVisible.value = false
  isSharePopupVisible.value = false
  isCommentPopupVisible.value = false
}

// btnSearch Toggle
// const toggleSearch = () => {
//   console.log('search test')
// }

// toggle -> 수정필요
//btnMediaControl Toggle
const toggleMedia = (item) => {
  console.log('test')
  const targetRef = item.mediaRef
  const targetEl = document.querySelectorAll(targetRef)
  item.mediaControl = !item.mediaControl
  console.log(targetEl)
  if (item.mediaControl == true) {
    console.log('true')
  } else {
    console.log('false')
  }
}

// btnLike Toggle, btnLike Count
const toggleLike = (item) => {
  item.likeIsActive = !item.likeIsActive
  item.likeCnt++
}

// btnSharePopup Toggle
const toggleShare = (item) => {
  isSharePopupVisible.value = !isSharePopupVisible.value
  item.shareIsActive = !item.shareIsActive
  item.shareCnt++
}

// btnCommentPopup Toggle
const toggleComment = () => {
  isCommentPopupVisible.value = !isCommentPopupVisible.value
}

// UpdatePopup Toggle t/f
const toggleSearch = () => {
  isSearchPopupVisible.value = !isSearchPopupVisible.value
}

// copy share url
const copyUrl = (target) => {
  console.log('copy', target)
  let btnShareLink = target.shareLink
  navigator.clipboard.writeText(btnShareLink).then(() => {
    alert('주소가 복사되었습니다!')
  })
}

// SearhPopup Toggle t/f
const togglePopup = () => {
  isUpdatePopupVisible.value = !isUpdatePopupVisible.value
}

const btnMediaControl = () => {
  mediaRef.value.btnMediaControl()
}
// mediaButton playing/pused

// const mediaControl = (item) => {
//   console.log(item.mediaControl)
//   item.mediaControl = !item.mediaControl
//   if (item.mediaControl) {
//     console.log('정지', item)
//     console.log('정지', item.mediaRef)
//     item.mediaRef.pause()
//     item.mediaControl = false
//   } else {
//     console.log('재생', item)
//     console.log('재생', item.mediaRef)
//     item.mediaRef.play()
//     item.mediaControl = true
//   }
// }
// onMounted((item) => {
//   item.mediaRef.addEventListener('ended', () => {
//     item.mediaControl = false
//   })
// })

// const pause = () => {
//   console.log('test')
// }
// const play = () => {
//   console.log('test2')
// }
// const mediaPlay = (item) => {
//   console.log('mediaPlay', item.mediaControl)
//   item.mediaControl = true
// }

// const mediaPause = (item) => {
//   console.log('mediaPause', item.mediaControl)
//   item.mediaControl = false
// }
</script>
<style lang="scss">
$desktop: 'min-width : 769px';
@media ($desktop) {
}
.container {
  &--slide {
    height: 100%;
  }
}
</style>
