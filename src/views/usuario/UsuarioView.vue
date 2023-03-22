<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuarioCompras'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuarioVendas'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuarioEditar'}">Editar Usuário</router-link>
        </li>
        <li>
          <button class="btn" @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'UsuarioView',
  methods: {
    deslogar(){
      this.$store.dispatch('deslogarUsuario')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>