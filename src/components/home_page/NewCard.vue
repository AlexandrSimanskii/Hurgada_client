<template>
  <div class="card" :style="{ backgroundImage: `url(${props.image})` }">
    <div ref="glass" class="glass">
      <p ref="title" class="title"><slot name="title"></slot></p>
      <p ref="subtitle" class="subtitle"><slot name="subtitle"></slot></p>
      <div class="time">
        <img src="/images/icons/calendar.svg" alt="" />
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const glass = ref<HTMLElement | null>(null)

const props = defineProps<{
  image: string
}>()

onMounted(() => {
  if (subtitle.value && title.value && glass.value) {
    const width = glass.value?.clientWidth-40 

    subtitle.value.style.width = `${width}px`
    title.value.style.width = `${width}px`
  }
})
</script>

<style scoped>
.card {
  display: flex;
  align-items: end;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
}
.glass {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.title {
  width: 10px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time {
  color: #c2c2c2;
  font-weight: 500;
  display: flex;
  gap: 10px;
}
.subtitle {
  overflow: hidden;
  width: 10px;
  color: #ededed;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;

  text-overflow: ellipsis;
}
.time img {
  width: 24px;
  height: 24px;
}
</style>
