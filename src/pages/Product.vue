<template>
  <q-page style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
    <img :src="url" class="fit" @click="back" :data-flip-id="url" />
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
      this.$router.push({name: "main"})
    }
  }
};
</script>
