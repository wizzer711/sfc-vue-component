<script lang="ts">
import Vue from 'vue';
import Features from '@/features.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Features
  }
});
</script>

<template>
  <div id="app">
    <features />
  </div>
</template>
