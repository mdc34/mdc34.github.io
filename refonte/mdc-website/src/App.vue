<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

</script>


<template>
  <div class="h-screen flex flex-col justify-between">
    <header>
      <NavBar />
    </header>

    <main class="mb-auto">
      <RouterView />
    </main>
 

    <footer>
      <Footer />
    </footer>
  </div>
</template>