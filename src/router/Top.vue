<template>
  <section class="wrapper">
    <p>{{msg}}</p>
    <div class="description">
    </div>

    <v-card>
    <v-card-text>
      <p class="text-lg-right">大きいボタンにする</p>
      <router-link tag="a" id="input" to="/input"><a>ひよこにつづけ！</a></router-link>
    </v-card-text>
    </v-card>

    <div class="information">
      <a class="twitter-grid" data-partner="tweetdeck" href="https://twitter.com/iwathi/timelines/1045400964490911745?ref_src=twsrc%5Etfw">#hiyokonitsuduke</a>
      <a href="https://twitter.com/hashtag/hiyokonitsuduke">read more</a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: 'top'
    }
  }
}
</script>

<style>
.action {
  border-bottom: 1px solid white;
}

</style>
