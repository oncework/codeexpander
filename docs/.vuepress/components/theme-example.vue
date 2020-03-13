<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div class="blog-item" v-for="(blog, index) in blogList" :key="index">
        <img class="thumbnail" :src="blog.thumbnail" alt="缩略图">
        <div class="info">
          <h3 class="title">{{ blog.name }}</h3>
          <p class="desc">{{ blog.desc }}</p>
          <a class="btn" target="blank" :href="blog.link">直达</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogList: [
        { 
          name: '午后南杂', 
          desc: 'Enjoy when you can, and endure when you must.',
          link: 'https://www.recoluan.com', 
          thumbnail: '/blogImages/午后南杂.png' 
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.theme-example
  .blog-list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item
      margin-bottom 4rem
      width 48%
      box-shadow: var(--box-shadow)
      transition: all .5s
      .info
        margin 2.5rem  0 1.5rem
        padding 0 1.5rem
        .title
          margin 0
          max-width 65%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .desc
          margin .6rem 0 1.5rem  
        .btn
          display inline-block
          background-color $accentColor  
          color #ffffff
          border-radius 2px
          padding 4px 8px
          font-size .7rem
          text-decoration none 
          cursor pointer
      &:hover
        transform scale(1.05)

@media (max-width: $MQMobile)
  .theme-example
    .blog-list-wrapper
      .blog-item
        width 100%
</style>

