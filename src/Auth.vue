<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="password" />
    <button @click="handleLogin">Log in</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "auth",
  data() {
    return {
      name: "omikulcik@seznam.cz",
      password: "Karel123",
    };
  },
  methods: {
    handleLogin() {
      axios
        .post("api/token/", {
          username: this.name,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          /*           localStorage.setItem("refresh", res.data.refresh);
          localStorage.setItem("access", res.data.access);
          axios.defaults.headers = {
            Authorization: `Bearer ${res.data.access}`,
          };
          this.$router.push("/restricted"); */
        });
    },
  },
  mounted() {
    axios.defaults.headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NTQ2NjYzLCJpYXQiOjE2NTc1NDYzNjMsImp0aSI6IjE2ZWUyZjdmMzRiNjRhYTg5N2E0MDcwNDJiZTEzZTVhIiwidXNlcl9pZCI6NjF9.47fH7jBJZU9Hczx0DTdJV08ORwFeOh5rcbkcBdz7mgU",
    };
    axios.get("/api/sp/Report/1272");
    axios.get("/rest-auth/user/");
  },
};
</script>

<style>
</style>