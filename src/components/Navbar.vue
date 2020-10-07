<template>
  <header class="main-header">
    <div class="container">

      <h1 class="menu__logo">
        <router-link to="/" class="menu__logo-link">
          <img :src="indexLogo" alt="Aimer官方網站"/>
        </router-link>
      </h1>

      <!--漢堡選單-->
      <label 
        class="menu__toggle" 
        for="menu__toggle" 
        @click="showMobileMenu = !showMobileMenu">
        <div 
          class="menu__toggle-bar" 
          :class="{ active: showMobileMenu }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

      <nav class="main-nav">
        <router-link to="/PROFILE">PROFILE</router-link>
        <router-link to="/about">NEWS</router-link>
        <router-link to="/ALBUM">ALBUM</router-link>
        <router-link to="/FAN">FAN CLUB</router-link>
        <router-link to="/LIVE">LIVE</router-link>
        <router-link to="/GOODS">GOODS</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../assets/images/logo.png';
export default {
  name: 'Navbar',
  data(){
    return {
      showMobileMenu: false,
      indexLogo: Logo
    }
  },
  props: {
    
  }
}
</script>
<style scoped lang="scss">
   
</style>
