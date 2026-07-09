<script setup>
import { ref } from "vue";

const features = [
  {
    title: "Lightning Fast Speeds",
    desc: "Stream and game in 4K with up to 1Gbps symmetrical fiber speeds.",
    icon: "speed",
  },
  {
    title: "Affordable Plans",
    desc: "Flexible plans for every budget. No hidden fees, ever.",
    icon: "price",
  },
  {
    title: "24/7 Local Support",
    desc: "Dedicated local team ready to help you day or night.",
    icon: "support",
  },
];

const steps = [
  {
    step: 1,
    title: "Contact Us",
    desc: "Enter your address and we'll recommend the best plan for your home or business.",
    cta: "Get in Touch",
  },
  {
    step: 2,
    title: "Schedule Install",
    desc: "Pick a date and our expert technicians will get you online with minimal disruption.",
    cta: "Book Today",
  },
  {
    step: 3,
    title: "Go Online",
    desc: "Start using reliable, ultra-fast internet instantly. Stream, work, and play lag-free.",
    cta: "View Features",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "1Gbps", label: "Max Speed" },
  { value: "50K+", label: "Happy Users" },
  { value: "24/7", label: "Support" },
];

const activeFeature = ref(0);
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30"
      ></div>
    </div>

    <div class="padding w-full pt-28 pb-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="lg:w-1/2 w-full">
          <div
            class="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-sm text-indigo-600 font-medium mb-6"
          >
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Now available in your area
          </div>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Fast, Reliable
            <span
              class="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
              >Internet</span
            >
            for Everyone
          </h1>
          <p class="text-lg text-gray-500 mt-6 max-w-lg leading-relaxed">
            Experience lightning-fast fiber and wireless internet with the best
            coverage in your city. Stay connected without interruption.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 mt-8">
            <router-link to="/plans" class="btn-primary text-center">
              Check Availability
            </router-link>
            <router-link to="/coverage" class="btn-outline text-center">
              Learn More
            </router-link>
          </div>

          <!-- Stats row -->
          <div
            class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200"
          >
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
              <p class="text-sm text-gray-400 mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="lg:w-1/2 w-full flex justify-center">
          <div class="relative">
            <!-- Main circle -->
            <div
              class="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center shadow-2xl shadow-indigo-500/30"
            >
              <div
                class="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              >
                <div
                  class="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white flex items-center justify-center shadow-inner"
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    class="text-indigo-600"
                  >
                    <!-- WiFi icon -->
                    <path
                      d="M32 48a4 4 0 100-8 4 4 0 000 8z"
                      fill="currentColor"
                    />
                    <path
                      d="M22 38a14 14 0 0120 0"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M14 30a24 24 0 0136 0"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M6 22a34 34 0 0152 0"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Floating badges -->
            <div
              class="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div
                class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  stroke-width="2.5"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">1Gbps</p>
                <p class="text-xs text-gray-400">Download</p>
              </div>
            </div>
            <div
              class="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div
                class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366f1"
                  stroke-width="2.5"
                  stroke-linecap="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">5ms</p>
                <p class="text-xs text-gray-400">Latency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="padding py-24 lg:py-32">
    <div class="max-w-3xl">
      <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
        Why TailNet
      </p>
      <h2 class="section-heading">Why Choose Us?</h2>
      <p class="section-desc">
        Modern infrastructure, affordable plans, and industry-leading support
        for homes and businesses.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
      <div
        v-for="(feature, i) in features"
        :key="i"
        class="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
        @mouseenter="activeFeature = i"
      >
        <div
          class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
          :class="
            activeFeature === i
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-indigo-50 text-indigo-600'
          "
        >
          <!-- Speed icon -->
          <svg
            v-if="feature.icon === 'speed'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <!-- Price icon -->
          <svg
            v-else-if="feature.icon === 'price'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
          <!-- Support icon -->
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
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900">{{ feature.title }}</h3>
        <p class="text-gray-500 mt-2 leading-relaxed">{{ feature.desc }}</p>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="padding py-24 lg:py-32 bg-gray-900 text-white">
    <div class="max-w-3xl">
      <p class="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
        Getting Started
      </p>
      <h2 class="section-heading text-white">Getting Connected is Easy</h2>
      <p class="text-gray-400 text-lg mt-4 max-w-2xl">
        From sign-up to streaming, get online in just 3 simple steps.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mt-14">
      <div
        v-for="step in steps"
        :key="step.step"
        class="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
      >
        <div
          class="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-lg font-bold mb-6 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-shadow duration-300"
        >
          {{ step.step }}
        </div>
        <h3 class="text-xl font-bold">{{ step.title }}</h3>
        <p class="text-gray-400 mt-3 leading-relaxed">{{ step.desc }}</p>
        <button
          class="mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
        >
          {{ step.cta }}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            class="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Supercharge Section -->
  <section class="padding py-24 lg:py-32">
    <div class="flex flex-col lg:flex-row items-center gap-16">
      <div class="lg:w-1/2 w-full">
        <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
          More Than Internet
        </p>
        <h2 class="section-heading">
          Supercharge Your Online Life
        </h2>
        <div class="mt-10 space-y-6">
          <div
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">Unlimited Data</h3>
            </div>
            <p class="text-gray-500 leading-relaxed">
              Stream, game, and work from home without worrying about limits or
              throttling.
            </p>
          </div>
          <div
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">Fast Installation</h3>
            </div>
            <p class="text-gray-500 leading-relaxed">
              Get connected in as little as 24 hours by our certified local
              engineers.
            </p>
          </div>
          <div
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900">No Contracts</h3>
            </div>
            <p class="text-gray-500 leading-relaxed">
              Month-to-month flexibility. Stay because you love the service, not
              because you're locked in.
            </p>
          </div>
        </div>
      </div>
      <!-- Right illustration -->
      <div class="lg:w-1/2 w-full flex justify-center">
        <div class="relative w-full max-w-md">
          <div
            class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-10 flex items-center justify-center aspect-square"
          >
            <svg
              viewBox="0 0 200 200"
              fill="none"
              class="w-full max-w-[280px]"
            >
              <!-- Speed meter -->
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#e0e7ff"
                stroke-width="8"
                fill="none"
              />
              <path
                d="M36 140 Q60 40 100 30 Q140 40 164 140"
                stroke="#6366f1"
                stroke-width="8"
                stroke-linecap="round"
                fill="none"
              />
              <circle cx="100" cy="110" r="12" fill="#6366f1" />
              <line
                x1="100"
                y1="110"
                x2="135"
                y2="65"
                stroke="#6366f1"
                stroke-width="4"
                stroke-linecap="round"
              />
              <text
                x="100"
                y="155"
                text-anchor="middle"
                fill="#6366f1"
                font-size="16"
                font-weight="bold"
              >
                1 Gbps
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
