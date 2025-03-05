<template>
  <div class="reviews">
    <h3 class="reviews-title">{{ props.title }}</h3>
    <p class="overal">overall rating:</p>
    <div class="rating-group">
      <my-rating :rating="props.rating" class="rating"></my-rating>
      <p>({{ reviewsData.length }} reviews)</p>
    </div>

    <div class="review" v-for="rev of reviewsData.slice(0, 5)">
      <div class="top-content">
        <div class="group">
          <p class="name">{{ rev.name }}</p>
          <my-rating :rating="rev.like"></my-rating>
        </div>

        <div class="likes">
          <img src="/src/assets/images/icons/like.svg" alt="" />
          <p>({{ rev.like }})</p>
        </div>
      </div>
      <p class="data">{{ rev.data }}</p>
      <p class="text">
        {{ rev.text }}
      </p>
    </div>
    <div class="buttons">
      <my-button class="but" :image="update">Show more reviews</my-button>
      <my-button class="buttonColored" :image="signIn">Add review</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import update from '@/assets/images/icons/update.svg'
import signIn from '@/assets/images/icons/SignIn.svg'
import MyRating from '@/components/MyRating.vue'
import reviews from '@/constants/reviews'
import MyButton from '../UI/MyButton.vue'
import { computed } from 'vue'

interface Review {
  name: string
  data: string
  text: string
  like: number
}

const props = defineProps<{
  reviews: Review[]
  title: string
  rating: number
}>()

const reviewsData = computed(() => {
  const data = reviews.concat(props.reviews)

  return data
})
</script>

<style scoped>
@import '@/assets/style/variable';
.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.reviews-title {
  margin-bottom: 40px;
}
.review {
  width: 100%;
  border-radius: 4pxs;
  padding: 20px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
.name {
  margin-bottom: 10px;
}
.overal {
  text-transform: uppercase;
  color: var(--headerFooter);
}
.likes {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  height: 16px;
  color: var(--primaryMain);
}
.rating-group {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}
.top-content {
  display: flex;
  justify-content: space-between;
}
.data {
  color: var(--headerFooter);
  margin-bottom: 20px;
}
.buttons {
  display: flex;
  gap: 10px;
}
.but {
  background-color: #e9e9e966;
}

@media (max-width: 640px) {
  .buttons {
    flex-direction: column;
  }
}
</style>
