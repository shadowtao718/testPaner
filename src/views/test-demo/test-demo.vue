<template>
  <div>
    {{ msg }}
    <a-button @click="btn()">跳转到首页</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: this.$route.query.name,
    };
  },
  methods: {
    btn() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
