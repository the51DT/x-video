<template>
  <div class="container container--bottom-util">
    <div class="btn-wrap">
      <div class="btn-wrap__btn" v-for="item in bottomUtilBtn">
        <a href="#" class="btn text-btn">
          <span class="">{{ item.btnName }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layoutBottomUtil',
  components: {},
  setup() {
    const bottomUtilBtn = ref([
      {
        btnName: 'home',
      },
      {
        btnName: 'upload',
        href: 'pop1',
      },
      {
        btnName: 'MyPage',
      },
    ])
    return {
      bottomUtilBtn,
    }
  },
}
</script>
<style lang=""></style>
