<template>
  <div id="app">
    <div class="container">
      <Navigation></Navigation>
      <div  id="main">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: { Navigation, Footer }
}
</script>

<style>
#main {
  background-color: #FFFFFF;
  min-height: 450px;
  padding-top: 10px;
}
</style>
