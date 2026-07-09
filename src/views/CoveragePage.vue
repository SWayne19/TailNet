<script setup>
const devices = [
  {
    name: "Wi-Fi Routers",
    desc: "Compatible with all Wi-Fi 5/6/7 routers and mesh systems for maximum coverage.",
    color: "from-blue-500 to-cyan-400",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
  {
    name: "Smart TVs",
    desc: "Stream movies, sports, and shows on your favorite Smart TVs with zero buffering.",
    color: "from-indigo-500 to-purple-400",
    iconPath: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z",
  },
  {
    name: "Mobile Devices",
    desc: "Flawless connectivity for smartphones, tablets, and all your portable gadgets.",
    color: "from-cyan-500 to-blue-400",
    iconPath: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
  },
  {
    name: "Gaming & PCs",
    desc: "Low-latency connections for gamers and creatives on wired and wireless setups.",
    color: "from-violet-500 to-indigo-400",
    iconPath: "M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z",
  },
  {
    name: "Cloud Services",
    desc: "Reliable bandwidth for video calls and smooth workflow with all major cloud platforms.",
    color: "from-blue-400 to-indigo-500",
    iconPath: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
  },
  {
    name: "IoT & Smart Home",
    desc: "Secure and robust connectivity for all your smart home and IoT devices.",
    color: "from-teal-500 to-cyan-400",
    iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  },
];

const coverageAreas = [
  { city: "Downtown Metro", status: "active", speed: "1Gbps" },
  { city: "North Suburbs", status: "active", speed: "500Mbps" },
  { city: "East Industrial", status: "active", speed: "1Gbps" },
  { city: "West Residential", status: "active", speed: "500Mbps" },
  { city: "South Bay Area", status: "coming", speed: "1Gbps" },
  { city: "Central Business", status: "active", speed: "1Gbps" },
];
</script>

<template>
  <section class="padding pt-32 pb-24">
    <div class="max-w-3xl">
      <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
        Compatibility
      </p>
      <h1 class="section-heading">Works With All Your Devices</h1>
      <p class="section-desc">
        Our internet works seamlessly with all your modern devices and smart home
        solutions. Easy, secure, and reliable connectivity.
      </p>
    </div>

    <!-- Devices Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
      <div
        v-for="device in devices"
        :key="device.name"
        class="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
          :class="device.color"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path :d="device.iconPath" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-900">{{ device.name }}</h3>
        <p class="text-gray-500 mt-2 leading-relaxed text-sm">
          {{ device.desc }}
        </p>
      </div>
    </div>
  </section>

  <!-- Coverage Map Section -->
  <section class="padding py-24 bg-gray-900 text-white">
    <div class="max-w-3xl">
      <p class="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
        Coverage Area
      </p>
      <h2 class="section-heading text-white">Check Our Coverage</h2>
      <p class="text-gray-400 text-lg mt-4 max-w-2xl">
        We're rapidly expanding our fiber network. Check if TailNet is available
        in your area.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
      <div
        v-for="area in coverageAreas"
        :key="area.city"
        class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
      >
        <div>
          <h3 class="font-semibold text-white">{{ area.city }}</h3>
          <p class="text-sm text-gray-400 mt-1">Up to {{ area.speed }}</p>
        </div>
        <span
          class="text-xs font-semibold px-3 py-1 rounded-full"
          :class="
            area.status === 'active'
              ? 'bg-green-500/10 text-green-400'
              : 'bg-yellow-500/10 text-yellow-400'
          "
        >
          {{ area.status === "active" ? "Available" : "Coming Soon" }}
        </span>
      </div>
    </div>

    <div class="mt-10">
      <router-link to="/plans" class="btn-primary">
        Check Availability
      </router-link>
    </div>
  </section>
</template>
