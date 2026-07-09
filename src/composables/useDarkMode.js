import { ref, watch } from "vue";

const isDark = ref(false);

function init() {
  const saved = localStorage.getItem("tailnet-theme");
  if (saved === "dark") {
    isDark.value = true;
  } else if (saved === "light") {
    isDark.value = false;
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme();
}

function applyTheme() {
  document.documentElement.classList.toggle("dark", isDark.value);
}

function toggle() {
  isDark.value = !isDark.value;
}

watch(isDark, (val) => {
  localStorage.setItem("tailnet-theme", val ? "dark" : "light");
  applyTheme();
});

init();

export function useDarkMode() {
  return { isDark, toggle };
}
