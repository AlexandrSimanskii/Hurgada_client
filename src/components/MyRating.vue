<template>
  <div class="custom-rating">
    <Rating v-model="value" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Rating from 'primevue/rating'

const props = defineProps<{ rating: number }>()

const value = ref(props.rating || 5)
</script>

<style>
@import '@/assets/style/variable';

.custom-rating .p-disabled,
.p-component:disabled {
  opacity: 1;
}

.custom-rating .p-rating-icon.p-icon {
  color: #FFE350;
}
</style>
