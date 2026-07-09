<script setup>
import { ref } from "vue";

const billingCycle = ref("monthly");

const plans = [
  {
    name: "Home Basic",
    desc: "Perfect for casual browsing, email, and streaming in HD.",
    price: { monthly: 30, yearly: 25 },
    features: [
      "100 Mbps download/upload",
      "Unlimited data",
      "Free Wi-Fi router",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
    highlighted: false,
  },
  {
    name: "Family Fiber",
    desc: "Fast, stable fiber for streaming, gaming, and smart homes.",
    price: { monthly: 65, yearly: 55 },
    features: [
      "500 Mbps download/upload",
      "Whole-home mesh coverage",
      "24/7 Priority support",
      "Free installation",
      "Parental controls",
    ],
    cta: "Upgrade Now",
    popular: true,
    highlighted: true,
  },
  {
    name: "Business Max",
    desc: "For offices and power users requiring ultra reliability.",
    price: { monthly: 120, yearly: 100 },
    features: [
      "1 Gbps download/upload",
      "Static IP included",
      "Dedicated Support Manager",
      "SLA guarantee 99.9%",
      "Priority installation",
    ],
    cta: "Contact Sales",
    popular: false,
    highlighted: false,
  },
];

const currentPrice = (plan) =>
  billingCycle.value === "monthly" ? plan.price.monthly : plan.price.yearly;
</script>

<template>
  <section class="padding pt-32 pb-24">
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
        Pricing
      </p>
      <h1 class="section-heading">Choose Your Internet Plan</h1>
      <p class="section-desc mx-auto">
        Simple, affordable pricing for every household and business. No
        contracts, no hidden fees.
      </p>

      <!-- Billing Toggle -->
      <div class="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mt-8">
        <button
          @click="billingCycle = 'monthly'"
          class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          :class="
            billingCycle === 'monthly'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          "
        >
          Monthly
        </button>
        <button
          @click="billingCycle = 'yearly'"
          class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
          :class="
            billingCycle === 'yearly'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          "
        >
          Yearly
          <span class="text-xs bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-semibold">Save 15%</span>
        </button>
      </div>
    </div>

    <!-- Plans Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
        :class="
          plan.highlighted
            ? 'bg-gray-900 dark:bg-indigo-950 text-white shadow-2xl shadow-gray-900/20 dark:shadow-indigo-900/30 border-2 border-indigo-500'
            : 'bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:shadow-xl'
        "
      >
        <div
          v-if="plan.popular"
          class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full"
        >
          Most Popular
        </div>

        <h3
          class="text-xl font-bold"
          :class="plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'"
        >
          {{ plan.name }}
        </h3>
        <p
          class="mt-2 text-sm leading-relaxed"
          :class="plan.highlighted ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'"
        >
          {{ plan.desc }}
        </p>

        <div class="mt-6 mb-8">
          <span
            class="text-4xl font-bold"
            :class="plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'"
          >
            ${{ currentPrice(plan) }}
          </span>
          <span :class="plan.highlighted ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'">
            /mo
          </span>
        </div>

        <ul class="space-y-3 flex-1">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-center gap-3"
          >
            <div
              class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              :class="plan.highlighted ? 'bg-indigo-500/20' : 'bg-indigo-50 dark:bg-indigo-500/10'"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span
              class="text-sm"
              :class="plan.highlighted ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'"
            >{{ feature }}</span>
          </li>
        </ul>

        <button
          class="mt-8 w-full py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
          :class="
            plan.highlighted
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30'
              : 'border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg'
          "
        >
          {{ plan.cta }}
        </button>
      </div>
    </div>

    <div class="text-center mt-16">
      <p class="text-gray-500 dark:text-gray-400">
        Need a custom plan?
        <router-link
          to="/support"
          class="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-500 transition-colors"
        >Contact our sales team</router-link>
      </p>
    </div>
  </section>
</template>
