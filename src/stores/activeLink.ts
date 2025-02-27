import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useActiveLink = defineStore('activeLink', () => {
  const active = ref<string>(localStorage.getItem('header') || '');

  function setActive(name: string) {
    active.value = name;
    localStorage.setItem('header', name);
  }

  return { active, setActive };
});