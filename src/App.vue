<template>
  <article id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </article>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  background-color: #292F33;
  border: 1px solid white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  border: 0, solid, #fff;
}
</style>
