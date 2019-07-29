<template lang="pug">
  #app
    .page
      main.page-sidebar
        main-sidebar
      aside.page-content
        router-view.content
</template>

<script>
import MainSidebar from '@/components/MainSidebar.vue'

export default {
  components: {
    MainSidebar
  }
}
</script>

<style lang="less" src="./assets/less/common.less"></style>
