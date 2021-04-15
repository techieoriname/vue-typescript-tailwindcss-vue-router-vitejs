<template>
  <main class="h-screen flex items-center px-6 lg:px-32 text-green-800 relative">
    <header class="w-full absolute left-0 top-0 p-6 lg:p-32">
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold w-10 mx-auto"><img src="../assets/logo.png" alt="Vue"></h1>
          <span>Design is everything...</span>
        </div>

        <div>
          <ul class="flex">
            <li class="ml-24">
              <a href="">
                <div class="flex items-center justify-end">
                  <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">1</h1>
                </div>
                <div class="text-right">Tailwind CSS</div>
              </a>
            </li>
            <li class="ml-24">
              <a href="">
                <div class="flex items-center justify-end">
                  <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">2</h1>
                </div>
                <div class="text-right">Vue Router</div>
              </a>
            </li>
            <li class="ml-24">
              <a href="">
                <div class="flex items-center justify-end">
                  <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">3</h1>
                </div>
                <div class="text-right">Global State Management</div>
              </a>
            </li>

            <li class="ml-24">
              <a href="">
                <div class="flex items-center justify-end">
                  <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">4</h1>
                </div>
                <div class="text-right">Vite - Build & Deploy</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="w-full md:w-9/12 xl:w-8/12 flex items-center justify-center mx-auto">
      <img src="../assets/logo.png" alt="Vue">
            <h1 class="text-3xl lg:text-5xl font-bold text-black px-3">
              Vue + Typescript + Tailwind + Vue Router + Vite
            </h1>
    </section>
    <footer class="absolute right-0 bottom-0 p-6 lg:p-32">
      <p class="font-bold mb-1">Yours Truly</p>
      <p>T E C H I E O R I N A M E</p>
    </footer>
  </main>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "Home",
})
</script>
