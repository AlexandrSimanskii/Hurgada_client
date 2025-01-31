<template>
  <section class="top-section">
    <div class="welcome">
      <img class="welcome__content" src="/src/assets/images/image/title.svg" alt="" />
      <div class="play"></div>
    </div>
    <aside class="aside">
      <ul class="aside__list">
        <li><img src="/src/assets/images/icons/Facebook_white.png" alt="Facebook" /></li>
        <li><img src="/src/assets/images/icons/Instagram_white.png" alt="Instagram" /></li>
        <li><img src="/src/assets/images/icons/Twitter_white.png" alt="Twitter" /></li>
        <li><img src="/src/assets/images/icons/Youtube_white.png" alt="Youtube" /></li>
      </ul>
    </aside>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@import '@/assets/style/main.css';
.top-section {
  margin-bottom: 60px;
  position: relative;
  background-image: url(@/assets/images/image/mainImg.jpg);
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome {
  overflow: hidden;
  position: absolute;
  transform: translateY(58%);
  bottom: 50%;
  max-width: 1264px;
  display: flex;
  text-align: center;
  justify-content: start;
  flex-direction: column;
  text-transform: uppercase;
  color: white;
}
.welcome__content {
  transform: translateX(-1300px);
  opacity: 0;
  animation: welcomeAnimate 2s ease-in-out forwards;
  animation-delay: calc((var(--main-animation-duration) + var(--main-animation-delay)) * 0.7);
  margin-bottom: 50px;
}
.aside {
  position: absolute;
  right: -50px;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);

  animation: asideAnimate ease-in-out forwards;
  animation-duration: calc(var(--main-animation-duration) / 2);
  animation-delay: calc((var(--main-animation-duration) + var(--main-animation-delay)) * 0.5);
}
.aside__list {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.play {
  transform: scale(0);
  position: relative;
  align-self: center;
  border: 3px solid white;
  border-radius: 50%;
  background-color: rgba(171, 161, 161, 0.1);
  backdrop-filter: blur(1px);
  width: 106px;
  height: 106px;
  cursor: pointer;

  animation: playAnimate ease-in forwards;
  animation-duration: var(--main-animation-duration);
  animation-delay: calc((var(--main-animation-duration) + var(--main-animation-delay)) * 1);
}
.play::before {
  content: url(@/assets/images/icons/play.png);
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
}

@keyframes welcomeAnimate {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes asideAnimate {
  to {
    right: 10px;
    opacity: 1;
  }
}
@keyframes playAnimate {
  to {
    transform: scale(1);
  }
}
</style>
