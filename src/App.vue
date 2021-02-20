<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <figure class="bg-gray-100 rounded-xl p-8">
    <img class="w-32 h-32" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg">
          “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
          customize, adapts to any design, and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
          Sarah Dayan
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
