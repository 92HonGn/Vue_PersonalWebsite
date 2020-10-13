<template>
  <div class="news">

    <div class="news-title">
      <h2>
        Aimer 最新動態
      </h2>
    </div>

    <div class="news-selected">
      <div class="selected-container">
        <div class="desk-filter">
          <select>
            <option value="All ">All</option>
            <option value="Live ">Live</option>
            <option value="Ablum ">Ablum</option>
            <option value="Single ">Single</option>
            <option value="News ">News</option>
          </select>
          <div class="select__arrow "></div>
        </div>

        <div class="phone-filter">
          <ul>
            <li class="active">All</li>
            <li>Live</li>
            <li>Ablum</li>
            <li>Single</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="news-content">
      <div class="content-container">
        <div class="info"
             v-for="item in newsList"
             :key="item.newsid">
          <div class="col12">
            <img :src="item.newspic"
                 :alt="'NEWS'+item.newsid">
          </div>
          <div class="col12">
            <div class="mark">
              <div class="new-mark">
              NEWS
              </div>
              <span class="date">
                {{item.newsdate}}
              </span>
            </div>
            <h2>
              {{item.newstitle}}
            </h2>
            <p>
              {{item.newscontent}}
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import news1 from "../assets/images/news01.png";
  import news2 from "../assets/images/news02.png";
  import news3 from "../assets/images/news03.png";
  import news4 from "../assets/images/news04.png";

  export default {
    name: "news",
    data() {
      return {
        newsList: [
          {
            newsid: 1,
            newspic: news1,
            newsdate: "2021.10.16",
            newstitle: "Aimer第15屆單曲",
            newscontent:
              '它將於9月5日發布Aimer 15th單曲"Black Bird / Tiny Dancers / memory are pretty"CD購買者福利決定！',
          },
          {
            newsid: 2,
            newspic: news2,
            newsdate: "2021.10.17",
            newstitle: "Aimer第16屆單曲",
            newscontent:
              '它將於9月5日發布Aimer 15th單曲"Black Bird / Tiny Dancers / memory are pretty"CD購買者福利決定！',
          },
          {
            newsid: 3,
            newspic: news3,
            newsdate: "2021.10.18",
            newstitle: "Aimer第17屆單曲",
            newscontent:
              '它將於9月5日發布Aimer 15th單曲"Black Bird / Tiny Dancers / memory are pretty"CD購買者福利決定！',
          },
          {
            newsid: 4,
            newspic: news4,
            newsdate: "2021.10.19",
            newstitle: "Aimer第18屆單曲",
            newscontent:
              '它將於9月5日發布Aimer 15th單曲"Black Bird / Tiny Dancers / memory are pretty"CD購買者福利決定！',
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