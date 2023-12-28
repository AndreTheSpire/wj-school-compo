<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script></script>
<style lang="scss">
// html{
//   height: auto !important;
//   /*min-height: 643px;*/
//   min-width: 0 !important;
//   overflow: auto !important;
//   font-size: 16px;
//   font-family: "Lusitana", Georgia, serif !important;
//   color: #212121 !important;
// }
.page-enter-active {
  transition: all 0.7s;
  scroll-behavior: smooth;
}
.page-leave-active {
  transition: all 0.2s;
  scroll-behavior: smooth;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  scroll-behavior: smooth;
}

.slide-enter-active {
  transition: all 0.7s;
  scroll-behavior: smooth;
}
.slide-leave-active {
  transition: all 0.2s;
  scroll-behavior: smooth;
}
.slide-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
</style>
