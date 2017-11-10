<template>
  <div class="app">
    <app-header sayHiToTheWorld="Hola mundo..." />
    <grid-module leftSide="Data on the left side" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import GridModule from '~/components/GridModule.vue'

export default {
  components: {
    AppHeader,
    GridModule
  }
}
</script>
