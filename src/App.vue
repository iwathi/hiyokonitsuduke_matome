<template>
  <article id="app">
    <v-app>
      <main>
        <v-container grid-list-xl text-xs-center>
          <Top></Top>
        </v-container>

      </main>

      <v-footer>
        <div>
          <p>Design by <a href="https://twitter.com/iwathi">@iwathi</a>.</p>
        </div>
      </v-footer>
    </v-app>
  </article>
</template>

<script>

import Top from '@/router/Top.vue'

export default {
  components: {
    Top
  }
}
</script>

<style>
body {
}
</style>
