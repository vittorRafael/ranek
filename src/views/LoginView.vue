<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="senha">Senha: </label>
      <input type="password" name="senha" id="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from '@/components/LoginCriar.vue'
export default {
  name: 'LoginView',
  components:{
    LoginCriar
  },
  data(){
    return {
      login: {
        email: '',
        senha: ''
      }
    }
  },
  methods:{
    logar(){
      this.$store.dispatch('getUsuario', this.login.email)
      this.$router.push({name: 'usuario'})
    }
  }
}
</script>

<style scoped>
  .login{
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  form{
    display: grid;
  }
  .btn{
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  .perdeu{
    text-align: center;
    margin: 20px auto 0;
  }
  .perdeu a:hover{
    color: #87f;
    text-decoration: underline;
  }
  h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #87f;
  }
</style>