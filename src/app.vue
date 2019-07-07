<template>
  <div>
    <header class="app-header">
      <navbar />
    </header>
    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<script lang='ts'>
import Navbar from "@/components/navbar/navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>


<style src="bulma/css/bulma.css"></style>
