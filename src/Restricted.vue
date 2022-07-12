<template>
  <div>
    <h1>restricted area</h1>
    <h2 v-if="user">Welcome {{ user.first_name }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "restricted-area",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    fetchUser() {
      axios.get("/rest-auth/user/").then((res) => (this.user = res.data));
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>

<style>
</style>