<script setup lang="ts">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useTitle} from "@vueuse/core";
import store from "../store";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter()
useTitle(`Login - ${store.state.title}`)

const form = reactive({
  email: 'admin@example.com',
  password: '123456'
})
const errorMsg = ref<string | null>(null)

const loading = ref(false)

async function Login() {
  try {
    loading.value = !loading.value
    if (form.email === 'admin@example.com' && form.password === '123456') {
      setTimeout(async () => {
        store.UPDATE_LOGGED_IN(true)
        await router.push({name: 'User'})
      }, 3000)
    } else {
      errorMsg.value = null
      setTimeout(() => {
        errorMsg.value = "Incorrect login details!"
        loading.value = !loading.value
      }, 3000)
    }
  } catch (e) {
    loading.value = !loading.value
  }
}
</script>
<template>
  <main class="h-screen flex items-center px-6 lg:px-32 text-green-800 relative">
    <Header/>
    <section class="w-full md:w-9/12 xl:w-8/12 flex items-center justify-center mx-auto">
      <form class="w-full md:w-7/12 space-y-4 my-10" @submit.prevent="Login">
        <h3 class="text-2xl text-black font-semibold text-center border-b pb-4">Login</h3>
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-sm text-black font-semibold">Email</label>
          <input id="email" v-model="form.email" class="input__text" type="email" placeholder="Enter your email"
                 autofocus>
        </div>
        <div class="flex flex-col space-y-2">
          <label for="password" class="text-sm text-black font-semibold">Password</label>
          <input id="password" v-model="form.password" class="input__text" type="password"
                 placeholder="Enter your password">
        </div>
        <p v-if="errorMsg" class="text-sm text-red-500 font-normal"><i class="fas fa-exclamation-circle px-1"></i>
          {{ errorMsg }}</p>
        <div class="flex justify-between items-center">
          <router-link :to="{ name: 'Home' }">
            <span class="text-sm">Go Back Home</span>
          </router-link>
          <button type="submit" class="button disabled:bg-green-500 disabled:cursor-not-allowed" :disabled="loading"><i
              v-if="loading" class="fas fa-spinner animate-spin-slow px-1"></i> Login
          </button>
        </div>

      </form>
    </section>
    <Footer/>
  </main>
</template>
