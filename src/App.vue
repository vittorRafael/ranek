<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  body{
    font-family: Arial;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
  }

  a{
    text-decoration: none;
    color: #345;
  }

  img{
    max-width: 100%;
    display: block;
  }

  .btn{
    display: block;
    padding: 10px 30px;
    text-align: center;
    background: #87f;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all .3s;
    border: none;
    font-family: Arial;
    cursor: pointer;
  }

  .btn:hover{
    background: #65d;
    transform: scale(1.1);
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main{
    flex: 1;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(136,119,255,0.5);
    border-radius: 10px;
  }
</style>
