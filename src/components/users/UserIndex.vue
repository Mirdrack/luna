<template>
  <div>
    <h1>User Index</h1>
    <div>
      <div v-for="user in users">{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'users-index',
  data () {
    return {
      users: []
    }
  },
  created () {
    console.log('users-index')
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      let AuthString = 'Bearer ' + this.$localStorage.get('access_token')
      let headers = { 'headers': { 'Authorization': AuthString } }

      axios.get('http://rea.app/user', headers)
        .then(response => {
          let responseData = response.data.data
          console.log(responseData)
          this.users = responseData
          // this.$bus.$emit('request-completed')
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
    }
  }
}
</script>
