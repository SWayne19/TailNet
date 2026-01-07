<template>
  <!-- navbar -->
  <div class="border-b-2 border-border flex justify-between items-center padding py-6">
    <div class="flex items-center gap-2">
      <!-- Simple modern network icon (tail/connection lines) -->
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-own-primary" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="font-extrabold text-2xl bg-gradient-to-r from-own-primary to-blue-400 text-transparent bg-clip-text tracking-tight">TailNet</span>
    </div>
    <div class="flex gap-8 items-center">
      <ul class="lg:flex hidden gap-8 items-center">
        <li>
          <a href="">Plans</a>
        </li>
        <li>
          <a href="">Coverage</a>
        </li>
        <li>
          <a href="">Why Us</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
      </ul>
      <button class="lg:flex hidden btn">Sign Up Now</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 24 24"
        class="lg:hidden block"
      >
        <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
      </svg>
    </div>
  </div>

  <!-- hero section -->
  <div
    class="flex md:flex-row flex-col md:gap-0 gap-5 padding pb-20 hero-bg-image lg:items-end items-start bg-no-repeat md:mt-20 mt-10 bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665b169cd354209f30160ac5_Square-Shapes.svg)]"
  >
    <div class="md:w-[50%] w-[100%]">
      <div class="xl:w-[70%] w-full flex flex-col gap-4">
        <h1 class="lg:text-6xl text-5xl leading-[1.1] font-bold">
          Fast, Reliable <span class="text-own-primary">Internet for Everyone</span>
        </h1>
        <p class="">
          Experience lightning-fast fiber and wireless internet with the best coverage in your city. Stay connected, stream, game, and work without interruption.
        </p>
        <div class="flex md:flex-row flex-col items-center gap-3">
          <button
            class="btn !px-8 !py-4 md:basis-auto shrink-0 md:w-auto w-full"
          >
            Check Availability
          </button>
          <button
            class="outline-btn !px-8 !py-4 md:basis-auto shrink-0 md:w-auto w-full"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div class="md:w-[50%] w-[100%] flex justify-center items-center">
      <!-- Professional Abstract Internet SVG Icon Instead of Photo -->
      <svg
        width="320"
        height="220"
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto"
      >
        <ellipse cx="160" cy="110" rx="100" ry="80" fill="#E0F2FE"/>
        <ellipse cx="160" cy="110" rx="70" ry="56" fill="#38BDF8"/>
        <!-- Main network circle -->
        <circle cx="160" cy="110" r="38" fill="#fff" stroke="#2563eb" stroke-width="6"/>
        <!-- Nodes (dots) -->
        <circle cx="80" cy="110" r="8" fill="#2563eb" />
        <circle cx="240" cy="110" r="8" fill="#2563eb" />
        <circle cx="160" cy="38" r="8" fill="#2563eb" />
        <circle cx="160" cy="182" r="8" fill="#2563eb" />
        <!-- Connection lines -->
        <line x1="88" y1="110" x2="122" y2="110" stroke="#2563eb" stroke-width="3"/>
        <line x1="198" y1="110" x2="232" y2="110" stroke="#2563eb" stroke-width="3"/>
        <line x1="160" y1="46" x2="160" y2="72" stroke="#2563eb" stroke-width="3"/>
        <line x1="160" y1="148" x2="160" y2="174" stroke="#2563eb" stroke-width="3"/>
        <!-- Small white nodes -->
        <circle cx="120" cy="82" r="6" fill="#fff" stroke="#2563eb" stroke-width="2"/>
        <circle cx="200" cy="82" r="6" fill="#fff" stroke="#2563eb" stroke-width="2"/>
        <circle cx="120" cy="138" r="6" fill="#fff" stroke="#2563eb" stroke-width="2"/>
        <circle cx="200" cy="138" r="6" fill="#fff" stroke="#2563eb" stroke-width="2"/>
        <!-- More connecting lines -->
        <line x1="126" y1="88" x2="154" y2="102" stroke="#60a5fa" stroke-width="2"/>
        <line x1="194" y1="88" x2="166" y2="102" stroke="#60a5fa" stroke-width="2"/>
        <line x1="126" y1="132" x2="154" y2="118" stroke="#60a5fa" stroke-width="2"/>
        <line x1="194" y1="132" x2="166" y2="118" stroke="#60a5fa" stroke-width="2"/>
      </svg>
    </div>
  </div>
  
  <div class="padding my-[180px]">
    <h1 class="section-heading">Why Choose Us?</h1>
    <p class="section-description">
      Discover what sets our internet service apart. Modern infrastructure, affordable plans, and industry-leading customer care for homes and businesses.
    </p>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-[50px]">
      <div class="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-own-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <!-- Rocket/Speed Icon -->
          <path fill="currentColor" d="M2 16.5L11.98 21l-4.5-10.83 9.68-6.46-1.97 12.24L12.42 17l-8.89-1.49zm8.17 2.32L4 17.06l6.17 1.76zm5.41-13.71l1.41 1.41a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0z"/>
        </svg>
        <p class="text-2xl font-bold">Lightning Fast Speeds</p>
        <p class="w-[70%]">Stream and game in 4K with up to 1Gbps symmetrical speeds.</p>
      </div>
      <div class="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-own-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <!-- Price/Discount Icon -->
          <path fill="currentColor" d="M17 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM21 11V7.24H14a2 2 0 1 0 0 4h7zm-9-6.55L4 7.24v3.76h7V4.45zM14 19.76l7-3.79v-3.82h-7v7.61zM2 7.24V11h7V4.45L2 7.24zm0 9.52V13h7v7.55l-7-3.79zm12 3.79V13h7v3.76l-7 3.79z"/>
        </svg>
        <p class="text-2xl font-bold">Affordable Plans</p>
        <p class="w-[70%]">Flexible plans for every budget. No hidden fees, ever.</p>
      </div>
      <div class="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-own-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <!-- Support Icon -->
          <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 17.93V20h-2v-.07A8.12 8.12 0 0 1 4.07 13H6v-2H4.07A8.12 8.12 0 0 1 11 4.07V6h2V4.07A8.12 8.12 0 0 1 19.93 11H18v2h1.93A8.12 8.12 0 0 1 13 19.93Z"/>
        </svg>
        <p class="text-2xl font-bold">24/7 Local Support</p>
        <p class="w-[70%]">
          Dedicated team ready to help—day or night.
        </p>
      </div>
    </div>
  </div>

  <!-- how it work -->
  <div class="padding my-[180px]">
    <h1 class="section-heading">Getting Connected is Easy</h1>
    <p class="section-description">
      From sign-up to streaming, we make getting online effortless in just 3 simple steps.
    </p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-24 mt-[50px]">
      <div class="flex flex-col justify-between items-center">
        <!-- Professional icon instead of illustration -->
        <div class="w-[90px] h-[90px] rounded-full bg-blue-50 flex items-center justify-center shadow mb-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#38BDF8"/>
            <!-- phone/chat icon -->
            <rect x="16" y="16" width="16" height="16" rx="4" fill="#fff"/>
            <path d="M20 20h8v2h-8zm0 4h8v2h-8zm9 3.5c0 1-.5 1.5-1.5 1.5h-7c-1 0-1.5-.5-1.5-1.5V19.5A1.5 1.5 0 0 1 20.5 18h7A1.5 1.5 0 0 1 29 19.5v7.5z" fill="#38BDF8" opacity="0.25"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="px-3 py-1 rounded-md bg-black text-white w-max mt-4 mx-auto">Step 1</div>
          <h1 class="text-3xl font-semibold text-own-primary my-3">Contact Us</h1>
          <p>
            Enter your address and contact info. We'll check your area and recommend the best plan for your home or business.
          </p>
          <button class="outline-btn mt-5">Get in Touch</button>
        </div>
      </div>

      <div class="flex flex-col justify-between items-center">
        <!-- Professional icon instead of illustration -->
        <div class="w-[90px] h-[90px] rounded-full bg-blue-50 flex items-center justify-center shadow mb-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#2563eb"/>
            <!-- calendar settings icon -->
            <rect x="14" y="16" width="20" height="14" rx="4" fill="#fff"/>
            <rect x="18" y="22" width="12" height="3" rx="1" fill="#2563eb" opacity="0.3"/>
            <circle cx="32.5" cy="16.5" r="2.5" fill="#2563eb" />
          </svg>
        </div>
        <div class="text-center">
          <div class="px-3 py-1 rounded-md bg-black text-white w-max mt-4 mx-auto">Step 2</div>
          <h1 class="text-3xl font-semibold text-own-primary my-3">Schedule Installation</h1>
          <p>
            Pick a date and our expert technicians will quickly get you online with minimal disruption.
          </p>
          <button class="outline-btn mt-5">Book Today</button>
        </div>
      </div>

      <div class="flex flex-col justify-between items-center">
        <!-- Professional icon instead of illustration -->
        <div class="w-[90px] h-[90px] rounded-full bg-blue-50 flex items-center justify-center shadow mb-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#22D3EE"/>
            <!-- wifi/speed icon -->
            <path d="M24 30c2.209 0 4-1.791 4-4h-8c0 2.209 1.791 4 4 4z" fill="#fff"/>
            <path d="M24 20a8 8 0 0 1 8 8h-2a6 6 0 0 0-12 0h-2a8 8 0 0 1 8-8z" fill="#white" opacity="0.2"/>
            <circle cx="24" cy="34" r="3" fill="#fff" stroke="#0891B2" stroke-width="2"/>
          </svg>
        </div>
        <div class="text-center">
          <div class="px-3 py-1 rounded-md bg-black text-white w-max mt-4 mx-auto">Step 3</div>
          <h1 class="text-3xl font-semibold text-own-primary my-3">Enjoy High-Speed Internet</h1>
          <p>
            Start using reliable, ultra-fast internet instantly—stream, work, and play with no lag!
          </p>
          <button class="outline-btn mt-5">View Features</button>
        </div>
      </div>
    </div>
  </div>

  <!-- integration / partners -->
  <div class="padding my-[180px]">
    <h1 class="section-heading">Compatible With Your Devices</h1>
    <p class="section-description">
      Our internet works seamlessly with all your modern devices and smart home solutions—easy, secure, and reliable connectivity for everything you do.
    </p>
    <button class="btn mt-4">Request a Trial</button>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- Wi-Fi Router Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <rect x="8" y="28" width="32" height="10" rx="4" fill="#38BDF8"/>
            <rect x="14" y="22" width="20" height="6" rx="2" fill="#2563eb"/>
            <circle cx="32" cy="33" r="2" fill="#fff"/>
            <rect x="19" y="36" width="10" height="2" rx="1" fill="#dbeafe"/>
            <!-- WiFi arcs -->
            <path d="M24 18c4 0 8 1 10 3" stroke="#2563eb" stroke-width="2" fill="none"/>
            <path d="M24 14c6 0 12 2 14 6" stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.7"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Compatible with all Wi-Fi 5/6 routers and mesh systems for maximum home coverage.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute w-full bottom-0"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- Smart TV Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <rect x="8" y="14" width="32" height="18" rx="4" fill="#2563eb"/>
            <rect x="16" y="36" width="16" height="2" rx="1" fill="#38bdf8"/>
            <rect x="22" y="38" width="4" height="4" rx="2" fill="#2563eb"/>
            <rect x="12" y="18" width="24" height="10" rx="2" fill="#fff" opacity="0.3"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Stream movies, sports, and more on your favorite Smart TVs with no interruptions.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute w-full bottom-0"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- Mobile Device Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <rect x="16" y="8" width="16" height="32" rx="4" fill="#22D3EE"/>
            <circle cx="24" cy="36" r="2" fill="#2563eb"/>
            <rect x="18" y="12" width="12" height="18" rx="2" fill="#fff" opacity="0.3"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Flawless connectivity for your smartphones, tablets, and smart home gadgets.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute w-full bottom-0"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- Gaming PC Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <rect x="10" y="18" width="28" height="16" rx="4" fill="#2563eb"/>
            <rect x="16" y="24" width="16" height="6" rx="2" fill="#38bdf8"/>
            <rect x="19" y="34" width="10" height="2" rx="1" fill="#dbeafe"/>
            <circle cx="34" cy="30" r="2" fill="#fff"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Low-latency connections for gamers and creatives on wired and wireless setups.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute w-full bottom-0"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- Cloud Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <ellipse cx="24" cy="32" rx="14" ry="8" fill="#E0F2FE"/>
            <ellipse cx="28" cy="28" rx="10" ry="6" fill="#38BDF8"/>
            <circle cx="20" cy="28" r="4" fill="#2563eb" />
            <ellipse cx="33" cy="31" rx="2.5" ry="1.5" fill="#fff" opacity="0.6"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Reliable bandwidth for video calls and smooth workflow with all major cloud services.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute bottom-0 w-full"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
      <div
        class="border-[3px] border-border rounded-xl relative hover:border-own-primary transition-all"
      >
        <div class="p-8 flex flex-col h-full items-center">
          <!-- IoT Icon -->
          <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="17" fill="#22D3EE" />
            <rect x="17" y="19" width="14" height="10" rx="2" fill="#fff"/>
            <circle cx="24" cy="24" r="3" fill="#2563eb"/>
            <rect x="22" y="27" width="4" height="2" rx="1" fill="#2563eb" opacity="0.3"/>
          </svg>
          <p class="mt-3 pb-32 text-center">
            Secure and robust for connecting all your smart home and IoT devices.
          </p>
        </div>
        <div
          class="bg-[#222831] p-8 mt-6 rounded-bl-xl rounded-br-xl absolute bottom-0 w-full"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
    </div>
  </div>

  <!-- accelerate your internet life -->
  <div class="padding my-[180px] flex md:flex-row flex-col items-center">
    <div class="md:w-[50%] w-full">
      <h1 class="section-heading xl:w-[80%] w-[90%]">
        Supercharge Your Online Life with Ultra Internet
      </h1>
      <div
        class="xl:w-[70%] lg:w-[90%] w-full border-[3px] border-border rounded-xl p-8 hover:border-own-primary transition-all mt-10"
      >
        <div class="flex items-center gap-3">
          <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
          <p class="text-lg font-semibold">Unlimited Data</p>
        </div>
        <p class="mt-2 mb-4">
          Stream, game, and work from home—without worrying about limits or throttling.
        </p>
        <button class="outline-btn">Unlimited Plans</button>
      </div>
      <div
        class="xl:w-[70%] lg:w-[90%] w-full border-[3px] border-border rounded-xl p-8 hover:border-own-primary transition-all mt-10"
      >
        <div class="flex items-center gap-3">
          <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
          <p class="text-lg font-semibold">Fast Installation</p>
        </div>
        <p class="mt-2 mb-4">
          Get connected in as little as 24 hours by our certified local engineers.
        </p>
        <button class="outline-btn">Install Now</button>
      </div>
    </div>
    <div class="md:w-[50%] w-full flex justify-center items-center">
      <!-- Professional Speed SVG Icon Instead of Photo -->
      <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
        <!-- Speed dial background -->
        <ellipse cx="160" cy="110" rx="100" ry="80" fill="#E0F2FE"/>
        <ellipse cx="160" cy="110" rx="70" ry="56" fill="#38BDF8"/>
        <!-- Speed meter arc -->
        <path d="M72 132 Q100 56 160 56 Q220 56 248 132" stroke="#2563eb" stroke-width="10" fill="none"/>
        <!-- Ticker arrow -->
        <g>
          <rect x="156" y="80" width="8" height="45" rx="4" fill="#fff"/>
          <rect x="156" y="80" width="8" height="30" rx="4" fill="#2563eb"/>
        </g>
        <!-- Central knob -->
        <circle cx="160" cy="125" r="17" fill="#fff" stroke="#2563eb" stroke-width="6"/>
        <!-- Decorative ticks -->
        <rect x="93" y="106" width="5" height="13" rx="2.5" fill="#38BDF8"/>
        <rect x="222" y="106" width="5" height="13" rx="2.5" fill="#38BDF8"/>
        <rect x="133" y="85" width="5" height="13" rx="2.5" fill="#38BDF8"/>
        <rect x="183" y="85" width="5" height="13" rx="2.5" fill="#38BDF8"/>
      </svg>
    </div>
  </div>

  <!-- pricing plan -->
  <div class="padding my-[180px]">
    <h1 class="md:text-4xl text-3xl font-bold text-center mb-5">
      Choose Your Internet Plan
    </h1>
    <p class="text-center lg:w-[50%] md:w-[80%] w-full mx-auto">
      Simple, affordable pricing for every household and business. No contracts, no hidden fees—just fast, reliable internet.
    </p>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[50px] gap-8">
      <div
        class="border-[3px] border-border rounded-xl p-8 hover:border-own-primary transition-all flex flex-col justify-between bg-white"
      >
        <!-- Home Basic Icon SVG instead of PNG -->
        <div class="flex justify-center">
          <svg width="70" height="70" fill="none" viewBox="0 0 48 48">
            <rect x="10" y="20" width="28" height="16" rx="4" fill="#38BDF8"/>
            <rect x="18" y="32" width="12" height="4" rx="2" fill="#fff"/>
            <rect x="14" y="24" width="20" height="6" rx="3" fill="#2563eb" opacity="0.4"/>
            <rect x="20" y="28" width="8" height="2" rx="1" fill="#dbeafe"/>
          </svg>
        </div>
        <p class="text-3xl font-medium my-2">Home Basic</p>
        <p class="mb-10">
          Perfect for casual browsing, email, and streaming in HD.
        </p>
        <p class="text-4xl text-own-primary font-bold">$ 30.00</p>
        <p class="text-sm text-gray-600">/ Month</p>

        <div class="my-10 flex flex-col gap-3">
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p>100 Mbps download/upload</p>
          </div>
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p>Unlimited data</p>
          </div>
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p>Free Wi-Fi router</p>
          </div>
        </div>
        <button class="outline-btn w-max !px-8 !py-4">Get Started</button>
      </div>
      <div
        class="border-[3px] border-border rounded-xl p-8 hover:border-own-primary transition-all flex flex-col justify-between bg-[#222831]"
      >
        <!-- Family Fiber Icon SVG instead of PNG -->
        <div class="flex justify-center">
          <svg width="70" height="70" fill="none" viewBox="0 0 48 48">
            <ellipse cx="24" cy="32" rx="13" ry="10" fill="#fff" opacity="0.1"/>
            <circle cx="16.5" cy="32.5" r="4.5" fill="#38BDF8"/>
            <circle cx="31.5" cy="31.5" r="6.5" fill="#2563eb"/>
            <circle cx="24" cy="21.5" r="8.5" fill="#fff"/>
            <circle cx="24" cy="24.5" r="3.5" fill="#2563eb" />
          </svg>
        </div>
        <p class="text-3xl font-medium my-2 text-white">Family Fiber</p>
        <p class="mb-10 text-white">
          Fast, stable fiber internet for streaming, gaming, and smart homes.
        </p>
        <p class="text-4xl text-own-primary font-bold">$ 65.00</p>
        <p class="text-sm text-gray-600">/ Month</p>

        <div class="my-10 flex flex-col gap-3">
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p class="text-gray-100">500 Mbps download/upload</p>
          </div>
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p class="text-gray-100">Whole-home coverage</p>
          </div>
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p class="text-gray-100">24/7 Priority support</p>
          </div>
        </div>
        <button class="btn w-max !px-8 !py-4">Upgrade</button>
      </div>
      <div
        class="border-[3px] border-border rounded-xl p-8 hover:border-own-primary transition-all flex flex-col justify-between bg-white"
      >
        <!-- Business Max Icon SVG instead of PNG -->
        <div class="flex justify-center">
          <svg width="70" height="70" fill="none" viewBox="0 0 48 48">
            <rect x="12" y="20" width="24" height="16" rx="4" fill="#2563eb"/>
            <rect x="18" y="16" width="12" height="6" rx="3" fill="#38BDF8" />
            <rect x="18" y="36" width="12" height="2" rx="1" fill="#22D3EE"/>
            <circle cx="36" cy="34" r="4" fill="#38BDF8"/>
            <circle cx="24" cy="28" r="3" fill="#fff"/>
            <rect x="26" y="22" width="4" height="2" rx="1" fill="#fff"/>
          </svg>
        </div>
        <p class="text-3xl font-medium my-2">Business Max</p>
        <p class="mb-10">
          For offices, remote workers, or power users requiring ultra reliability and speed.
        </p>
        <p class="text-4xl text-own-primary font-bold">$ 120.00</p>
        <p class="text-sm text-gray-600">/ Month</p>

        <div class="my-10 flex flex-col gap-3">
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p>1 Gbps download/upload</p>
          </div>
          <div class="flex gap-2">
            <img class="w-[15px]" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg" alt="" />
            <p>Static IP available</p>
          </div>
          <div class="flex gap-2">
            <img
              class="w-[15px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              alt=""
            />
            <p>Dedicated Support Manager</p>
          </div>
        </div>
        <button class="outline-btn w-max !px-8 !py-4">Get Started</button>
      </div>
    </div>
  </div>

  <!-- frequently ask question -->
  <div class="padding my-[180px] flex lg:flex-row md:flex-col flex-col">
    <div class="lg:w-[50%] md:w-[90%] w-[100%]">
      <h1 class="section-heading mb-[100px]">Frequently Asked Questions</h1>
      <img
        class="w-[70%] mx-auto"
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665aeb5025ec995f44e6c5fd_faq-section-illustration.svg"
        alt=""
      />
    </div>
    <div
      class="lg:w-[50%] md:w-[90%] w-[100%] flex flex-col justify-between gap-8 lg:mt-[20px] md:mt-[40px] mt-[60px]"
    >
      <div
        class="flex w-full bg-[#222831] text-white justify-between px-8 py-4 rounded-2xl hover:border-own-primary transition-all border-[3px]"
      >
        <p class="text-xl font-bold lg:w-[85%] md:w-[80%] w-[75%]">
          Is Webflow SEO-friendly?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      </div>
      <div
        class="flex w-full bg-[#222831] text-white justify-between px-8 py-4 rounded-2xl hover:border-own-primary transition-all border-[3px]"
      >
        <p class="text-xl font-bold lg:w-[85%] md:w-[80%] w-[75%]">
          How can I ensure my site looks good on all devices?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      </div>
      <div
        class="flex w-full bg-[#222831] text-white justify-between px-8 py-4 rounded-2xl hover:border-own-primary transition-all border-[3px]"
      >
        <p class="text-xl font-bold lg:w-[85%] md:w-[80%] w-[75%]">
          What if I need to add more pages to the template?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      </div>
      <div
        class="flex w-full bg-[#222831] text-white justify-between px-8 py-4 rounded-2xl hover:border-own-primary transition-all border-[3px]"
      >
        <p class="text-xl font-bold lg:w-[85%] md:w-[80%] w-[75%]">
          How do I edit the content in a Webflow template?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      </div>
      <div
        class="flex w-full bg-[#222831] text-white justify-between px-8 py-4 rounded-2xl hover:border-own-primary transition-all border-[3px]"
      >
        <p class="text-xl font-bold lg:w-[85%] md:w-[80%] w-[75%]">
          Can I customize the Webflow template to fit my brand?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- customer review -->
  <div class="padding mt-[180px] bg-[#222831] pt-[100px] pb-[200px]">
    <h1 class="section-heading text-white text-center">
      Customer <span class="text-own-primary">Review</span>
    </h1>
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-14 mt-[100px]"
    >
      <div
        class="border-[3px] border-black/20 text-white rounded-xl p-8 hover:border-own-primary transition-all"
      >
        <p class="text-2xl font-medium">
          "I couldn't be happier with this Webflow template! As a small business
          owner with limited coding skills, I needed something that was easy to
          use but still looked professional - and it delivered."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-own-primary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5434a9a1d841b12c9b_avatar-1.webp"
            alt=""
          />
        </div>
        <p class="text-2xl mt-4 text-own-primary">John Doe</p>
        <p class="text-sm">CEO / Flerp Studios</p>
      </div>
      <div
        class="border-[3px] border-black/20 text-white rounded-xl p-8 hover:border-own-primary transition-all"
      >
        <p class="text-2xl font-medium">
          "This Webflow template has been a game-changer for my portfolio site.
          As a freelance designer, I needed a website that showcased my work
          beautifully and could be easily updated."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-own-primary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff57a8c8e95a310bc29b_avatar-2.webp"
            alt=""
          />
        </div>
        <p class="text-2xl mt-4 text-own-primary">Emma Frost</p>
        <p class="text-sm">Freelance Designer</p>
      </div>
      <div
        class="border-[3px] border-black/20 text-white rounded-xl p-8 hover:border-own-primary transition-all"
      >
        <p class="text-2xl font-medium">
          "I was initially hesitant to use a template, but this Webflow template
          exceeded my expectations. The level of customization available is
          impressive, and the template was easy to work with."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-own-primary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5b17668f713e14de89_avatar-3.webp"
            alt=""
          />
        </div>
        <p class="text-2xl mt-4 text-own-primary">Brian Choe</p>
        <p class="text-sm">Creative Director / Trix Agency</p>
      </div>
    </div>
  </div>

  <!-- rebrand -->
  <div class="padding">
    <div
      class="bg-own-primary rounded-3xl py-20 flex flex-col items-center justify-center bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6659dee649696d0bb3e27c7a_Background%20Shapes.svg)] bg-auto bg-no-repeat translate-y-[-50px]"
      style="background-position: 50%"
    >
      <h1 class="lg:text-4xl md:text-3xl text-lg font-semibold">
        Rebrand your business using Duo template
      </h1>
      <p class="text-white md:mt-7 mt-10 xl:w-[50%] lg:w-[70%] md:w-[70%] w-[90%] text-center">
        Our template will get your business from 0 to hero in no time. Grab your
        users attention and convert those visitors in paying customers.
      </p>
      <div class="flex  md:flex-row flex-col items-center gap-3 md:mt-5 mt-10">
        <button class="btn !bg-black md:!px-8 md:!py-4 w-full">Preview Templete</button>
        <button class="btn !bg-white md:!px-8 md:!py-4 !text-own-primary w-full">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <div class="padding mt-[100px] pb-[150px]">
    <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-10 md:text-left text-center">
      <div>
        <p>© Duo Template</p>
        <p class="w-[80%]">Crafted by <span class="underline">Toms Design</span></p>
        <p class="w-[80%]">Powered by <span class="underline">Webflow</span></p>
      </div>
      <div>
        <h1 class="font-bold text-lg">Pages</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Home</li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold text-lg">Admin</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Style Guide</li>
          <li>Licensing</li>
          <li>Change Log</li>
          <li>Password</li>
          <li>404</li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold text-lg">Social</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
          <li>Youtube</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold text-lg">Contact</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Email me</li>
          <li>+67 24 24 12 45</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
