<template>
  <div>
    <p>{{ content }}</p>
    <a-button @click="button">路由传参</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 100,
    };
  },
  methods: {
    button() {
      this.$router.push({
        path: "./testDemo",
        query: {
          name: "张",
          age: 18,
        },
      });
    },
  },
};
</script>

<style></style>
