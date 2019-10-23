<template>
  <div id="q-app">
    <transition
      name="fade"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="300"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
