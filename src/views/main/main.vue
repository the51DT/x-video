<template>
  <div class="main">
    <a>
      <router-link to="/shots">Shots</router-link>
    </a>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: auto;
  padding: 100px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>