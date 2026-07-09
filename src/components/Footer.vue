<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- CTA Banner -->
    <div class="padding -mt-20">
      <div
        class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div
          class="absolute inset-0 opacity-10"
          style="
            background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, white 1px, transparent 1px);
            background-size: 40px 40px;
          "
        ></div>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative z-10">
          Ready to Experience Faster Internet?
        </h2>
        <p class="text-indigo-100 mt-4 max-w-xl relative z-10">
          Join thousands of happy customers enjoying ultra-fast, reliable
          internet with TailNet. No contracts, no hidden fees.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-3 mt-8 relative z-10">
          <router-link
            to="/plans"
            class="px-8 py-3.5 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Plans
          </router-link>
          <router-link
            to="/support"
            class="px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Sales
          </router-link>
        </div>
      </div>
    </div>

    <!-- Footer Links -->
    <div class="padding pt-24 pb-12">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div class="col-span-2 md:col-span-4 lg:col-span-1">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3" fill="white" />
                <path d="M10 2v3M10 15v3M2 10h3M15 10h3" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="text-lg font-bold text-white">Tail<span class="text-indigo-400">Net</span></span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">
            High-speed fiber internet for homes and businesses. Reliable, fast, and affordable.
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Pages</h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-sm hover:text-indigo-400 transition-colors">Home</router-link></li>
            <li><router-link to="/plans" class="text-sm hover:text-indigo-400 transition-colors">Plans</router-link></li>
            <li><router-link to="/coverage" class="text-sm hover:text-indigo-400 transition-colors">Coverage</router-link></li>
            <li><router-link to="/support" class="text-sm hover:text-indigo-400 transition-colors">Support</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Careers</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Social</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Instagram</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Facebook</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">X (Twitter)</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul class="space-y-3">
            <li class="text-sm">hello@tailnet.com</li>
            <li class="text-sm">+1 800 555 6724</li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Live Chat</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} TailNet Networks. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
