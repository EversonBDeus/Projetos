<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
const istoggle = ref(false)
const scrollY = ref(0);
// Função para aplicar a classe com base na posição de rolagem
const handleScroll = () => {
  scrollY.value = window.scrollY;
};



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<template>
<!--================HEADER===================-->
<header :class="scrollY >= 50 ? 'bg-header' : 'classe-inativa'" class="header"  id="header">
    <nav class="nav container">
        <a href="#" class="nav__logo">
            Halloween
        </a>
        <div :class="istoggle ? 'show-menu' : 'classe-inativa'" class="nav__menu" id="nav-menu">
            <ul class="nav__list">

                <li @click="istoggle=!istoggle" class="nav__item">
                    <a href="#" class="nav__link">Home</a>
                </li>

                <li @click="istoggle=!istoggle" class="nav__item">
                    <a href="#" class="nav__link">About Us</a>
                </li>

                <li @click="istoggle=!istoggle" class="nav__item">
                    <a href="#" class="nav__link">Portfolio</a>
                </li>

                <li @click="istoggle=!istoggle" class="nav__item">
                    <a href="#" class="nav__link">Contact Us</a>
                </li>

            </ul>

            <!--Close button-->
            <div @click="istoggle = !istoggle" class="nav__close" id="nav-close">
                <i class='bx bx-x'></i>
            </div>
        </div>

        <!----Toggle button----->
        <div @click="istoggle = !istoggle" class="nav__toggle" id="nav-toggle">
            <i class='bx bx-category'></i>
        </div>
    </nav>
</header>
  
</template>

<style >

/*=============== HEADER & NAV ===============*/
.header{
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    background: transparent;
    z-index: var(--z-fixed);
    transition:background-color .3s;
}
.nav{
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;  
}

.nav__logo{
    color:var(--white-color);
    font-family: var(--second-font);
    font-size: var(--h2-font-size);
    transition:text-shadow .3s;
}
.nav__logo:hover{
    text-shadow: 0 2px 8px var(--first-color);
}
.nav__toggle,
.nav__close{
    display: flex;
    font-size: 1.25rem;
    cursor: pointer;
}

/* Navigation for mobile devices */
@media screen and (max-width:1150px) {

    .nav__menu{
        position: fixed;
        top: -100%;
        left:0;
        background-color:var(--black-color);
        width: 100%;
        padding-block: 5rem 4.5rem;
        transition: top .4s;
    }
    .nav__list{
        display:flex;
        flex-direction: column;
        text-align: center;
        row-gap: 3rem;
    }
    .nav__link{
        color:var(--white-color);
        font-weight: var(--font-medium);
        transition: text-shadow .3s;
    }
    .nav__link:hover{
        text-shadow:0 2px 8px var(--first-color);
    }
    .nav__close{
        position:absolute;
        top: 1rem;
        right: 1.5rem;
    }
}  
  
  /* Show menu */
  .show-menu{
    top:0;
  }
  
  /* Change background header */
  
  .bg-header{
    background-color: var(--black-color) ;
  }



</style>
