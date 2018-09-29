<template>
  <section class="wrapper">
    <div class="inputValue">
      <p>{{msg}}</p>
      <p>{{tweetContent}}</p>
      <p>あと{{240 - byteCount(tweetContent) -24}}バイト</p>
    </div>

    <div v-for="content in inputContents" v-bind:key="content.id" class="form-content">
      <label>{{ content.label }}</label>
      <input v-on:change=createTweetUrl() v-model="content.value" v-bind:placeholder="content.placeholder"/>
    </div>

    <div class="button">
      <a v-bind:href="twUrl" target="_blank">test</a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: 'input',
      twUrl: 'https://twitter.com/intent/tweet?text=転職希望っす&hashtags=hiyokonitsuduke,h_gen',
      inputContents: [
        {
          label: 'やりたいこと:',
          value: '',
          placeholder: 'Web系の開発'
        },
        {
          label: '職種:',
          value: '',
          placeholder: 'SE'
        },
        {
          label: '勤務地:',
          value: '',
          placeholder: '東京近辺'
        },
        {
          label: '希望年収:',
          value: '',
          placeholder: '450万以上'
        },
        {
          label: '年齢層:',
          value: '',
          placeholder: '30代'
        },
        {
          label: 'スキル/資格/語学:',
          value: '',
          placeholder: 'Python, JavaScript,Vue.js,node.js,MySQL'
        },
        {
          label: '契約形態:',
          value: '',
          placeholder: '正規'
        },
        {
          label: '転職時期:',
          value: '',
          placeholder: '11月頃'
        },
        {
          label: 'GitHub等:',
          value: '',
          placeholder: 'https://github.com/'
        },
        {
          label: '備考:',
          value: '',
          placeholder: 'ベンチャー企業で働きたい'
        }
      ]
    }
  },
  methods: {
    createTweetUrl: function () {
      // const url = encodeURIComponent(location.href)
      // ページ文言(タイトルとかdescription) ここではdescriptionを使用
      const hashtag = 'hiyokonitsuduke,h_ge'
      // Twitter用のurl作成 ハッシュタグもtxtを使用
      // this.twUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.tweetContent) + '&hashtags=' + hashtag + '&url=' + url
      this.twUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.tweetContent) + '&hashtags=' + hashtag
    },
    byteCount: function (str) {
      var length = 0
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i)
        if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
          length += 1
        } else {
          length += 2
        }
      }
      return length
    }
  },
  computed: {
    tweetContent: function () {
      let twStr = ''
      for (let key in this.inputContents) {
        if (this.inputContents[key]['value'].length > 0) {
          twStr = twStr + this.inputContents[key]['label'] + this.inputContents[key]['value'] + '\n'
        }
      }
      return twStr
    }
  }
}
</script>

<style>

.form-content {
  display: block;
  color: white;
  margin: 10px;
  text-align: left;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

}

label, input {
  display: block;
  width: 100%;
}

</style>
