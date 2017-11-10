<template>
  <header>
    <h1>
      Hello {{ $store.state.user.name }}
    </h1>
    <p>
      So far, the data we have from you is:
      {{ $store.state.user }}
    </p>
    <p>
      But this data is actually a property: {{ this.sayHiToTheWorld }}
    </p>
  </header>
</template>

<script>
export default {
  props: ['sayHiToTheWorld']
}
</script>
