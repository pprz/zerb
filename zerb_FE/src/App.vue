<template>
  <div id="app">
      <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/containers/dashboard'
export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #eee;
}
</style>
