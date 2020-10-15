<template>
  <div class="album">

    <div class="album-title">
      <h2>
        Aimer 專輯
      </h2>
    </div>

    <div class="album-selected">
      <div class="selected-container">
        <div class="desk-filter">
          <select>
            <option value=" ">All</option>
            <option value=" ">SINGLE</option>
            <option value=" ">ALBUM</option>
            <option value=" ">DVD</option>
            <option value=" ">OTHER</option>
          </select>
          <div class="select__arrow "></div>
        </div>

        <div class="phone-filter">
          <ul>
            <li class="active">
              <a href="javascript::"></a>
              All
            </li>
            <li>
              <a href="javascript::"></a>
              Single
            </li>
            <li>
              <a href="javascript::"></a>
              Album
            </li>
            <li>
              <a href="javascript::"></a>
              DVD
            </li>
            <li>
              <a href="javascript::"></a>
              Other
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="album-info">
      <div class="info-main">
        <div class="col6"
             v-for="item in albumList"
             :key="item.albumid">
          <div class="ablum-pic">
            <img :src="item.albumpic"
                 :alt="'ablum' + item.albumid">
          </div>
          <div class="intro-ablum">
            <p>{{item.albumdate}}</p>
            <h2>{{item.albumtitle}}</h2>
            <p>{{item.albumcontent}}</p>
            <a href="javascript::"
               class="hvr-bounce-to-right">read more..</a>
          </div>
          <a class="album-hover" href="javascript::"></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import album1 from "../assets/images/album01.png";
  import album2 from "../assets/images/album02.png";
  import album3 from "../assets/images/album03.png";
  import album4 from "../assets/images/album04.png";
  import album5 from "../assets/images/album05.png";
  import album6 from "../assets/images/album06.png";

  export default {
    name: "album",
    data() {
      return {
        albumList: [
          {
            albumid: 1,
            albumpic: album1,
            albumdate: "2021.09.05",
            albumtitle: "Black Bird / Tiny Dancers",
            albumcontent: "初回生産限定盤",
          },
          {
            albumid: 2,
            albumpic: album2,
            albumdate: "2021.09.05",
            albumtitle: "映画『累-かさね-』",
            albumcontent: "累の記憶",
          },
          {
            albumid: 3,
            albumpic: album3,
            albumdate: "2021.06.09",
            albumtitle: "Aimer Live in 武道館",
            albumcontent: "blanc et noir(限定)",
          },
          {
            albumid: 4,
            albumpic: album4,
            albumdate: "2021.02.21",
            albumtitle: "Ref:rain / 眩いばかり",
            albumcontent: "初回生産限定盤",
          },
          {
            albumid: 5,
            albumpic: album5,
            albumdate: "2021.10.11",
            albumtitle: "ONE / 花の唄 / 六等星の夜",
            albumcontent: "初回生産限定盤",
          },
          {
            albumid: 6,
            albumpic: album6,
            albumdate: "2021.05.03",
            albumtitle: "BEST SELECTION blanc",
            albumcontent: "初回生産限定盤A(CD+BD)",
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
