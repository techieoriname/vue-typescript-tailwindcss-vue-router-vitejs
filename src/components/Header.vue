<script setup lang="ts">
  const features = ["Tailwind CSS", "Vue Router", "Global State Management", "Vite - Build & Deploy"]
</script>

<template>
  <header class=" flex w-full absolute left-0 top-0 pb-6 lg:pt-16 px-4">
    <div class="flex justify-between">
      <div>
        <h1 class="text-3xl font-bold w-10 mx-auto"><img src="../assets/logo.png" alt="Vue"></h1>
        <span>Design is everything...</span>
      </div>

      <div>
        <ul class="grid grid-cols-12 gap-4">
          <li v-for="(f, i) in features" :key="i" class="ml-24 col-span-6 lg:col-span-3">
              <div class="flex items-center justify-end cursor-pointer">
                <div class="w-10 border-b border-solid border-white"></div>
                <h1 class="ml-3 text-3xl font-bold">{{ ++i }}</h1>
              </div>
              <div class="text-right">{{ f }}</div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
