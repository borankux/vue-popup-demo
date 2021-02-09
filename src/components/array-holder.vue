<template>
  <div>
    <h3>This is the array holder: child component to pass array</h3>
    <pre>
      {{itemList}}
    </pre>
  </div>
</template>

<script>
export default {
  name: "array-holder",
  props: {
    itemList: {
      type: Array,
      default:[]
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
