<template>

<section class="container">
    <div class="container-produto">
        <div class="img">
          <img src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/d89b2bbd-738b-4272-a610-d11a2d4c5a28/202203180003_2J8I_i.jpg" alt="Produto">
        </div>
        <span class="card-item">
            <p class="titulo">Titulo lanche x tudo</p>
            <p class="descricao">Lanche de pao bricohe selado na manteiga teste te sasasdsadsadsa  sadsad sadsad </p>
            <div class="card-item-btn">

                <p class="preco">Preço</p>
                <button type="submit" class="adicionar">Adicionar</button>
            </div>
        </span>
    </div>
      

</section>
    

</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display:flex;
    flex-wrap: wrap;

   
}
.container-produto{
    cursor: pointer;
    width: 500px;
    height: 200px;
    display: flex;
    flex-basis: auto;
    justify-content: space-between;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 5px;
    position:relative;
    margin: 1rem;
}
.container-produto:hover{
    border: 1px solid rgb(202, 202, 202);

}
img{
    border-radius: 3px;
 margin:15px;
         width:200px ;
         height:150px ;
          object-fit: cover;
          transition: transform 0.2s linear;
      
}
img:hover{
    transform: scale(1.05);
}
.card-item{
    margin: 15px;
   
}
.card-item-btn{
    display: flex;
    justify-content: space-between;
}
.preco, .adicionar{
margin-top: 4rem;

}
.titulo{
    font-size:15px;
    font-weight: 400;
   
}
.descricao{
    font-size:12px;

     
     
}
.adicionar{
    width:80px;
    height: 25px;
    border: 1px solid rgb(255, 221, 0);
    border-radius:5px;
    font-size:12px;
    font-weight: 500;
    color:rgb(255, 221, 0) ;
}
.adicionar:hover{
    background-color:rgba(251, 247, 213, 0.79) ;
}
 @media (max-width:500px) {
.container-produto{
    width: 350px;
    height: 130px;
     margin:0.5rem;
     font-size: 12px;
    
}
.titulo{
    font-size:14px;
    font-weight: 400;
}
.descricao{
    font-size:11px;
    margin-bottom:15px;
}
img{
       width:100px ;
         height:90px ;
          margin:10px;
}
.preco, .adicionar{
margin-top: 0px;

}
   
    
}
    

</style>