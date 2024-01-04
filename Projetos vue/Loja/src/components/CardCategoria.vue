<template>
  <section class="container">
    <div class="card-img">
        <img src="https://i.pinimg.com/originals/55/a9/4e/55a94e824b3cebe89496ad64dd2b2f01.png" alt="Pizza">
        <p>Salgados</p>
    </div>

      <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>
      <div class="card-img">
        <img src="https://grupoacaitiaaugusta.com.br/wp-content/themes/tiaaugusta-tema/images/acai.png" alt="Pizza">
         <p>Açai</p>
    </div>
      <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
        <p>Doces</p>
    </div>
     <div class="card-img">
        <img src="https://curitibadoces.com.br/wp-content/uploads/2020/07/Curitiba-Doces-Variados-01.png" alt="Pizza">
         <p>Pizaa</p>
    </div>
     <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>
     <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>
     <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>
     <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>
     <div class="card-img">
        <img src="https://product-images.weber.com/accessory-images/17883M1.png?w=800&h=800&auto=compress%2Cformat" alt="Pizza">
         <p>Pizaa</p>
    </div>

  </section>


</template>

<script>

</script>

<style scoped>
.container {
  margin-top: 8rem;
 
display: flex;
flex-wrap: nowrap;
overflow: auto;
  white-space: nowrap;
  background-color: whitesmoke;
  position: fixed;
  z-index: 1;
  

}
.container::-webkit-scrollbar {
display: none;
  }
.card-img{
  position: relative;
 background-color:white;
flex: 0 0 auto;
cursor: pointer;
        margin: 10px;
    border: 1px solid rgba(227, 225, 225, 0.606);
       width:150px ;
         height:130px ;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius:20px;
         overflow:hidden;

    
}

img{
    background-color:white;
    border-radius: 50%px;
 margin:15px;
   
       
 max-width:100px;
 max-height: 140px;
      
          object-fit: cover;
          transition: transform 0.2s linear;
      
}
.card-img p{
  position: absolute;
 background-color: transparent;
 font-weight: 600;
bottom: 0;
  z-index: 5;
}
img:hover{
    transform: scale(1.05);
}
 @media (max-width:500px) {
  .container{
  margin-top: 6rem;
  }
    .card-img{
     
        margin: 5px;
    border: 1px solid rgba(227, 225, 225, 0.606);
       width:110px ;
         height:90px ;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius:20px;
}
img{
 border-radius: 3px;
 margin:10px;
 max-width:90px;
 max-height: 120px;
          object-fit: cover;
          transition: transform 0.2s linear;
      
}

    }
</style>