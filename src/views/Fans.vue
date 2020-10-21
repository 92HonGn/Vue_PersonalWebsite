<template>
  <div class="fans">

    <div class="fans-title">
      <h2>
        Aimer 粉絲聚會
      </h2>
    </div>

    <div class="fans-front">
      <div class="front-container">
        <div class="col12">
          <div class="box">
            <h2>Aimer Offical Fan Club</h2>
            <h3>Aimer的官方移動粉絲俱樂部</h3>
            <h3>“Blanc et Noir”</h3>
            <p>此外，還提供Aimer One-man真人票預訂接待和現有計劃等禮品優惠。</p>
            <p>在擴展Aimer擁有的世界觀的同時，請享受讓Aimer更熟悉的內容♪
            </p>
          </div>
        </div>
        <div class="col12">
          <img class="clubpic"
               :src="clubpic"
               alt="官方粉絲應援">
        </div>
      </div>
    </div>

    <div class="fans-join">
      <div class="join-container">
        <div class="col12">
          <div class="ribbon">
            <div class="content">加入辦法</div>
          </div>
          <p>這是一個移動粉絲俱樂部服務，您可以使用智能手機每月300日元（不含稅）。
          </p>
          <p>請通過以下網址從智能手機訪問。</p>
          <p>※請注意，它與個人電腦，手機和一些平板電腦終端不兼容。
          </p>
        </div>
        <div class="col12">
          <div class="ribbon">
            <div class="content">官方 Qrcode</div>
          </div>
          <img class="qr"
               :src="fansQR"
               alt="qr">
          <a href="#">http://k.aimer-web.jp/</a>
        </div>
      </div>
    </div>

    <div class="fans-intro">
      <div class="intro-container">

        <div class="ribbon">
          <div class="content">優惠活動</div>
        </div>

        <div class="intro-active">
          <div class="col6"
               v-for="item in fansInfoList"
               :key="item.fansid">
            <div class="img">
              <img :src="item.fanspic"
                   :alt="'fans' + item.fanssub1">
            </div>
            <div class="sub-content">
              <h3>{{item.fanssub1}}</h3>
              <p>{{item.fanssub2}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="fans-copyright">
      <p class="copyright">©Sony Music Marketing Inc.</p>
    </div>

  </div>
</template>

<script>
  import fansQR from "../assets/images/fansQR.png";
  import fanspic from "../assets/images/fans01.png";
  import fans1 from "../assets/images/fans02.png";
  import fans2 from "../assets/images/fans03.png";
  import fans3 from "../assets/images/fans04.png";
  import fans4 from "../assets/images/fans05.png";
  import fans5 from "../assets/images/fans06.png";
  import fans6 from "../assets/images/fans07.png";
  import fans7 from "../assets/images/fans08.png";
  import fans8 from "../assets/images/fans09.png";

  export default {
    name: "fans",
    data() {
      return {
        clubpic: fanspic,
        fansQR: fansQR,
        fansInfoList: [
          {
            fansid: 1,
            fanspic: fans1,
            fanssub1: "Ticket",
            fanssub2: "一般發布",
          },
          {
            fansid: 2,
            fanspic: fans2,
            fanssub1: "Staff Journal",
            fanssub2: "熟悉的員工介紹",
          },
          {
            fansid: 3,
            fanspic: fans3,
            fanssub1: "Journal",
            fanssub2: "Aimer的口語日記",
          },
          {
            fansid: 4,
            fanspic: fans4,
            fanssub1: "Paroles",
            fanssub2: "發布手寫歌詞",
          },
          {
            fansid: 5,
            fanspic: fans5,
            fanssub1: "Galerie",
            fanssub2: "Aimer本人繪畫",
          },
          {
            fansid: 6,
            fanspic: fans6,
            fanssub1: "Anniversaire",
            fanssub2: "生日發送消息",
          },
          {
            fansid: 7,
            fanspic: fans7,
            fanssub1: "Radio",
            fanssub2: "網絡電台談話",
          },
          {
            fansid: 8,
            fanspic: fans8,
            fanssub1: "Prime Membre",
            fanssub2: "秘密的小房間",
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
