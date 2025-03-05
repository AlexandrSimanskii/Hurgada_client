<template>
  <div ref="paginator" class="custom-paginator" v-if="localTotalCount > limit">
    <my-button class="icon" :image="updateIcon" @click="onShowMore"> Show more </my-button>

    <Paginator
      :rows="limit"
      :totalRecords="props.totalCount"
      :first="first"
       :pageLinkSize="pageLinkSize"
      :template="'PrevPageLink PageLinks  CustomNextContent NextPageLink   '"
      @page="onPageChange"
    >
    </Paginator>
  </div>
</template>

<script setup lang="ts">
import updateIcon from '@/assets/images/icons/update.svg'
import { ref, computed, watchEffect, onMounted,onUnmounted } from 'vue'
import Paginator from 'primevue/paginator'
import MyButton from './UI/MyButton.vue'

const props = defineProps<{
  limit: number
  totalCount: number
}>()

const paginator = ref(null)
const emit = defineEmits(['page'])

const { limit, totalCount } = props
const localTotalCount = ref(totalCount)

watchEffect(() => {
  localTotalCount.value = props.totalCount
})

const first = ref(0)
const currentPage = computed(() => Math.ceil(first.value / limit) + 1)

const onShowMore = () => {
  const nextPage = currentPage.value + 1
  if (nextPage <= Math.ceil(localTotalCount.value / limit)) {
    first.value += limit
    emit('page', first.value)
  }
}



const pageLinkSize = ref(window.innerWidth < 600 ? 3 : 6);

const updatePageLinkSize = () => {
  pageLinkSize.value = window.innerWidth < 600 ? 3 : 6;
};

onMounted(() => {
  window.addEventListener("resize", updatePageLinkSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePageLinkSize);
});


const onPageChange = (event: { first: number }) => {
  first.value = event.first
  emit('page', first.value)
}
</script>

<style>
@import '@/assets/style/variable.css';
.custom-paginator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
}
.custom-paginator .p-paginator-page {
  -webkit-box-shadow: 0px 0px 10px -3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 10px -3px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 10px -3px rgba(34, 60, 80, 0.2);
  /* box-shadow: 1px 1px 3px var(--headerFooter); */
}

.custom-paginator .p-paginator-prev-icon,
.custom-paginator .p-paginator-next-icon {
  color: var(--primaryMain);
}

.p-paginator-prev-icon:hover,
.p-paginator-next-icon:hover {
  transform: scale(1.4);
  transition: 0.5s;
}

.custom-paginator .p-paginator-prev,
.custom-paginator .p-paginator-next {
  background-color: #f5f5f5;
}
.custom-paginator .icon {
  padding: 20px 106px;
}
@media (max-width: 640px) {
  .custom-paginator .icon {
    padding: 10px;
  }
}
</style>
