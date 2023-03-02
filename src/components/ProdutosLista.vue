<template>
  <section class="produtos-container">
    <article v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <p>{{produto.preco}}</p>
      <h2 class="titulo">{{produto.nome}}</h2>
      <p>{{produto.descricao}}</p>
    </article>
  </section>
</template>

<script>
import {api} from '@/services.js'

export default {
  name: 'ProdutosLista',
  data(){
    return {
      produtos: null
    }
  },
  methods: {
    getProdutos(){
      api.get('/produto')
        .then(r => {
          this.produtos = r.data;
        })
    }
  },
  created(){
    this.getProdutos();
  }
}
</script>

<style>

</style>