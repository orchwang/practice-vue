<template>
  <div class="dashboard">
    <img alt="Vue logo" src="../assets/logo/orchwang.png">
    <Statistics />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Statistics from '@/components/dashboard/Statistics.vue';

@Component({
  components: {
    Statistics,
  },
})
export default class Home extends Vue {}
</script>
