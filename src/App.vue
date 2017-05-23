<template>
  <div id="app">
    <div class="container">
      <Navigation></Navigation>
      <div  id="main">
        <router-view></router-view>
      </div>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Bottom from '@/components/Bottom'

export default {
  name: 'app',
  components: { Navigation, Bottom }
}
</script>

<style>
#main {
  background-color: #FFFFFF;
  min-height: 450px;
  padding-top: 10px;
}
</style>
