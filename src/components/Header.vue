<template>
  <section class="header">
    <h1><v-icon>home</v-icon>#hiyokonitsuduke</h1>
    <ul>
      <router-link tag="li" id="top" to="/" exact><a>Top</a></router-link>
      <router-link tag="li" id="input" to="/input"><a>Input</a></router-link>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  border-bottom: 1px solid white;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
