<script setup lang="ts">
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Banco</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 center">
        <li class="nav-item">
          <RouterLink :to="`/`">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </RouterLink>
        </li>
        <li class="nav-item">
        <RouterLink :to="`/balance`">
          <a class="nav-link">Consultar</a>
        </RouterLink>
        </li>
        <li class="nav-item">
        <RouterLink :to="`/help`">
          <a class="nav-link">Ayuda</a>
        </RouterLink>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver Mas
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</template>
<style scoped>
@media (max-width: 1000px) {
  .center {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  }
}

</style>