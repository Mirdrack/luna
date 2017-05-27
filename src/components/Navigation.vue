<template>
<div class="nav-bar">
  <b-navbar toggleable type="inverse">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="home">
      <span>Luna</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item to="home">Home</b-nav-item>
        <b-nav-item>Support</b-nav-item>
        <b-nav-item to="about" v-if="isLogged === true">About</b-nav-item>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item to="login" v-if="isLogged === false">Login</b-nav-item>
        
        <!-- Navbar dropdown -->
        <b-nav-item-dropdown right-alignment v-if="isLogged === true">
          
          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>
          
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item @click.prevent="singout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
       
      </b-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  template: '<Navigation/>',
  name: 'navigation',
  data: function () {
    return {
      isLogged: false
    }
  },
  created: function () {
    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    singout: function () {
      this.$localStorage.remove('access_token')
      this.isLogged = this.checkIfIsLogged()
      this.$router.push('/')
    },
    checkIfIsLogged: function () {
      let token = this.$localStorage.get('access_token')
      if (token) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.nav-bar {
  background-color: #103E50;
}
</style>
