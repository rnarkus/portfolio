<template>

      <div id="app">
        <header class="app-header">
          <app-nav :title="title" :projects2="projects2" :portfolio="portfolio"></app-nav>
        </header>
        <!--<main class="container">-->
          <router-view :projects2="projects2"></router-view>
        <!--</main>-->
      </div>

</template>

<script>
import AppNav from './components/NavBar'
export default {
  name: 'app',
  components: {
    AppNav
},
data() {
        return {
            // update routes in main.js file to reflect
            title: "Markus Hudobnik",
            projects2: {
                project1: {
                    title: "Collaborative Stories",
                    link: 'http://creative.colorado.edu/~dihu0041/fwd/projects/fwd/story/story.html',
                    des: "a place to Collaborate on stories",
                    sources: "JS, CSS, HTML"
                },
                project2: {
                    title: "Save the Bees",
                    link: 'http://creative.colorado.edu/~dihu0041/fwd/projects/fwd/socialwebsite/socialwebsite.html',
                    des: "an interactive jQuery website on saving the bees",
                    sources: "JS, CSS, HTML"
                },
                project3: {
                    title: "Commodore 64 Audit",
                    link: "http://creative.colorado.edu/~dihu0041/ixd/index.html",
                    des: "an experience audit of the 1982 hit computer ",
                    sources: "JS, CSS, HTML"
                }
            },
            portfolio: {
                portfolio1: {
                    title: "Front-End Portal",
                    link: 'http://creative.colorado.edu/~dihu0041/fwd/index.html'
                },
                portfolio2: {
                    title: "Creative Dev Portal",
                    link: 'http://creative.colorado.edu/~dihu0041/dev/index.html'
                },

            }
        }
    }
}

</script>
<!-- styling for the component -->
<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
    color: gray

.nav-left a
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px

//.container
    float: left

</style>
