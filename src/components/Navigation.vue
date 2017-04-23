<template>
<div class="nav-bar">
  <b-navbar toggleable type="inverse">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>Luna</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item>Home</b-nav-item>
        <b-nav-item>Support</b-nav-item>
        <b-nav-item>About</b-nav-item>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">
        
        <!-- Navbar dropdown -->
        <b-nav-item-dropdown right-alignment>
          
          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>
          
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
       
      </b-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  template: '<Navigation/>',
  name: 'navigation'
}
</script>

<style>
.nav-bar {
  background-color: #103E50;
}
</style>
