import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Zap,
  Shield,
  Github,
  Play,
  Moon,
  Copy,
  Plus,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative Plus Icons */}
      <Plus className="absolute top-32 left-8 w-4 h-4 text-gray-700" />
      <Plus className="absolute top-32 right-8 w-4 h-4 text-gray-700" />

      {/* Announcement Banner */}
      <div className="border-b border-gray-800/50 bg-[#0a0a0a]/95 backdrop-blur relative z-10">
        <div className="container flex h-12 items-center justify-center">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500">
              Introducing Better Loyalty Infrastructure
            </span>
            <span className="text-gray-700">|</span>
            <Link
              href="/docs"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Join the waitlist →
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800/50 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">BL</span>
            </div>
            <span className="font-bold text-lg tracking-wide">
              BETTER-LOYALTY.
            </span>
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors relative"
            >
              hello_
              <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-400"></div>
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              docs
            </Link>
            <Link
              href="/changelogs"
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              changelogs
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              blogs
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              community
            </Link>
            <Link
              href="https://github.com/EijunnN/better-loyalty"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <Moon className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400">Own Your Loyalty</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                El Framework de Lealtad más{" "}
                <span className="text-emerald-400">comprehensivo</span> para{" "}
                <span className="text-blue-400">TypeScript</span>.
              </h1>

              <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm border border-gray-800/50 shadow-2xl">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">git:</span>
                    <span>(main)</span>
                    <span className="text-yellow-400">×</span>
                    <span>npm add better-loyalty</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 text-base"
                >
                  <Link href="/docs">GET STARTED</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white bg-transparent px-8 py-3 text-base"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create Loyalty System
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <div className="relative">
            <div className="bg-[#1a1a1a] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/50 bg-[#1a1a1a]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="px-3 py-1 bg-[#2a2a2a] text-white rounded-t text-xs border-b-2 border-blue-400">
                    loyalty.ts
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm bg-[#1a1a1a]">
                <div className="space-y-1">
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      01
                    </span>
                    <span>
                      <span className="text-purple-400">export</span>{" "}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">loyalty</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-emerald-400">betterLoyalty</span>
                      <span className="text-white">(</span>
                      <span className="text-yellow-300">{"{"}</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      02
                    </span>
                    <span className="ml-4">
                      <span className="text-red-300">database</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-emerald-400">Pool</span>
                      <span className="text-white">(</span>
                      <span className="text-yellow-300">{"{"}</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      03
                    </span>
                    <span className="ml-8">
                      <span className="text-red-300">connectionString</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-pink-400">DATABASE_URL</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      04
                    </span>
                    <span className="ml-4">
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-white">),</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      05
                    </span>
                    <span className="ml-4">
                      <span className="text-red-300">pointsAndRewards</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-yellow-300">{"{"}</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      06
                    </span>
                    <span className="ml-8">
                      <span className="text-red-300">enabled</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-orange-400">true</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      07
                    </span>
                    <span className="ml-4">
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      08
                    </span>
                    <span className="ml-4">
                      <span className="text-red-300">plugins</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-yellow-300">[</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      09
                    </span>
                    <span className="ml-8">
                      <span className="text-emerald-400">organization</span>
                      <span className="text-white">()</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      10
                    </span>
                    <span className="ml-8">
                      <span className="text-emerald-400">twoFactor</span>
                      <span className="text-white">()</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      11
                    </span>
                    <span className="ml-4">
                      <span className="text-yellow-300">]</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">
                      12
                    </span>
                    <span>
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-white">)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Demo Button */}
              <div className="absolute bottom-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-[#2a2a2a]/80 hover:bg-[#3a3a3a] text-white border border-gray-700/50 text-xs"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#1a1a1a]/50 border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 backdrop-blur">
            <CardHeader className="space-y-4 p-8">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-lg text-white mb-3">
                  Framework Agnostic
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">
                    Support for popular frameworks.
                  </strong>
                  <br />
                  Supports popular frameworks, including React, Vue, Svelte,
                  Astro, and more.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-[#1a1a1a]/50 border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 backdrop-blur">
            <CardHeader className="space-y-4 p-8">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-lg text-white mb-3">
                  Points & Rewards Authentication.
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">
                    Built-in support for points and rewards authentication.
                  </strong>
                  <br />
                  Built-in support for points and rewards authentication, with
                  session management and user tiers.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-[#1a1a1a]/50 border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 backdrop-blur">
            <CardHeader className="space-y-4 p-8">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-lg text-white mb-3">
                  Support multiple OAuth providers.
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">
                    Allow users to sign in with their accounts.
                  </strong>
                  <br />
                  Allow users to sign in with their accounts, including GitHub,
                  Google, Facebook, and more.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 bg-[#0a0a0a]/95 backdrop-blur relative z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">BL</span>
            </div>
            <span className="font-semibold text-white text-sm">
              Better Loyalty
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link
              href="/docs"
              className="hover:text-gray-200 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/EijunnN/better-loyalty"
              className="hover:text-gray-200 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
