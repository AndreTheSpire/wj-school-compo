<template>
  <div class="splash-screen">
    <div class="loading-wrapper">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.splash-screen {
  background: #fdfdfd;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
}

.loading-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: $primary-color;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
