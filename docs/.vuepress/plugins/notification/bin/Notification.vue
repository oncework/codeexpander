<template>
  <transition name="fade">
    <div v-if="visible" class="notification-wrapper">
      <h4 class="notification-title">
        <i class="iconfont reco-tongzhi"></i>
        <span>加微信进交流群 🎉🎉🎉</span>
        <i class="btn-close" @click="closeNote">
          <svg t="1573745677073" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4448" width="22" height="22"><path d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0" p-id="4449"></path></svg>
        </i>
      </h4>
      <div class="notification-content">
        <img :src="require('./rvcode.png')" alt="">
      </div>
      <div style="padding: 0 16px">
        <h4>通知</h4>
        <h5>1.2.0 正式发布，适配系统的暗色模式和亮色模式。</h5>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    const closeNote = sessionStorage.getItem('closeNote')
    this.visible = closeNote === 'true' ? false : true
  },
  methods: {
    closeNote () {
      this.visible = false
      sessionStorage.setItem('closeNote', 'true')
    }
  }
}
</script>

<style lang="stylus" scoped>
.notification-wrapper
  position fixed
  top 80px
  right 20px
  z-index 19
  width 260px
  box-sizing border-box
  background #fff
  border 1px solid #3eaf7c
  border-radius .25rem
  background var(--background-color)
  box-shadow var(--box-shadow)
  .notification-title
    position relative
    box-sizing border-box
    padding 10px
    margin 0
    background #3eaf7c
    color #fff
    i 
      color #fff
    .btn-close
      position absolute
      display inline-block
      width 22px
      height 22px
      right 10px
      top 0
      bottom 0
      margin auto
      cursor pointer
      svg 
        fill #fff
  .notification-content
    box-sizing border-box
    padding 10px
    img
      width 100%
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
