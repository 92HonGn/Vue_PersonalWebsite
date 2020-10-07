<template>
  <div class="goods">

    <div class="goods-title">
      <h2>
        {{goodsTile}}
      </h2>
    </div>

    <div class="goods-shop">
      <a href="javascript:"
         class="cover-hover">
      </a>
      <p>{{goodsShop}}</p>
    </div>

    <div class="goods-banner">
      <div class="banner-content">
        <h2>{{goodsBannerTitle}}</h2>
        <p>{{goodsBannerContent}}</p>
      </div>
    </div>

    <div class="goods-new">
      <div class="col12">
        <h2>{{goodsNewTitle}}</h2>
        <img :src="goodsNewPic"
             alt="最新商品">
      </div>
    </div>

    <div class="goods-intro">
      <h2>
        {{goodsIntroTitle}}
      </h2>
      <div class="intro">

        <div class="col6"
             v-for="item in goodsIntroLists"
             :key="item.shopid">
          <div class="pic">
            <img :src="item.shopimg"
                 alt="商品介紹">
            <a href="#"></a>
            <div v-show="item.isNew"
                 class="mark">New</div>
          </div>
          <h3>{{item.shoptitle}}</h3>
          <p>$<span>{{item.shopprice}}</span></p>
        </div>

      </div>
    </div>

    <div class="goods-recommend">
      <h2>
        {{goodsRecommendTitle}}
      </h2>
      <div class="recommend">

        <div class="col6"
             v-for="item in goodsRecommendLists"
             :key="item.shopid">
          <div class="pic">
            <img :src="item.shopimg"
                 alt="推薦商品">
            <a href="#"></a>
          </div>
          <h3>{{item.shoptitle}}</h3>
          <p>$<span>{{item.shopprice}}</span></p>
        </div>

      </div>
    </div>

    <div class="goods-shoppath">
      <h2>
        {{goodShoppathTitle}}
      </h2>
      <div class="shoppath">

        <div class="col6"
             v-for="item in goodShoppathLists"
             :key="item.pathid">
          <div class="path">
            <img :src="item.pathimg"
                 alt="官方購買通路">
            <a href="#"></a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Goods from "../assets/images/shopNew.png";

  import shop1 from "../assets/images/shop1.png";
  import shop2 from "../assets/images/shop2.png";
  import shop3 from "../assets/images/shop3.png";
  import shop4 from "../assets/images/shop4.png";
  import shop5 from "../assets/images/shop5.png";
  import shop6 from "../assets/images/shop6.png";
  import shop7 from "../assets/images/shop7.png";
  import shop8 from "../assets/images/shop8.png";

  import recommend1 from "../assets/images/rmd1.png";
  import recommend2 from "../assets/images/rmd2.png";
  import recommend3 from "../assets/images/rmd3.png";
  import recommend4 from "../assets/images/rmd4.png";

  import path1 from "../assets/images/shoppath1.png";
  import path2 from "../assets/images/shoppath2.png";
  import path3 from "../assets/images/shoppath3.png";
  import path4 from "../assets/images/shoppath4.png";
  import path5 from "../assets/images/shoppath5.png";
  import path6 from "../assets/images/shoppath6.png";
  import path7 from "../assets/images/shoppath7.png";

  export default {
    name: "goods",
    data() {
      return {
        goodsTile: "Aimer 周邊",
        goodsShop: "Aimer 外部商城連結",
        goodsBannerTitle: "Aimer's 周邊商品介紹",
        goodsBannerContent: "主要販售近期演唱會的商品、像是T-shirt、水瓶等。",
        goodsNewTitle: "近期商品",
        goodsNewPic: Goods,
        goodsIntroTitle: "商品介紹",
        goodsRecommendTitle: "推薦商品",
        goodShoppathTitle: "購買通路",
        goodsIntroLists: [
          {
            shopid: 1,
            shopimg: shop1,
            shoptitle: "Aimer親筆手札",
            shopprice: "120",
            isNew: false,
          },
          {
            shopid: 2,
            shopimg: shop2,
            shoptitle: "環保袋",
            shopprice: "200",
            isNew: true,
          },
          {
            shopid: 3,
            shopimg: shop3,
            shoptitle: "造型別針",
            shopprice: "350",
            isNew: false,
          },
          {
            shopid: 4,
            shopimg: shop4,
            shoptitle: "毛巾",
            shopprice: "450",
            isNew: true,
          },
          {
            shopid: 5,
            shopimg: shop5,
            shoptitle: "紀念項鍊",
            shopprice: "550",
            isNew: true,
          },
          {
            shopid: 6,
            shopimg: shop6,
            shoptitle: "紀念外套",
            shopprice: "650",
            isNew: false,
          },
          {
            shopid: 7,
            shopimg: shop7,
            shoptitle: "演唱會短T",
            shopprice: "750",
            isNew: true,
          },
          {
            shopid: 8,
            shopimg: shop8,
            shoptitle: "演唱會灰T",
            shopprice: "850",
            isNew: false,
          },
        ],
        goodsRecommendLists: [
          {
            shopid: 1,
            shopimg: recommend1,
            shoptitle: "紀念筆記本",
            shopprice: "120",
          },
          {
            shopid: 2,
            shopimg: recommend2,
            shoptitle: "黑色T",
            shopprice: "120",
          },
          {
            shopid: 3,
            shopimg: recommend3,
            shoptitle: "白色短T",
            shopprice: "120",
          },
          {
            shopid: 4,
            shopimg: recommend4,
            shoptitle: "紀念手帕",
            shopprice: "120",
          },
        ],
        goodShoppathLists: [
          {
            pathid: 1,
            pathimg: path1,
          },
          {
            pathid: 2,
            pathimg: path2,
          },
          {
            pathid: 3,
            pathimg: path3,
          },
          {
            pathid: 4,
            pathimg: path4,
          },
          {
            pathid: 5,
            pathimg: path5,
          },
          {
            pathid: 6,
            pathimg: path6,
          },
          {
            pathid: 7,
            pathimg: path7,
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