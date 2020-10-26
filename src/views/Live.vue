<template>
  <div class="live">

    <div class="live-title">
      <h2>
        Aimer 介紹
      </h2>
    </div>

    <div class="live-video">
      <div class="video-show">
        <iframe width="560"
                height="315"
                :src="liveVideo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""></iframe>
      </div>
      <div class="video-title">
        <h2>2020 Aimer's Blanc et Noir live</h2>
        <p>首次在武道館演唱</p>
      </div>
      <div class="video-intro">
        <div class="figure1"></div>
        <div class="figure2"></div>
      </div>
    </div>

    <div class="live-information">
      <div class="information-container">

        <div class="information-cate">
          <ul class="main-menu">

            <li class="main active">
              <a href="javascript::"></a>
              全部演唱會
            </li>

            <li class="main">
              <a href="javascript::"></a>
              依地區
              <ul class="sub-menu">
                <li v-for="item in livePlaceLists"
                    :key="item.placeid">
                  <a href="javascript::"></a>
                  {{item.placename}}
                </li>
              </ul>
            </li>

            <li class="main">
              <a href="javascript::"></a>
              依年月
              <ul class="sub-menu">
                <li v-for="item in liveDateLists"
                    :key="item.dateid">
                  <a href="javascript::"></a>
                  {{item.dateyear}}
                </li>
              </ul>
            </li>

          </ul>
        </div>

        <div class="information-times">
          <h3>Aimer Hall Tour 18/19 "soleil et pluie"</h3>
          <ul>

            <li>
              <h4>門票價格 指定座位\7,000(含稅)</h4>

              <p><span>※</span>6歲及以上的學齡前兒童不能進入</p>
              <p><span>※</span>每份申請最多4份（但最多2份千葉·埼玉·東京表演</p>
              <p><span>※</span>多種表演</p>

            </li>

            <li>
              <h4>一般發布日期</h4>

              <p><span>※</span>2018年表演2018/10/06（星期六）〜</p>
              <p><span>※</span>演出於2019年11月3日（週六）舉行〜</p>

            </li>

            <li>
              <h4>購票最新消息</h4>

              <div class="box1">
                <p><span>※</span>Aimer移動粉絲俱樂部“Blanc et Noir”第二次初步接待</p>
                <p class="subtitle"><span>※</span>受理期間</p>
                <p>2018年9月4日（星期二），2018年9月10日（星期一）中午23:00</p>
                <p class="subtitle"><span>※</span>購票連結
                </p>
                <p>
                  <a class="urltick"
                     href="#">http://k.aimer-web.jp/tour1819_ticket/</a>
                </p>
              </div>

              <div class="box2">
                <p><span>※</span>Aimer第15單曲“Black Bird / Tiny Dancers / memory is beautiful”購買者限制優先接收</p>
                <p class="subtitle"><span>※</span>接待時間</p>
                <p>2018年9月4日星期二至2018年9月10日星期一23:59</p>
              </div>

            </li>

          </ul>
        </div>

      </div>
    </div>

    <div class="live-place">
      <div class="place-container">

        <h4>場地資訊</h4>

        <div v-for="item in liveLoactionLists"
             :key="item.localid"
             class="place">

          <div class="col12">
            <img :src="item.localpic"
                 :alt="item.localart"
                 class="place-pic">
            <p class="place-art">
                {{item.localart}}
            </p>
            <a :href="item.localinfo" class="cover"></a>
          </div>

          <div class="col12">
            <ul class="place-detail">
              <li>
                <p>公演日</p>
                <span>{{item.localdate}}</span>
                <a href="#"
                   class="googleCal"></a>
              </li>
              <li>
                <p>地區</p>
                <span>{{item.localplace}}</span>
              </li>
              <li>
                <p>會場</p>
                <a :href="item.localinfo">{{item.localart}}</a>
              </li>
              <li>
                <p>開場/開演</p>
                <span>{{item.localtime}}</span>
              </li>
              <li>
                <p>連絡電話</p>
                <span>{{item.localtel}}</span>
              </li>
              <li>
                <p>場地資訊</p>
                <a :href="item.localinfo">{{item.localinfo}}</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import live01 from "../assets/images/live01.png";
  import live02 from "../assets/images/live02.png";
  import live03 from "../assets/images/live03.png";

  export default {
    name: "live",
    data() {
      return {
        liveVideo: "https://www.youtube.com/embed/fxyj3iEcd04",
        livePlaceLists: [
          {
            placeid: 1,
            placename: "台灣地方",
          },
          {
            placeid: 2,
            placename: "北海道",
          },
          {
            placeid: 3,
            placename: "東北地方",
          },
          {
            placeid: 4,
            placename: "関東地方",
          },
          {
            placeid: 5,
            placename: "中部地方",
          },
          {
            placeid: 6,
            placename: "近畿地方",
          },
          {
            placeid: 7,
            placename: "四国地方",
          },
          {
            placeid: 8,
            placename: "九州地方",
          },
          {
            placeid: 9,
            placename: "沖縄地方",
          },
        ],
        liveDateLists: [
          {
            dateid: 1,
            dateyear: "2020",
          },
          {
            dateid: 2,
            dateyear: "2021",
          },
          {
            dateid: 3,
            dateyear: "2022",
          },
        ],
        liveLoactionLists: [
          {
            localid: 1,
            localpic: live01,
            localdate: "2021.10.31(水)",
            localplace: "千葉県",
            localart: "市川市文化会館",
            localtime: "17:30 / 18:30",
            localtel: "0570-00-3337",
            localinfo: "http://sunrisetokyo.com/",
          },
          {
            localid: 2,
            localpic: live02,
            localdate: "2021.11.03(土)",
            localplace: "福岡県",
            localart: "福岡サンパレスホテル&ホール",
            localtime: "16:00 / 17:00",
            localtel: "BEA 092-712-4221",
            localinfo: "http://www.bea-net.com/",
          },
          {
            localid: 3,
            localpic: live03,
            localdate: "2018.11.04(日)",
            localplace: "広島県",
            localart: "広島文化学園HBGホール",
            localtime: "16:00 / 17:00",
            localtel: "082-249-3571",
            localinfo: "www.yumebanchi.jp",
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