<template>
  <div class="about">

    <div class="about-title">
      <h2>
        Aimer 介紹
      </h2>
    </div>

    <div class="about-slider">
      <div class="item">
        <div class="intro">
          <p>
            Aimer戴著一副黑框眼鏡、並以一襲白色長裙出場，給人簡單大方又有氣質的印象。關於Aimer的歌曲想必不少粉絲都如數家珍，希望透過這次的電視宣傳讓更多人感受到Aimer的魅力！
          </p>
        </div>
        <img :src="aboutBanner"
             alt="Aimer照片">
      </div>
    </div>

    <div class="about-singer">
      <div class="singer-content">
        <div class="box">
          <h2>歌手介紹</h2>
          <p>
            自幼在充滿音樂的環境下長大。
          </p>
          <p>
            小學時就學過鋼琴，中學時學了吉他， 並開始了自己的音樂生涯。
          </p>
          <p>
            曾在海外生活過並積累了一定的經驗。 會用流暢英語寫歌詞。父親是樂隊的貝斯手。
          </p>
          <p>
            15歲左右喉嚨曾經發生病變，當時別說唱歌了， 連日常說話都有非常大的困難， 但是aimer並不想中斷自己的音樂生涯， 接著過了數年，聲音漸漸發的出來了， 並且產生了自己獨特的聲線。
          </p>
        </div>
      </div>
      <div class="singer-picture">
      </div>
    </div>

    <div class="about-singerlife">
      <div class="singerlife-container">
        <div class="singerlife-timeline">
          <div class="circle"
               id="1">
            <div class="year-point active"></div>
            <span class="year-mark">2012</span>
          </div>
          <div class="circle"
               id="2">
            <div class="year-point"></div>
            <span class="year-mark">2013</span>
          </div>
          <div class="circle"
               id="3">
            <div class="year-point"></div>
            <span class="year-mark">2014</span>
          </div>
          <div class="circle"
               id="4">
            <div class="year-point"></div>
            <span class="year-mark">2015</span>
          </div>
          <div class="circle"
               id="5">
            <div class="year-point"></div>
            <span class="year-mark">2016</span>
          </div>
          <div class="circle"
               id="6">
            <div class="year-point"></div>
            <span class="year-mark">2017</span>
          </div>
        </div>
        <div class="singerlife-photo"></div>
        <div class="singerlife-intro">
          <h2>歌手生涯</h2>
          <p>
             Aimer的歌聲得到了原作者久保帶人的讚賞。 這張單曲的封面更獲得歐洲攝影比賽「PX3」音樂部門的銀獎。
          </p>
          <p>
            2011年6月6日，以DefSTAR Records作为品牌正式宣布出道，并在9月7日发布单曲《六等星の夜/悲しみはオーロラに/TWINKLE TWINKLE LITTLE
            STAR》其中《六等星之夜
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "../assets/images/aboutbanner.jpg";
  export default {
    name: "home",
    data() {
      return {
        aboutBanner: Banner,
        newsList: [
          {
            date: "2021.07.21",
            content:
              "Aimer第15屆單曲“Black Bird / Tiny Dancers / Memories are pretty”CD購買者福利決定！",
          },
          {
            date: "2021.07.22",
            content:
              "Aimer粉絲俱樂部之旅”été“官方商品信息發布！ 我們也只為粉絲俱樂部會員舉辦彩票！",
          },
          {
            date: "2021.07.23",
            content: "Aimer粉絲俱樂部之旅”été“",
          },
        ],
      };
    },
    components: {},
    methods: {},
  };
</script>

<style scoped>
</style>
