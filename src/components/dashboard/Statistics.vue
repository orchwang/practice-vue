<template>
  <div class="hello">
    <h1>Statistics</h1>
    <p>본 앱은 Orc Hwang 이 Vue 를 학습하기 위한 앱 입니다.</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Statistics extends Vue {
  @Prop() private msg!: string;
}
</script>
