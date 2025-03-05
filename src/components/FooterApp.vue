<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="lists-group">
          <div class="left-group">
            <ul class="lists">
              <h6 class="lists-title">offer</h6>
              <li class="list">Public offer</li>
              <li class="list">Privacy policy</li>
              <li class="list">Terms of use</li>
              <li class="list">Cookie policy</li>
            </ul>
            <ul class="lists">
              <h6 class="lists-title">clients</h6>
              <li class="list">Reviews</li>
              <li class="list">About us</li>
              <li class="list">Contact</li>
            </ul>
          </div>
          <dl class="lists">
            <h6 class="lists-title">contacts</h6>
            <div class="dl__group">
              <dt class="list__dt">phone</dt>
              <dd class="list__dd">+20 10 2123 4800</dd>
            </div>
            <div class="dl__group">
              <dt class="list__dt">email</dt>
              <dd class="list__dd">info@hurghada.com</dd>
            </div>
            <div class="dl__group">
              <dt class="list__dt">Social media</dt>
              <dd class="list__dd social">
                <img src="@/assets/images/icons/social/Instagram.svg" alt="Instagram" />
                <img src="@/assets/images/icons/social/Twitter.svg" alt="Twitter" />
                <img src="@/assets/images/icons/social/Youtube.svg" alt="Youtube" />
                <img src="@/assets/images/icons/social/Facebook.svg" alt="Facebook" />
              </dd>
            </div>
          </dl>
        </div>

        <div class="footer-info">
          <p>All Rights Reserved. © 2023 Hurghada.com</p>
          <p>Designed by Pazych Sergey</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import '@/assets/style/main';
.footer {
  background-color: var(--headerFooter);
}
.footer-info {
  padding: 11px 0;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lists {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.list {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.list__dt {
  margin-bottom: 8px;
  font-size: 12px;
  color: #fff;
}
.list__dd {
  color: #1a1a1a;
  font-size: 14px;
}
.social {
  display: flex;
  gap: 10px;
}
.social img {
  cursor: pointer;
}
.lists-group {
  padding: 40px 150px 48px;
  display: flex;
  justify-content: space-between;
}
.left-group {
  font-size: 14px;
  display: flex;
  gap: 100px;
}
.lists-title {
  font-family: 'Oswald', sans-serif;
  cursor: context-menu;
  color: #9e9e9e;
  margin-bottom: 8px;
  font-size: 28px;
}
@media (max-width: 1124px) {
  .footer {
    padding: 0;
  }
  .lists-group {
    padding: 40px 20px 48px;
  }
}

@media (max-width: 640px) {
  .left-group {
    gap: 20px;
  }

  .lists-group {
    padding: 20px 0 28px;
  }
}
@media (max-width: 480px) {
  .list {
    font-size: 12px;
  }
  .lists-title {
    font-size: 20px;
  }
  .lists-group {
    gap: 10px;
  }
  .footer-info {
    font-size: 8px;
  }
}
</style>
