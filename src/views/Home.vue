<template>
  <div class="index">

    <section class="index__banner">
      <div class="index__banner-video">
        <video :src="bannerVideo"
               autoplay=""
               loop=""
               playsinline=""
               muted=""></video>
        <a class="scroll-down"
           href="">
          <span></span>
          Scroll
        </a>
      </div>
    </section>

    <section class="index__ablum">
      <div class="container">
        <a class="index__ablum-item">
          <img :src="ablum1"
               alt="">
          <span>初回版</span>
        </a>
        <a class="index__ablum-item">
          <img :src="ablum2"
               alt="">
          <span>初回版</span>
        </a>
        <a class="index__ablum-item">
          <img :src="ablum3"
               alt="">
          <span>電影版</span>
        </a>
      </div>
    </section>

    <section class="index__about">
      <div class="index__about-bg"></div>
      <div class="index__about-content">
        <div class="item">
          <h2>PROFILE</h2>
          <p>
            {{profile}}
          </p>
        </div>
        <div class="item">
          <div class="box">
            <img :src="aboutpic1"
                 alt="">
          </div>
          <div class="box">
            <img :src="AboutPic2"
                 alt="">
          </div>
        </div>
        <a href="#"
           class="read-more">read more..</a>
      </div>
    </section>

    <section class="index__news">
      <div class="index__news-bg"></div>
      <div class="index__news-content">
        <div class="item">
          <h2>NEWS</h2>
          <div class="box"
               v-for="(item,index) in newsList"
               :key="index">
            <h3>{{item.date}}</h3>
            <p>{{item.content}}</p>
          </div>
          <a href="#"
             class="read-more">read more..</a>
        </div>
      </div>
    </section>

    <section class="index__social">
      <div class="container">
        <h2>FAN CLUB</h2>
        <h3>TWITTER即時動態</h3>
        <div class="index__social-item">
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic1"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic2"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="index__social-item">
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic3"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic4"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="index__social-item">
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic5"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
          <div class="box">
            <a class="twitter__photo"
               href="#">
              <img :src="socialpic6"
                   alt="fans">
            </a>
            <div class="twitter__link">
              <a href="#">
                <i class="fas fa-reply-all"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="index__youtube">
      <div class="container">
        <h2>MOVIE</h2>
        <h3>官方Youtube頻道</h3>
        <div class="index__youtube-item">
          <div class="box1">
            <div class="mv">
              <iframe width="560"
                      height="315"
                      src="https://www.youtube.com/embed/RsEnknXJgPM"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
          </div>
          <div class="box2">
            <div class="mv">
              <iframe width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dZ0Jt1zYj7g"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
            <div class="mv">
              <iframe width="560"
                      height="315"
                      src="https://www.youtube.com/embed/WyhYIWwCZic"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="index__slogan">
      <div class="index__slogan-item">
        <h3>私は音楽が好き</h3>
        <h3>歌うことが好き。</h3>
        <h3>それは私のすべてです。</h3>
      </div>
    </section>

  </div>
</template>

<script>
  import Banner from "../assets/images/AimerIndex.mp4";
  import Ablum1 from "../assets/images/ab001.jpg";
  import Ablum2 from "../assets/images/abz.png";
  import Ablum3 from "../assets/images/abs.png";
  import AboutPic1 from "../assets/images/aboutpic01.jpg";
  import AboutPic2 from "../assets/images/aboutpic2.jpg";
  import SocialPic1 from "../assets/images/s01e.png";
  import SocialPic2 from "../assets/images/s02e.png";
  import SocialPic3 from "../assets/images/s03e.png";
  import SocialPic4 from "../assets/images/s04e.png";
  import SocialPic5 from "../assets/images/s05e.png";
  import SocialPic6 from "../assets/images/s06e.png";

  export default {
    name: "home",
    data() {
      return {
        bannerVideo: Banner,
        ablum1: Ablum1,
        ablum2: Ablum2,
        ablum3: Ablum3,
        aboutpic1: AboutPic1,
        aboutpic2: AboutPic2,
        socialpic1: SocialPic1,
        socialpic2: SocialPic2,
        socialpic3: SocialPic3,
        socialpic4: SocialPic4,
        socialpic5: SocialPic5,
        socialpic6: SocialPic6,
        profile:
          "1991年出生的Aimer，關於個人的資料有部分並沒有公開，但她也稍稍說過自己的音樂經歷，小時候就在良好的音樂環境中培養，父親有玩樂團，到小學開始練習鋼琴，中學時期崇拜有名的搖滾歌手Avril Lavigne。",
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
  };
</script>

<style scoped>
</style>
