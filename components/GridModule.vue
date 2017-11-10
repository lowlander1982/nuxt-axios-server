<template>
  <section class="container-fluid module-name">
    <div class="row">
      <div class="col-xs-12 col-sm-2 col-md-4 col-lg-6">
        This is a property: {{ this.leftSide }}
      </div>
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 module-name_right">
        This is data: {{ this.rightSide }}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        Your current balance is random: {{ this.$store.state.billingInfo.balance.check }}
      </div>
      <div class="col-xs-12">
        <button type="button" v-on:click="randomize">Randomize Checks</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['leftSide'],
  data () {
    return {
      rightSide: 'Data of the module'
    }
  },
  methods: {
    randomize () {
      this.$store.dispatch('fetchBalance')
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/utils/variables';

  .module-name {
    &_right {
      color: $color-white;
      background-color: $color-black;
    }
  }
</style>
