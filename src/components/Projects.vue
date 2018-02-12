<template>
  <div id="projects">
  <!--<p>{{msg}}</p>-->

  <ul id="thediv">
      <li v-for="value in projects2">
          <a class="link" @click="seen = !seen" >{{value.title}}</a>
        <a id="link-img"  :href="value.link">
            <img class="img__img" v-if="seen" :src="'//image.thum.io/get/'+value.link"/>
        </a>

          <div class="description">{{value.des}}</div>
          <hr class="hr-style">
          <div class="source">{{value.sources}}</div>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
    props:["projects2"],
  name: 'projects',
  data() {
      return {

          seen: true,
      };
    },

}
</script>

<!-- styling for the component -->
<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Bangers')
@import '../mq'


img
    border-radius: 50px
    margin-top: 20px
    position: relative
    +mobile
        -webkit-flex-flow: column wrap

    &:hover
        box-shadow: rgba(0, 0, 0, 0.5) 0 1px 5px
        opacity: 0.5




#projects
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    font-size: 1em
    width: 100vw

#thediv
    padding: 0
    margin: 0
    list-style: none
    display: -webkit-box
    display: -moz-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-flex-flow: row wrap
    justify-content: flex-start
    overflow: scroll
    +mobile
        flex-direction: column


    li
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      font-size: 3em
      height: 100vh
      padding: 4rem
      padding-top: 10rem
      width: 700px
      +mobile
          width: 100vw
          font-size: 2em
          height: 100vh

      .hr-style
          border-top: 2px double black
          opacity: 0.2
          text-align: center

      &:nth-child(1n)
        background-color: #f3d250

      &:nth-child(2n)
        background-color: #90ccf4

      &:nth-child(3n)
        background-color: #f78888

      .link
        color: black
        hyphens: auto
        font-family: 'Bangers', cursive
        font-weight: 400
        letter-spacing: 8px
        line-height: 50px

      .description
          color: #474747
          font-style: normal
          font-size: 0.4em

      .source
          color: #474747
          font-size: 0.3em


</style>
