<template>
  <div>
    <div class='ui centered card'>
      <div class='header'>
        Login
      </div>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Username</label>
            <input v-model="username" type='text' ref='username' defaultValue="">
          </div>
          <div class='field'>
            <label>Password</label>
            <input v-model="password" type='password' ref='password' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="login">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.username + this.password);
      this.$http.post('http://localhost:3000/account/login'
        , { name: this.username, password: this.password }
        , { headers: { 'content-type': 'application/json' } })
        .then((result) => {
          if (result.data.succ) {
            console.log('login success ' + result.data.data);
            this.$router.push({ name: 'TodoPage', params: { username: this.username } });
          } else {
            console.log('login fail!');
          }
        }, (error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
