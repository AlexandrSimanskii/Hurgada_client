<template>
  <p class="category"><slot></slot></p>
</template>

<script setup lang="ts">
defineOptions({
  name: 'card-category'
})</script>

<style scoped>
.category {
  
  color: var(--primaryMain);
  font-size: 20px;
  position: absolute;
  border-radius: 10px;
  padding: 7px 32px;
  background-color: var(--lightText);

}
</style>
