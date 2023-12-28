<template>
    <div className="loading__wrap--round">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.loading__wrap--round {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left:0;
    top:0;
    z-index: 23;
    width: 100%;
    height: 100%;  
    background: rgba(0,0,0,0.5);
    div {
      width: 1rem;
      height: 1rem;
      margin: 2rem 0.3rem;
      background: #fff;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;
  
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
  
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }
  
  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
</style>