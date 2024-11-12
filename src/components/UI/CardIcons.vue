<template>
  <div class="icons">
    <div class="icon"><img src="/src/assets/images/icons/Heart.png" /></div>
    <div class="icon"><img src="/src/assets/images/icons/share.png" /></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'card-icons'
})
</script>

<style scoped>
.icons {
  padding: 20px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.icon {
  cursor: pointer;
  border: 1.5px solid var(--lightText);
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1px);
  transition: 500ms;
}
.icon:hover {
  transform: scale(110%);
  transition: 500ms;
}
</style>
