<template>
    <div>
      <div class="search">
        <div class="icon-pesquisa">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <input type="text" placeholder="Pesquisar">
    </div>
    <div class="categoria">
        <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>
         <div class="categoria-item">
            <img src="https://adegabh.com.br/V/site/img/layout/contato/bebidas.png" alt="bebidas">
            <p>Bebidas</p>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.categoria{
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap:3rem;
}
.categoria-item{
 
    width:20rem;
    height:10rem;
    border-radius:5px;

    overflow: hidden;
    position: relative;
     background-color:rgb(193, 149, 239);
}
.categoria-item img{
 background-color:rgb(193, 149, 239);
     object-fit: cover;
     max-width:20rem;
     max-height: 10rem;
     display: flex;
     justify-content: center;
     align-items: center
}
.search{
    
    margin-top: 1rem;
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

}
 input{
    background-color:whitesmoke;


 width: 30rem;
 height:2rem;
 border-radius: 0px 10px 10px 0px;
 border: none;
}
input:focus, input:focus {
box-shadow: 0 0 0 0;
outline: 0;
}
.icon-pesquisa{
     background-color:whitesmoke;
width: 35px;
height: 32px;
position: relative;
display: flex;
justify-content:center;
align-items: center;
 border-radius: 10px 0px 0px 10px;
}
.fa-magnifying-glass{
color: red;
background-color: transparent;
font-size:20px;
}
</style>