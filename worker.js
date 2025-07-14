addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Health check endpoints
  if (url.pathname === '/health' || url.pathname === '/healthz') {
    return new Response('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // Serve the main HTML file for all routes
  if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname.endsWith('.html')) {
    return new Response(HTML_CONTENT, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }
  
  // Handle logo.png - serving a 404 for now
  if (url.pathname === '/logo.png') {
    return new Response('Logo not found - upload to Workers assets or use CDN', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // Default to serving the main page
  return new Response(HTML_CONTENT, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

// Embedded HTML content
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZENPULSAR Commodities Intelligence</title>
    <link rel="stylesheet" href="./public/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'zp-dark': '#1a1a1a',
                        'zp-gray': '#4a4a4a',
                        'zp-light-gray': '#6b7280',
                        'zp-border': '#e5e7eb',
                        'zp-bg-subtle': '#fcfcfc',
                        'zp-bg-light': '#f9f9f9',
                        'zp-bg-blue': '#f0f4f8',
                    },
                    boxShadow: {
                        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
                        'nav': '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-out',
                        'slide-up': 'slideUp 0.6s ease-out',
                        'scale-in': 'scaleIn 0.3s ease-out',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        scaleIn: {
                            '0%': { opacity: '0', transform: 'scale(0.95)' },
                            '100%': { opacity: '1', transform: 'scale(1)' },
                        },
                    }
                }
            }
        }
    </script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .nav-compact {
            padding-top: 0.75rem !important;
            padding-bottom: 0.75rem !important;
        }
        .mobile-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
            max-height: 300px;
        }
        .modal-overlay {
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
        }
        .modal {
            transform: scale(0.9);
            opacity: 0;
            transition: all 0.3s ease-out;
        }
        .modal.show {
            transform: scale(1);
            opacity: 1;
        }
    </style>
