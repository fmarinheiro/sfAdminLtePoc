<template>
  <div class="row">
    {{ hh }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ExampleMain",
  setup (props) {
    var hh  = ref(true)

    hh.value = false

    return {
      hh
    }
  }
});
</script>

<style scoped>
.ttt {
  color: rgb(0, 0, 0) !important;
}
</style>
