<template>
  <q-page style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;" class="background">
    <img :src="url" class="product-img" @click="back" data-teste="diego" :data-flip-id="url" />
  </q-page>
</template>

<script>
export default {
  name: "PageProduct",
  props: {
    url: String
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({ name: "main" });
    }
  }
};
</script>

<style>
.background {
  background-color: rgba(255, 255, 255, 255);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.background-enter-active,
.background-leave-active {
  transition: background-color .5s linear;
}

.background-enter,
.background-leave-to {
  background-color: rgba(255, 255, 255, 0);
}

.product-img {
  z-index: 9999;
  position: absolute;
  width: 1000px !important;
  height: 1000px !important;
  right: 0;
  top: 0;
}
</style>
