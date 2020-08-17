<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "@/scss/main.scss";

</style>
