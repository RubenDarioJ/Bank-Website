<script setup lang="ts">
</script>
<template>
<h1 class="display-2 text-center">
  ¡Selecciona la tarjeta que quieras!
</h1>
<div class="card-group row row-cols-1 row-cols-md-2 g-4 grid-center">
  <div class="col" style="width: 18rem;">
    <img src="@/assets/visa1.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="col" style="width: 18rem;">
    <img src="@/assets/visa2.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="col" style="width: 18rem;">
    <img src="@/assets/visa3.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="col" style="width: 18rem;">
    <img src="@/assets/visa4.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
</template>
<style>
.grid-center {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  grid-gap: 20px;
}

@media (max-width: 1250px) {
  .grid-center {
    grid-template-columns: 1fr;
    justify-content: center;
  }
}
</style>