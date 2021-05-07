<template>
    <router-link to="/" class="mx-2">Home</router-link
    ><router-link to="/about" class="mx-2">About</router-link>
    <!-- #region -->
    <router-view></router-view>
    <!-- #endregion -->
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