</head>
<body class="font-inter bg-white text-zp-dark">
    <!-- Navigation -->
    <nav id="navbar" class="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-nav transition-all duration-300 py-6">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <img src="logo.png" alt="ZENPULSAR" class="h-8">
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#overview" class="text-zp-gray hover:text-zp-dark transition-colors font-medium">Overview</a>
                    <a href="#offerings" class="text-zp-gray hover:text-zp-dark transition-colors font-medium">Core Offerings</a>
                    <a href="#why-it-matters" class="text-zp-gray hover:text-zp-dark transition-colors font-medium">Why It Matters</a>
                    <a href="#pricing" class="text-zp-gray hover:text-zp-dark transition-colors font-medium">Pricing</a>
                    <a href="#contact" class="text-zp-gray hover:text-zp-dark transition-colors font-medium">Contact</a>
                    <button onclick="openDemoModal()" 
                       class="bg-zp-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Request Demo
                    </button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu md:hidden">
                <div class="py-4 space-y-4">
                    <a href="#overview" class="block text-zp-gray hover:text-zp-dark transition-colors font-medium">Overview</a>
                    <a href="#offerings" class="block text-zp-gray hover:text-zp-dark transition-colors font-medium">Core Offerings</a>
                    <a href="#why-it-matters" class="block text-zp-gray hover:text-zp-dark transition-colors font-medium">Why It Matters</a>
                    <a href="#pricing" class="block text-zp-gray hover:text-zp-dark transition-colors font-medium">Pricing</a>
                    <a href="#contact" class="block text-zp-gray hover:text-zp-dark transition-colors font-medium">Contact</a>
                    <button onclick="openDemoModal()" 
                       class="inline-block bg-zp-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4">
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div class="max-w-5xl mx-auto text-center fade-in-section">
            <div class="mb-12">
                <img src="logo.png" alt="ZENPULSAR" class="h-18 md:h-24 mx-auto mb-8">
                <h1 class="text-5xl md:text-6xl font-bold text-zp-dark leading-tight">COMMODITIES INTELLIGENCE</h1>
            </div>
            <p class="text-xl md:text-2xl text-zp-gray mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
                Actionable geopolitical intelligence and AI-powered signals for commodity traders who need to move faster, smarter.
            </p>
            <button onclick="openDemoModal()" 
               class="inline-block bg-zp-dark text-white px-14 py-5 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-card hover:shadow-lg">
                Request Demo
            </button>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-zp-border to-transparent"></div>

    <!-- Overview Section -->
    <section id="overview" class="py-24 px-6 bg-zp-bg-light">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16 fade-in-section">
                <h2 class="text-3xl md:text-4xl font-bold text-zp-dark mb-6">Intelligence-First Commodity Trading</h2>
            </div>
            <div class="grid md:grid-cols-2 gap-12 items-center fade-in-section">
                <div class="space-y-6">
                    <p class="text-lg text-zp-gray leading-relaxed">
                        ZENPULSAR delivers real-time, AI-powered intelligence for commodity trading and risk management. We transform global news, geopolitical events, and policy signals into structured, strategy-ready insights. Our sentiment feeds and modular AI agents help traders act faster, validate positions, and stay ahead of risk in volatile markets.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-zp-dark rounded-full mr-4"></div>
                            <span class="text-sm font-medium text-zp-dark">3M+ articles processed daily</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-zp-dark rounded-full mr-4"></div>
                            <span class="text-sm font-medium text-zp-dark">185 languages monitored</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-zp-dark rounded-full mr-4"></div>
                            <span class="text-sm font-medium text-zp-dark">Real-time signal extraction</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-zp-dark rounded-full mr-4"></div>
                            <span class="text-sm font-medium text-zp-dark">API-ready integration</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-zp-border to-transparent"></div>

    <!-- Core Offerings Section -->
    <section id="offerings" class="py-24 px-6 bg-zp-bg-subtle">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-20 fade-in-section">
                <h2 class="text-4xl md:text-5xl font-bold text-zp-dark mb-4">Core Offerings</h2>
                <p class="text-lg text-zp-gray max-w-2xl mx-auto">Comprehensive intelligence solutions designed for modern commodity trading</p>
            </div>
            
            <div class="grid lg:grid-cols-3 gap-10 fade-in-section">
                <!-- Offering 1 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div class="h-full flex flex-col">
                        <h3 class="text-2xl font-bold text-zp-dark mb-8 leading-tight">News & Sentiment-Based Trading Signals</h3>
                        <ul class="space-y-4 text-zp-gray flex-grow">
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Extracted from 3M+ articles daily in 185 languages using NLP and LLMs</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Each article scored as bullish or bearish, with confidence levels</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Covers metals (copper, aluminium), fertilizers, sugar, grains, and energy</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Captures disruptions like strikes, export bans, sanctions, and weather</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Proven correlation with intraday and T-day price movements</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">API/MCP integration-ready, ingestible into internal models</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Offering 2 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div class="h-full flex flex-col">
                        <h3 class="text-2xl font-bold text-zp-dark mb-8 leading-tight">Geopolitical & Tariff Risk Factor Matrix</h3>
                        <ul class="space-y-4 text-zp-gray flex-grow">
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Stress-test strategies against war, sanctions, regime instability, and trade shocks</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Real-time political risk signals, not static macro overlays</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Built-in taxonomy of triggers: tariffs, export bans, regulatory changes</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Use for scenario modeling, volatility forecasts, and regional hedging</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Developed with launch partners including Trafigura and Open Mineral</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Offering 3 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div class="h-full flex flex-col">
                        <h3 class="text-2xl font-bold text-zp-dark mb-8 leading-tight">Multi-Agent AI Systems</h3>
                        <ul class="space-y-4 text-zp-gray flex-grow">
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Custom AI agents built for commodity-specific research</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Agents automate tasks like PDF parsing, price tracking, news summarization</span>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <div class="text-sm">
                                    <div class="mb-2">Examples:</div>
                                    <div class="ml-4 space-y-1 text-xs text-zp-light-gray">
                                        <div>– Urea quote tracker (CFR Brazil, FOB Egypt)</div>
                                        <div>– Rice market agent for MDM</div>
                                        <div>– Argus parser for fertilizer pricing</div>
                                    </div>
                                </div>
                            </li>
                            <li class="flex items-start leading-relaxed">
                                <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                                <span class="text-sm">Replaces PDFs, emails, and fragmented workflows</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-zp-border to-transparent"></div>

    <!-- Why It Matters Section -->
    <section id="why-it-matters" class="py-24 px-6 bg-zp-bg-blue">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 fade-in-section">
                <h2 class="text-4xl md:text-5xl font-bold text-zp-dark mb-6">Why It Matters</h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
                <div class="bg-white p-8 rounded-lg text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
                    <div class="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
                    <h3 class="text-lg font-semibold text-zp-dark mb-3">Real-Time Signals</h3>
                    <p class="text-sm text-zp-gray leading-relaxed">Anticipate market moves with sentiment and geopolitical insight tied to actual contracts.</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
                    <div class="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
                    <h3 class="text-lg font-semibold text-zp-dark mb-3">AI Automation</h3>
                    <p class="text-sm text-zp-gray leading-relaxed">Free analysts from repetitive research and news tracking.</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
                    <div class="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
                    <h3 class="text-lg font-semibold text-zp-dark mb-3">Strategy Testing</h3>
                    <p class="text-sm text-zp-gray leading-relaxed">Know how your strategies perform under stress — before capital is committed.</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
                    <div class="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
                    <h3 class="text-lg font-semibold text-zp-dark mb-3">Infrastructure, Not Dashboards</h3>
                    <p class="text-sm text-zp-gray leading-relaxed">We don't build dashboards. We replace legacy workflows with signal-driven infrastructure.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-zp-border to-transparent"></div>

    <!-- Pricing Section -->
    <section id="pricing" class="py-24 px-6 bg-zp-bg-subtle">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-20 fade-in-section">
                <h2 class="text-4xl md:text-5xl font-bold text-zp-dark mb-4">Pricing</h2>
                <p class="text-lg text-zp-gray max-w-2xl mx-auto">Flexible pricing tailored to your specific intelligence needs</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 fade-in-section">
                <!-- Pricing Card 1 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-zp-dark mb-6">Sentiment Feed</h3>
                    <div class="mb-8">
                        <p class="text-3xl font-bold text-zp-dark mb-2">Custom</p>
                        <p class="text-sm text-zp-gray">pricing</p>
                    </div>
                    <p class="text-zp-gray leading-relaxed mb-8">
                        Daily or intraday signals by commodity and region with confidence scores. API-ready.
                    </p>
                    <div class="space-y-3 text-sm text-zp-light-gray text-left">
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Real-time data feeds</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Confidence scoring</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>API integration</span>
                        </div>
                    </div>
                </div>

                <!-- Pricing Card 2 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-zp-dark mb-6">AI Agent Systems</h3>
                    <div class="mb-8">
                        <p class="text-3xl font-bold text-zp-dark mb-2">Custom</p>
                        <p class="text-sm text-zp-gray">pricing</p>
                    </div>
                    <p class="text-zp-gray leading-relaxed mb-8">
                        Modular AI agents for parsing, summarizing, and monitoring. Custom-built or templated.
                    </p>
                    <div class="space-y-3 text-sm text-zp-light-gray text-left">
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Custom AI agents</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Workflow automation</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Pipeline integration</span>
                        </div>
                    </div>
                </div>

                <!-- Pricing Card 3 -->
                <div class="bg-white shadow-card border border-zp-border p-10 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-zp-dark mb-6">Geopolitical Risk Matrix</h3>
                    <div class="mb-8">
                        <p class="text-3xl font-bold text-zp-dark mb-2">Custom</p>
                        <p class="text-sm text-zp-gray">pricing</p>
                    </div>
                    <p class="text-zp-gray leading-relaxed mb-8">
                        Live geopolitical risk overlay for strategy validation. Early access available.
                    </p>
                    <div class="space-y-3 text-sm text-zp-light-gray text-left">
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Strategy testing</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Risk assessment</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                            <span>Early access program</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-zp-border to-transparent"></div>

    <!-- Call to Action Section -->
    <section id="contact" class="py-24 px-6 bg-zp-bg-light">
        <div class="max-w-4xl mx-auto text-center fade-in-section">
            <h2 class="text-4xl md:text-5xl font-bold text-zp-dark mb-8">Ready to Get Started?</h2>
            <p class="text-xl text-zp-gray mb-12 leading-relaxed max-w-3xl mx-auto">
                Start with a pilot. Demonstrate ROI before scaling.
            </p>
            <button onclick="openDemoModal()" 
               class="inline-block bg-zp-dark text-white px-14 py-5 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-card hover:shadow-lg">
                Book Initial Call
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-20 px-6 bg-white border-t border-zp-border">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <img src="logo.png" alt="ZENPULSAR" class="h-14 mx-auto mb-6">
                <p class="text-lg text-zp-gray max-w-2xl mx-auto">
                    Intelligence-driven commodity trading for the modern era
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="text-center">
                    <h4 class="text-lg font-semibold text-zp-dark mb-4">Platform</h4>
                    <div class="space-y-2 text-zp-gray">
                        <div>Sentiment Analysis</div>
                        <div>AI Agent Systems</div>
                        <div>Risk Assessment</div>
                    </div>
                </div>
                
                <div class="text-center">
                    <h4 class="text-lg font-semibold text-zp-dark mb-4">Contact</h4>
                    <div class="space-y-2">
                        <a href="mailto:info@zenpulsar.com" class="block text-zp-gray hover:text-zp-dark transition-colors">
                            info@zenpulsar.com
                        </a>
                        <a href="https://zenpulsar.com" class="block text-zp-gray hover:text-zp-dark transition-colors">
                            zenpulsar.com
                        </a>
                    </div>
                </div>
                
                <div class="text-center">
                    <h4 class="text-lg font-semibold text-zp-dark mb-4">Get Started</h4>
                    <button onclick="openAccessModal()" 
                       class="inline-block bg-zp-dark text-white px-8 py-3 font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-subtle">
                        Request Access
                    </button>
                </div>
            </div>
            
            <div class="text-center pt-8 border-t border-zp-border">
                <p class="text-sm text-zp-light-gray">
                    © 2025 ZENPULSAR. Professional commodity intelligence solutions.
                </p>
            </div>
        </div>
    </footer>

    <!-- Floating Demo Button -->
    <div class="fixed bottom-8 right-8 z-40 hidden lg:block">
        <button onclick="openDemoModal()" 
           class="bg-zp-dark text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
            <span>Request Demo</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>

    <!-- Demo Request Modal -->
    <div id="demoModal" class="fixed inset-0 z-50 hidden">
        <!-- Overlay -->
        <div class="modal-overlay absolute inset-0" onclick="closeDemoModal()"></div>
        
        <!-- Modal Content -->
        <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
            <div class="modal bg-white rounded-lg shadow-2xl max-w-md w-full mx-auto">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-6 border-b border-zp-border">
                    <h3 class="text-2xl font-bold text-zp-dark">Request Demo</h3>
                    <button onclick="closeDemoModal()" class="text-zp-gray hover:text-zp-dark transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Modal Body -->
                <form id="demoForm" class="p-6 space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="firstName" class="block text-sm font-medium text-zp-dark mb-2">First Name *</label>
                            <input type="text" id="firstName" name="firstName" required 
                                   class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                        </div>
                        <div>
                            <label for="lastName" class="block text-sm font-medium text-zp-dark mb-2">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" required 
                                   class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                        </div>
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-zp-dark mb-2">Email *</label>
                        <input type="email" id="email" name="email" required 
                               class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                    </div>
                    
                    <div>
                        <label for="company" class="block text-sm font-medium text-zp-dark mb-2">Company *</label>
                        <input type="text" id="company" name="company" required 
                               class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-zp-dark mb-2">Message (Optional)</label>
                        <textarea id="message" name="message" rows="3" 
                                  class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors"
                                  placeholder="Tell us about your specific requirements..."></textarea>
                    </div>
                    
                    <!-- Form Actions -->
                    <div class="flex space-x-3 pt-4">
                        <button type="button" onclick="closeDemoModal()" 
                                class="flex-1 px-4 py-2 border border-zp-border text-zp-gray rounded-lg hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" 
                                class="flex-1 px-4 py-2 bg-zp-dark text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Access Request Modal -->
    <div id="accessModal" class="fixed inset-0 z-50 hidden">
        <!-- Overlay -->
        <div class="modal-overlay absolute inset-0" onclick="closeAccessModal()"></div>
        
        <!-- Modal Content -->
        <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
            <div class="modal bg-white rounded-lg shadow-2xl max-w-md w-full mx-auto">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-6 border-b border-zp-border">
                    <h3 class="text-2xl font-bold text-zp-dark">Request Access</h3>
                    <button onclick="closeAccessModal()" class="text-zp-gray hover:text-zp-dark transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Modal Body -->
                <form id="accessForm" class="p-6 space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="accessFirstName" class="block text-sm font-medium text-zp-dark mb-2">First Name *</label>
                            <input type="text" id="accessFirstName" name="firstName" required 
                                   class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                        </div>
                        <div>
                            <label for="accessLastName" class="block text-sm font-medium text-zp-dark mb-2">Last Name *</label>
                            <input type="text" id="accessLastName" name="lastName" required 
                                   class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                        </div>
                    </div>
                    
                    <div>
                        <label for="accessEmail" class="block text-sm font-medium text-zp-dark mb-2">Email *</label>
                        <input type="email" id="accessEmail" name="email" required 
                               class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                    </div>
                    
                    <div>
                        <label for="accessCompany" class="block text-sm font-medium text-zp-dark mb-2">Company *</label>
                        <input type="text" id="accessCompany" name="company" required 
                               class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                    </div>
                    
                    <div>
                        <label for="accessInterest" class="block text-sm font-medium text-zp-dark mb-2">Area of Interest</label>
                        <select id="accessInterest" name="interest" 
                                class="w-full px-3 py-2 border border-zp-border rounded-lg focus:ring-2 focus:ring-zp-dark focus:border-transparent transition-colors">
                            <option value="">Select an option...</option>
                            <option value="sentiment-signals">News & Sentiment Trading Signals</option>
                            <option value="geopolitical-matrix">Geopolitical Risk Matrix</option>
                            <option value="ai-agents">Multi-Agent AI Systems</option>
                            <option value="all-products">All Products</option>
                        </select>
                    </div>
                    
                    <!-- Form Actions -->
                    <div class="flex space-x-3 pt-4">
                        <button type="button" onclick="closeAccessModal()" 
                                class="flex-1 px-4 py-2 border border-zp-border text-zp-gray rounded-lg hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" 
                                class="flex-1 px-4 py-2 bg-zp-dark text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Request Access
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        // Demo Modal Functions
        function openDemoModal() {
            const modal = document.getElementById('demoModal');
            const modalContent = modal.querySelector('.modal');
            modal.classList.remove('hidden');
            
            // Trigger animation after a small delay
            setTimeout(() => {
                modalContent.classList.add('show');
            }, 50);
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        function closeDemoModal() {
            const modal = document.getElementById('demoModal');
            const modalContent = modal.querySelector('.modal');
            
            modalContent.classList.remove('show');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Handle form submission
        document.getElementById('demoForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                company: formData.get('company'),
                message: formData.get('message') || ''
            };
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Send to Slack via API
                const response = await fetch('/api/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data.firstName + ' ' + data.lastName,
                        email: data.email,
                        company: data.company,
                        message: data.message
                    })
                });
                
                if (response.ok) {
                    alert('Demo request sent successfully to Slack!');
                } else {
                    throw new Error('Failed to send request');
                }
            } catch (error) {
                console.error('Error sending form:', error);
                alert('Failed to send request. Please try again.');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
            
            // Close modal and reset form
            closeDemoModal();
            this.reset();
        });

        // Access Modal Functions
        function openAccessModal() {
            const modal = document.getElementById('accessModal');
            const modalContent = modal.querySelector('.modal');
            modal.classList.remove('hidden');
            
            // Trigger animation after a small delay
            setTimeout(() => {
                modalContent.classList.add('show');
            }, 50);
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        function closeAccessModal() {
            const modal = document.getElementById('accessModal');
            const modalContent = modal.querySelector('.modal');
            
            modalContent.classList.remove('show');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Handle access form submission
        document.getElementById('accessForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                company: formData.get('company'),
                interest: formData.get('interest') || 'Not specified'
            };
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Send to Slack via API
                const response = await fetch('/api/demo-request', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data.firstName + ' ' + data.lastName,
                        email: data.email,
                        company: data.company,
                        product: data.interest
                    })
                });
                
                if (response.ok) {
                    alert('Access request sent successfully to Slack!');
                } else {
                    throw new Error('Failed to send request');
                }
            } catch (error) {
                console.error('Error sending form:', error);
                alert('Failed to send request. Please try again.');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
            
            // Close modal and reset form
            closeAccessModal();
            this.reset();
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDemoModal();
                closeAccessModal();
            }
        });

        // Navbar scroll behavior
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('nav-compact');
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.classList.remove('nav-compact');
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            }
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking nav links
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
            });
        });

        // Fade-in animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in sections
        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>
`;