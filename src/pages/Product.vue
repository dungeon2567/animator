<template>
  <q-page style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;" class="background">
    <img :src="url" class="product-img" @click="back" data-teste="diego" :data-flip-id="url" />

    <h1 style="position: absolute; right: 50px; top: 50px; opacity: 0;" class="fade-in">Nome do Produto</h1>
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
  mounted(){

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

.fade-in {
  animation-delay: 300ms;
  animation-duration: 300ms;
  animation-name: fadein;
  animation-fill-mode: both;
}


@keyframes fadein {
    from { opacity: 0; transform: translateY(-30px) }
    to   { opacity: 1; transform: translateY(0px)}
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
  left: 300px;
  top: 300px;
}

</style>
