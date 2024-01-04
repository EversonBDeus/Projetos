<template>
    <section>
<div class="header">
    <p>Loja  <strong>Virtual</strong> </p>
    <div class="search">
        <div class="icon-pesquisa">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <input type="text" placeholder="Pesquisar">
    </div>
    <div class="toolbar-item">
        <font-awesome-icon icon="fa-solid fa-location-dot" /><span>Local tal tal tal</span>
        <font-awesome-icon icon="fa-solid fa-circle-user" />
        <font-awesome-icon icon="fa-solid fa-bag-shopping" />
    </div>
</div>
<div class="header-desconto"></div>
<div class="header-bottom">
    <font-awesome-icon icon="fa-solid fa-house" />
     <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  <font-awesome-icon icon="fa-solid fa-receipt" />
       <font-awesome-icon icon="fa-solid fa-circle-user" />
</div>
</section>
</template>

<script>



export default {

}
</script>


<style scoped>

.fa-location-dot, .fa-circle-user,.fa-bag-shopping, .toolbar-item,.header, p, strong,span,.header-bottom{
 background-color: white; 
 cursor: pointer;
}
.icon-pesquisa,.search, input{
 background-color:whitesmoke;
}

.header{
    z-index: 20;
position: fixed;
top: 0;
width: 100%;
height: 5rem;
display: flex;
justify-content:space-around;
align-items: center;
border-bottom: 1px solid rgb(226, 225, 225);    
}

.search, input{
 display:flex;
 width: 20rem;
 height:2rem;
 border-radius: 10px;
 border: none;
}
input:focus, input:focus {
box-shadow: 0 0 0 0;
outline: 0;
}
.icon-pesquisa{
width: 35px;
height: 32px;
position: relative;
display: flex;
justify-content:center;
align-items: center;
border-radius: 10px;
}
.fa-magnifying-glass{
color: red;
background-color: transparent;
font-size:20px;
}
.header-desconto{ 
 position: fixed;
 top: 5rem;
 width:100%;
height:3.5rem;
display:flex;
justify-content:center;
align-items: center;
z-index: 20;
background-color:green;
}
.toolbar-item{
 width:20rem;
height:2rem;
font-size:1.5rem;
display: flex;
justify-content:space-around;
align-items: center; 
}
.toolbar-item span{
    margin-left:-2rem;
    font-size:12px;
    color:red;
}
 @media (max-width:500px) {
    .search, .fa-circle-user,.fa-bag-shopping{
        display: none;
    }
    .fa-location-dot span{
         margin-left: -6rem;
    }
    .header-desconto{
        display:none;
    }
    .header-bottom{
        z-index: 50;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content:space-around;
        align-items: center;
        border-top: 1px solid rgb(226, 225, 225); 
    }
    .fa-magnifying-glass,.fa-house,.fa-receipt,.fa-circle-use{
        color: rgb(0, 0, 0);
        background-color: transparent;
        font-size:20px;
        cursor: pointer;
    }

    

 }




  




</style>