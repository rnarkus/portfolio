<!-- src/components/AppNav.vue -->
<template>
    <nav class="navbar is-transparent is-fixed-top">
      <div class="navbar-brand">
          <router-link v-bind:to="'/'" class="navbar-item" >
            <img src="../assets/img/1.png" >
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" v-on:click="toggleNav">
          <span></span>
          <span></span>
          <span></span>
      </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">

        <router-link to="blog" class="navbar-item" >
          Blog
      </router-link>
      <router-link to="photos" class="navbar-item" >
        Photos
    </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
              <router-link to="projects" class="navbar-item" >
                Projects
            </router-link>
            <div class="navbar-dropdown is-boxed">

            <a v-for="value in projects2" :key="value.title+'.id'" :href="value.link" class="navbar-item" target="tabName">{{value.title}} </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
              <router-link to="projects" class="navbar-item" >
                Previous Class Portals
            </router-link>
            <div class="navbar-dropdown is-boxed">

            <a v-for="port in portfolio" :key="port.title+'.id'" :href="port.link" class="navbar-item" target="tabName">{{port.title}} </a>
            </div>
          </div>
        </div>

        <div class="navbar-end" v-bind:class="{ 'is-active': isActive }">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="#">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>
                    github.io
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="#">
                  <span class="icon">
                    <i class="fab fa-linkedin"></i>
                  </span>
                  <span>linkedin</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

  name: 'navbar',
  props: [
      'title',
      'projects2',
      'portfolio',
  ],
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>

</style>
