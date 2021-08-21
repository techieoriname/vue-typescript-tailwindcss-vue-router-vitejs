<script setup lang="ts">
import {useRouter} from "vue-router";
import { useTitle } from '@vueuse/core'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import store from "../store";

const router = useRouter()
useTitle(`Home - ${store.state.title}`)
</script>

<template>
  <main class="h-screen flex items-center px-6 lg:px-32 text-green-800 relative">
    <Header/>
    <section class="w-full md:w-9/12 xl:w-8/12 flex items-center justify-center mx-auto">
      <div>
        <img src="../assets/logo.png" alt="Vue">
        <h1 class="text-3xl lg:text-5xl font-bold text-black px-3">
          Vue + Typescript + Tailwind + Vue Router + Vite
        </h1>
        <router-link to="/login">
          <button type="submit" class="ml-4 mt-4 button disabled:bg-green-500"> Login</button>
        </router-link>
      </div>
    </section>
    <Footer/>
  </main>
</template>

