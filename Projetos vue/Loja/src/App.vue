<template>
<div class="app-container" style="height: 100rem;">
    <Header />
    <CardCategoria />
    <CardLoja />
  </div>






</template>

<script setup>
import CardLoja from './components/CardLoja.vue'
import CardCategoria from './components/CardCategoria.vue'
import CardProduto from './components/CardProduto.vue'
import Header from './components/Header.vue'




</script>

<style scoped>
*{
    overflow-x: hidden;
}

</style>