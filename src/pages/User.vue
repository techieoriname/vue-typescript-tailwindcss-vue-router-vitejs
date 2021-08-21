<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue";
import store from "../store";
import {useTitle} from "@vueuse/core";

const router = useRouter()
useTitle(`User Logged In - ${store.state.title}`)

const loading = ref(false)
const buttonText = ref("Logout")

async function Logout() {
  try {
    loading.value = !loading.value
    buttonText.value = "Logging Out..."
    setTimeout(async () => {
      store.UPDATE_LOGGED_IN(false)
      loading.value = !loading.value
      await router.replace({ name: 'Login' })
    }, 3000)
  } catch (e) {
    loading.value = !loading.value
  }
}
</script>

<template>
  <main class="h-screen flex items-center px-6 lg:px-32 text-green-800 relative">
    <Header/>
    <section class="w-full md:w-9/12 xl:w-8/12 flex items-center justify-center mx-auto">
      <div class="space-y-3">
        <h3 class="text-green-700 text-3xl font-semibold">You are currently Logged in</h3>
        <p class="text-black float-right">
          <button @click="Logout" type="submit" class="button disabled:bg-green-500 disabled:cursor-not-allowed" :disabled="loading"><i v-if="loading" class="fas fa-spinner animate-spin-slow px-1"></i>
            {{ buttonText }}</button>
        </p>
      </div>
    </section>
    <Footer/>
  </main>
</template>
