<template>
  <div id='app'>
    <h1>Proyecto vue con Firebase</h1>
    <nav>
      <router-link to='/productos'>
        Productos
      </router-link>
      <router-link to='/crear-orden'>
        Crear Orden
      </router-link>
      <router-link to='/orden'>
        Orden
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

    export default{
      name: 'App'
    }

</script>

<style>
  nav a{
    margin: 0 10 px;
  }
</style>