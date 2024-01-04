<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from "gsap";


onMounted(() => {

gsap.from('.home__shadow', {duration: 1.5, opacity: 0, y: -300, delay: .2});
gsap.from('.home__points', {duration: 1.5, opacity: 0, y: -300, delay: .4});
gsap.from('.home__grass', {duration: 1.5, opacity: 0, y: 300, delay: .2, ease:'elastic.out(1, .5)'});
gsap.from('.home__pumpkin', {duration: 1.5, opacity: 0, y: -300, delay: .6, ease:'bounce.out'});
gsap.from('.home__stone', {duration: 1.5, opacity: 0, y: 300, delay: .8, ease:'elastic.out(1, .5)'});
gsap.from('.home__moon', {duration: 1.5, opacity: 0, y: 300, delay: 1.5, ease:'elastic.out(1, .5)'});
gsap.from('.home__titles', {duration: 1.5, opacity: 0, y: -300, delay: 1.5,ease:'elastic.out(1,.5)'});
gsap.from('.home__tree', {duration: 1.5, opacity: 0, y: 300, delay: 2,ease:'elastic.out(1,.5)'});
gsap.from('.home__data', {duration: 1.5, opacity: 0, y: 300, delay: 2, ease:'elastic.out(1,.5)'});
});
</script>

<template>
    <!--================MAIN===================-->
    <main class="main">
        <!--================HOME===================-->
        <section class="home">
            <div class="home__container">
                <img src="../assets//img//home-point.png" alt="image" class="home__points">
                <img src="../assets//img//home-shadow.png" alt="image" class="home__shadow">
                <img src="../assets//img//home-moon.png" alt="image" class="home__moon">
                <img src="../assets//img//home-trees.png" alt="image" class="home__tree">
                <img src="../assets//img//home-pumpkin.png" alt="image" class="home__pumpkin">
                <img src="../assets//img//home-stones.png" alt="image" class="home__stone">
                <img src="../assets//img//home-grass.png" alt="image" class="home__grass">

                <div class="home__titles">
                    <h2 class="home__subtitle">TRICK OR TREAT</h2>
                    <h1 class="home__title">HALLOWEEN</h1>
                </div>
            </div>

            <div class="home__data">
                <p class="home__description">
                    Halloween is celebrated every October 31 at night, 
                        walk through the city with your friends and enjoy 
                            trick or treating, spend a terrifying night under 
                                the full moon.
                </p>

                <a href="#" class="home__button">
                    <img src="../assets/img/button.svg" alt="button image">
                    <span>CLICK HERE</span>
                </a>
            </div>
        </section>
    </main>


  
</template>

<style >
/* Change background header */
  
  
  /*=============== HOME ===============*/
.home{
    position: relative;
    height:100vh;
    background-color: var(--black-color);
}
.home__container{
    position:relative;
    height: 70%;
    background: var(--radial-color);
    display: grid;
    justify-items: center;
    overflow: hidden;
}
.home__container img{
    position:absolute;
}
.home__grass,
.home__pumpkin{
    bottom:0
}
.home__stone{
    bottom:-.5rem;
    width: 470px;
}

.home__tree{
    bottom:.5rem;
    width: 470px;
}
.home__moon{
    bottom:2rem;
    width:590px;
}

.home__stone,
.home__tree,
.home__moon{
    max-width: initial;
}

.home__shadow,
.home__points{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:center ;

}
.home__shadow{
    mix-blend-mode: overlay;
}
.home__titles{
    position: absolute;
    bottom:11rem;
    text-align: center;
}
.home__subtitle,
.home__title{
    color:var(--black-color);
    font-family: var(--second-font);
    font-weight: var(--font-regular);
    text-shadow: 0 2px 8px var(--first-color);
}

.home__subtitle{
    font-size: var(--big-font-size);

}
.home__title{
    font-size: var(--biggest-font-size);
}
.home__data{
    position:absolute;
    bottom:4rem;
    
    text-align:center;
    margin-inline:1.5rem;
    background: var(--black-color);

}
.home__description{
    margin-bottom: 2rem;
}
.home__button{
    display: inline-grid;
    position:relative;
    place-items: center;
    transition:filter .4s;
    
}

.home__button span{
    position:absolute;
    color:var(--white-color);
    font-size: var(--smal-font-size);
    font-weight: var(--font-medium);

}
.home__button:hover{
    filter:drop-shadow(0 4px 24px hsla(185,100%,48%,0.6));
}
  
  
</style>
