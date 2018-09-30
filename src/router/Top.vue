<template>
  <section class="wrapper">
    <v-responsive>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">#hiyokonitsuduke</h3>
            <span class="subheading">あなたを必要とする企業がきっと見つかる</span>
            <v-divider class="my-3"></v-divider>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-btn slot="activator" class="mx-0" color="primary" large dark>ひよこに続く</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">#hiyokonitsuduke</span>
                </v-card-title>
                <v-card-text class="inputValue">
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <p>{{tweetContent}}</p>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                       <div v-for="content in inputContents" v-bind:key="content.id" class="form-content">
                         <v-text-field v-on:change=createTweetUrl() v-bind:label="content.label" v-bind:hint="content.hint" v-model="content.value" persistent-hint required></v-text-field>
                       </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <p>残り{{240 - byteCount(tweetContent) -24}}バイト</p>
                    <v-btn color="dark darken-1" flat @click=closeBotton()>Close</v-btn>
                    <v-btn color="blue darken-1" flat @click=tweetBotton()>Tweet</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-layout row wrap>
      <v-flex xs12 offset-xs1>
        <v-card>
          <v-card-text>
            <div>
            <a class="twitter-timeline" data-partner="tweetdeck" href="https://twitter.com/iwathi/timelines/1046158228369735681?ref_src=twsrc%5Etfw">全ての始まり - Curated tweets by iwathi</a>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 offset-xs1>
        <v-card>
          <v-card-text>
            <div>
            <a class="twitter-timeline" data-partner="tweetdeck" href="https://twitter.com/iwathi/timelines/1046158621480910848?ref_src=twsrc%5Etfw">ひよこに続いた方々 - Curated tweets by iwathi</a>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 offset-xs1>
        <v-card class="information">
          <v-card-text>
            <div>
              <a class="twitter-timeline" data-partner="tweetdeck" href="https://twitter.com/iwathi/timelines/1046159458651389953?ref_src=twsrc%5Etfw">ひよこに続いている方々 - Curated tweets by iwathi</a>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'top',
    dialog: false,
    fab: false,
    hidden: false,
    tabs: 'one',
    twUrl: 'https://twitter.com/intent/tweet?text=転職希望っす&hashtags=hiyokonitsuduke,h_gen',
    inputContents: [
      {
        label: 'やりたいこと:',
        value: '',
        hint: ''
      },
      {
        label: '職種:',
        value: '',
        hint: ''
      },
      {
        label: '勤務地:',
        value: '',
        hint: ''
      },
      {
        label: '希望年収:',
        value: '',
        hint: ''
      },
      {
        label: '年齢層:',
        value: '',
        hint: ''
      },
      {
        label: 'スキル:',
        value: '',
        hint: 'i.e. 保有スキル/資格/語学 (Python, JS, MySQL, Java, ネスペ, TOEIC880)'
      },
      {
        label: '契約形態:',
        value: '',
        hint: ''
      },
      {
        label: '転職時期:',
        value: '',
        hint: ''
      },
      {
        label: '成果:',
        value: '',
        hint: 'i.e. ポートフォリオやGitHub等'
      },
      {
        label: '備考:',
        value: '',
        hint: ''
      }
    ]
  }),
  methods: {
    createTweetUrl: function () {
      // const url = encodeURIComponent(location.href)
      // ページ文言(タイトルとかdescription) ここではdescriptionを使用
      const hashtag = 'hiyokonitsuduke,h_ge'
      // Twitter用のurl作成 ハッシュタグもtxtを使用
      // this.twUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.tweetContent) + '&hashtags=' + hashtag + '&url=' + url
      this.twUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.tweetContent) + '&hashtags=' + hashtag
    },
    closeBotton: function () {
      this.dialog = false
    },
    tweetBotton: function () {
      this.dialog = false
      location.href = this.twUrl
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
  },
  mounted () {
    /* eslint-disable */
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
      if (d.getElementById(id)) return t.widgets.load();
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
      t._e.push(f);

      };
      return t;

    }(document, "script", "twitter-wjs"));
      /* eslint-enable */
  }
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-speed-dial,
#lateral .v-btn--floating {
  position: absolute;
}
#lateral .v-btn--floating {
  margin: 0 0 16px 16px;
}

</style>
