<script setup>
const reviews = [
  {
    text: "TailNet has provided an incredibly stable connection for my home office. My video calls have never dropped and downloads are lightning quick!",
    name: "Jake Williams",
    role: "Remote Engineer",
    initials: "JW",
    color: "from-blue-500 to-indigo-500",
    rating: 5,
  },
  {
    text: "Getting set up with TailNet was a breeze. The technician was friendly, and their customer support resolved my question in minutes.",
    name: "Linda Chen",
    role: "Digital Content Creator",
    initials: "LC",
    color: "from-indigo-500 to-purple-500",
    rating: 5,
  },
  {
    text: "We switched all our office locations to TailNet. Our team noticed the upgrade right away - no more bottlenecks, just smooth sailing!",
    name: "Raj Patel",
    role: "IT Manager, Brightworks",
    initials: "RP",
    color: "from-cyan-500 to-blue-500",
    rating: 5,
  },
  {
    text: "As a gamer, latency matters. TailNet delivers consistently low ping times and I haven't had a single disconnect during competitive matches.",
    name: "Marcus Thompson",
    role: "Pro Gamer & Streamer",
    initials: "MT",
    color: "from-violet-500 to-indigo-500",
    rating: 5,
  },
  {
    text: "The family plan is perfect for us. Four kids streaming, doing homework, and gaming all at once without any slowdown. Amazing value!",
    name: "Sarah Mitchell",
    role: "Parent & Teacher",
    initials: "SM",
    color: "from-pink-500 to-rose-500",
    rating: 5,
  },
  {
    text: "Switched from our old provider and the speed difference was night and day. TailNet's fiber is the real deal. Highly recommend!",
    name: "David Kim",
    role: "Software Developer",
    initials: "DK",
    color: "from-teal-500 to-cyan-500",
    rating: 5,
  },
];
</script>

<template>
  <section class="padding pt-32 pb-24">
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
        Testimonials
      </p>
      <h1 class="section-heading">
        What Our
        <span class="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Customers</span>
        Say
      </h1>
      <p class="section-desc mx-auto">
        Join thousands of satisfied users who made the switch to TailNet.
      </p>
    </div>

    <!-- Reviews Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
      <div
        v-for="(review, i) in reviews"
        :key="i"
        class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      >
        <div class="flex gap-1 mb-4">
          <svg
            v-for="s in review.rating"
            :key="s"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#f59e0b"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
          "{{ review.text }}"
        </p>

        <div class="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold"
            :class="review.color"
          >
            {{ review.initials }}
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm">{{ review.name }}</p>
            <p class="text-xs text-gray-400">{{ review.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust bar -->
    <div class="mt-20 text-center">
      <p class="text-sm text-gray-400 uppercase tracking-wider font-medium mb-6">
        Trusted by thousands of homes and businesses
      </p>
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">50,000+</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Active Users</p>
        </div>
        <div class="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Average Rating</p>
        </div>
        <div class="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">99.9%</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Uptime SLA</p>
        </div>
        <div class="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">2 min</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Avg Support Response</p>
        </div>
      </div>
    </div>
  </section>
</template>
