<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useDarkMode } from "../composables/useDarkMode";

const route = useRoute();
const { isDark, toggle: toggleDark } = useDarkMode();
const isScrolled = ref(false);
const isMobileOpen = ref(false);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Plans", to: "/plans" },
  { name: "Coverage", to: "/coverage" },
  { name: "Support", to: "/support" },
  { name: "Reviews", to: "/reviews" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const closeMobile = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 dark:shadow-black/20'
        : 'bg-transparent',
    ]"
  >
    <div class="padding flex justify-between items-center h-16 md:h-20">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2.5 group" @click="closeMobile">
        <div
          class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" fill="white" />
            <path
              d="M10 2v3M10 15v3M2 10h3M15 10h3"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <span class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tail<span class="text-indigo-600 dark:text-indigo-400">Net</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-1">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="
            route.path === link.to
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
          "
          >{{ link.name }}</router-link
        >
      </div>

      <!-- Desktop CTA + Dark Toggle -->
      <div class="hidden lg:flex items-center gap-3">
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDark"
          class="p-2.5 rounded-xl transition-all duration-200 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg
            v-else
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <router-link to="/plans" class="btn-primary text-sm !px-6 !py-2.5">
          Get Started
        </router-link>
      </div>

      <!-- Mobile: Dark Toggle + Hamburger -->
      <div class="lg:hidden flex items-center gap-1">
        <button
          @click="toggleDark"
          class="p-2 rounded-xl transition-colors text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="isDark"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg
            v-else
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
        <button
          @click="isMobileOpen = !isMobileOpen"
          class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMobileOpen"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen"
        class="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-xl"
      >
        <div class="padding py-4 flex flex-col gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="closeMobile"
            class="px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
            :class="
              route.path === link.to
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
            "
            >{{ link.name }}</router-link
          >
          <router-link
            to="/plans"
            @click="closeMobile"
            class="btn-primary text-center mt-3"
          >
            Get Started
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>
