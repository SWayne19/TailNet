<script setup>
import { ref } from "vue";

const openFaq = ref(null);

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const faqs = [
  {
    question: "What makes TailNet faster than other internet providers?",
    answer:
      "TailNet uses cutting-edge fiber-optic technology and advanced network infrastructure to deliver symmetrical speeds up to 1Gbps. Our direct fiber connections eliminate the bottlenecks common with traditional cable or DSL services, ensuring consistent, high-speed internet for all your devices simultaneously.",
  },
  {
    question: "Is there a data cap on TailNet internet plans?",
    answer:
      "No, all TailNet plans come with unlimited data. Stream, game, work, and download as much as you want without worrying about data caps, throttling, or overage fees. We believe in providing true unlimited internet access.",
  },
  {
    question: "How do I contact TailNet for support?",
    answer:
      "You can reach our 24/7 support team through multiple channels: call us at 1-800-555-6724, use our live chat on the website, email hello@tailnet.com, or visit our support center. Our local support team is always ready to help.",
  },
  {
    question: "Can I upgrade my TailNet plan at any time?",
    answer:
      "Yes! You can upgrade your plan at any time with no penalties or fees. Simply contact our support team or log into your account portal to change your plan. Downgrades can also be made, subject to your current billing cycle.",
  },
  {
    question: "Do you offer installation services for new customers?",
    answer:
      "Absolutely! We provide professional installation services for all new customers. Our certified technicians will handle everything from setup to testing, ensuring your connection is optimized. Installation can typically be scheduled within 24-48 hours.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We offer a 99.9% uptime SLA for all our plans. Our redundant network infrastructure ensures your connection stays up. In the rare event of an outage, our monitoring systems detect issues in real-time and our team works to restore service immediately.",
  },
];

const contactMethods = [
  {
    title: "Live Chat",
    desc: "Get instant help from our support team.",
    icon: "chat",
    action: "Start Chat",
  },
  {
    title: "Email Us",
    desc: "hello@tailnet.com - We reply within 2 hours.",
    icon: "email",
    action: "Send Email",
  },
  {
    title: "Call Us",
    desc: "+1 800 555 6724 - Available 24/7.",
    icon: "phone",
    action: "Call Now",
  },
];
</script>

<template>
  <section class="padding pt-32 pb-24">
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
        Help Center
      </p>
      <h1 class="section-heading">How Can We Help?</h1>
      <p class="section-desc mx-auto">
        Find answers to common questions or get in touch with our support team.
      </p>
    </div>

    <!-- Contact Methods -->
    <div class="grid sm:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
      <div
        v-for="method in contactMethods"
        :key="method.title"
        class="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600"
        >
          <!-- Chat icon -->
          <svg
            v-if="method.icon === 'chat'"
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
          <!-- Email icon -->
          <svg
            v-else-if="method.icon === 'email'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4l-10 8L2 4" />
          </svg>
          <!-- Phone icon -->
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
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            />
          </svg>
        </div>
        <h3 class="font-bold text-gray-900">{{ method.title }}</h3>
        <p class="text-sm text-gray-500 mt-1">{{ method.desc }}</p>
        <button
          class="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          {{ method.action }}
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-24 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
          :class="
            openFaq === index
              ? 'bg-indigo-50 border-indigo-200 shadow-sm'
              : 'bg-white hover:border-gray-200'
          "
        >
          <button
            @click="toggleFaq(index)"
            class="flex w-full justify-between items-center px-6 py-5 cursor-pointer text-left gap-4"
          >
            <span class="font-semibold text-gray-900">{{ faq.question }}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              class="flex-shrink-0 transition-transform duration-300 text-gray-400"
              :class="openFaq === index ? 'rotate-180 text-indigo-600' : ''"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            v-show="openFaq === index"
            class="px-6 pb-5"
          >
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
