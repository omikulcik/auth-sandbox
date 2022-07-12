<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
/* import createAuthRefreshInterceptor from "axios-auth-refresh"; */

axios.defaults.baseURL = "https://test.analyticalplatform.com/";

/* const refreshAuthLogic = (failedRequest) =>
  axios
    .post("api/token/refresh/", {
      refresh: localStorage.getItem("refresh"),
    })
    .then((tokenRefreshRes) => {
      const access = tokenRefreshRes.data.access;
      console.log(access, failedRequest);
      localStorage.setItem("access", access);
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + access;
      return Promise.resolve();
    });
function getAccessToken() {
  return localStorage.getItem("access");
}

// Use interceptor to inject the token to requests
axios.interceptors.request.use((request) => {
  if (request.url !== "api/token/refresh/") {
    request.headers["Authorization"] = `Bearer ${getAccessToken()}`;
  }
  return request;
});

// Instantiate the interceptor
createAuthRefreshInterceptor(axios, refreshAuthLogic, {
  statusCodes: [401, 403],
}); */

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
