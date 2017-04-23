<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <b-card header="Luna App"
                class="mb-2"
                show-footer
        >
          <div class="form-group">
            <label for="email">Email address:</label>
            <b-form-input id="email" type="email"></b-form-input>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <b-form-input id="password" type="password"></b-form-input>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Login</button>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
