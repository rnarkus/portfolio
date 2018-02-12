<template>
    <div class="hello">
        <section>
            <h2>{{currentStatus}}</h2>
            <h1>{{msg}}</h1>
            <p>{{tagline}}</p>
            <p>{{des}}</p>
            <p>{{resources}}</p>
        </section>
    </div>

</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: 'Markus Hudobnik',
      tagline: "Landing page for Markus Hudobnik projects and coursework.",
      currentStatus: "In Testing...",
      des: 'This page is built using Vuejs 2.0 and vue-router. It is deployed using webpack-cli. This is a work in progress and only the projects tab has any information',
      resources: "bulma.io, webpack-cli, vue-router, npm, Vuejs 2.0, "

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
    margin-top: 100px;
    text-align:center;

}

</style>
