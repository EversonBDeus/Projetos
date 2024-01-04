<script setup lang="ts">
import HeaderHallo from './components/HeaderHallo.vue';
import MainHallo from './components/MainHallo.vue';
</script>

<template>
  <header>
<HeaderHallo />
<MainHallo />

  </header>

  
</template>

<style >
/*=============== BREAKPOINTS ===============*/
  /* For small devices */
  @media screen and (max-width:330px){
    .container{
      margin-inline: 1rem;

    }
    .home__stone{
      width:370px;
    }
    .home__tree{
      width:400px;
    }
    .home__moon{
      width:520px;
    }
    .home__titles{
      bottom:9rem;
    }
    .home__data{
      bottom:2rem;
    }
  }
  
  /* For medium devices */
  @media screen and (min-width:576px){
    .home__container{
      height: 85%;

    }
    .home__grass,
    .home__tree,
    .home__stone,
    .home__moon{
      width:100%;
    }
    .home__moon{
      bottom:3rem;
    }
    .home__titles{
      bottom:13rem;
    }
    .home__data{
      bottom:2rem;
    }

  }

  @media screen and (min-width:768px){
    .home__titles{
      bottom:16rem;
    }
    .home__subtitle{
      font-size: 2.5rem;
    }
    .home__title{
      font-size: 4.5rem;
    }
  }
  
  /* For large devices */
  @media screen and (min-width:968px){
    .home__container{
      height: 90%;
    }
    .home__moon{
      bottom: 0;
    }
    .home__titles{
      bottom:20rem;
    }
    .home__data{
      max-width:768px;
      left: 0;
      right: 0;
      margin-inline: auto;
    }

  }
  @media screen and (min-width:1150px){
    .container{
      margin-inline: auto;

    }

    .nav{
      height: calc(var(--header-height) + 2rem);
    }
    .nav__toggle,
    .nav__close{
      display: none;
    }

    .nav__list{
      display: flex;
      flex-direction: row;
      column-gap:4rem;
    }
    .nav__link{
      color: var(--white-color);
    }
    .home__container{
      height: 100%;
    }

    .home__titles{
      bottom:25rem;
    }

  }
  @media screen and (min-width:1400px){
    .home{
      height: initial;
    }
    .home__container{
      height: 1200px;
    }
    .home__tree,
    .home__moon{
      bottom: -3rem;
    }
    .home__titles{
      bottom:38rem;
      
    }
    .home__subtitle{
      font-size: var(--big-font-size);
    }
    .home__title{
      font-size: var(--biggest-font-size);
      line-height: 90%;
    }
    ::-webkit-scrollbar{
      width: .6rem;
      background-color: hsl(202,16%,15%);
      
    }
    ::-webkit-scrollbar-thumb{ 
      background-color: hsl(202,16%,25%);
    }

  }
  
  /* For 2K resolutions (2048 x 1152) */
  
  @media screen and (min-width:2048px){
    .home__container{
      height: 1300px;
    }
    .home__titles{
      bottom:45rem;
    }

  }
</style>
