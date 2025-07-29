import Link from "next/link";
import { Button } from "@/components/ui/button"; // Asumo que tienes un componente Button
import {
  Github,
  BookOpen,
  Users,
  Moon,
  Plus,
  Rocket,
  Package,
  BrainCircuit,
} from "lucide-react";

// Un pequeño componente para las etiquetas de cambio, para reutilizarlo
const ChangeTag = ({
  type,
}: {
  type: "Feature" | "Fix" | "Docs" | "Refactor";
}) => {
  const styles = {
    Feature: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    Fix: "bg-red-900/50 text-red-300 border-red-700/50",
    Docs: "bg-green-900/50 text-green-300 border-green-700/50",
    Refactor: "bg-purple-900/50 text-purple-300 border-purple-700/50",
  };
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${styles[type]}`}
    >
      {type}
    </span>
  );
};

export default function ChangelogsPage() {
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

      {/* Header - Sin cambios, tu diseño es excelente */}
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
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              hello_
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              docs
            </Link>
            <Link
              href="/changelogs"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors relative"
            >
              changelogs
              <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-400"></div>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info (Sin cambios, tu diseño es excelente) */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Toda nuestra evolución, documentada aquí.
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                `better-loyalty` es una librería para TypeScript que provee un
                sistema de lealtad completo, diseñado para hacer la
                implementación más fácil, segura y flexible.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white bg-transparent px-6 py-3 justify-start"
              >
                <Link href="/docs" className="flex items-center">
                  <BookOpen className="mr-3 h-4 w-4" /> Documentación
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white bg-transparent px-6 py-3 justify-start"
              >
                <Link
                  href="https://github.com/EijunnN/better-loyalty"
                  className="flex items-center"
                >
                  <Github className="mr-3 h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white bg-transparent px-6 py-3 justify-start"
              >
                <Link href="/community" className="flex items-center">
                  <Users className="mr-3 h-4 w-4" /> Comunidad
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Changelog Timeline (AQUÍ ESTÁ LA MEJORA) */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-transparent"></div>

            <div className="space-y-16">
              {/* Version 1.0.0 - Lanzamiento Inicial */}
              <div className="relative">
                <div className="flex items-center mb-6">
                  <span className="text-gray-400 text-sm w-24 text-right mr-8">
                    Jul 28, 2025
                  </span>
                  {/* El punto de la timeline ahora es más visible y representa un hito */}
                  <div className="w-4 h-4 bg-blue-400 rounded-full ring-4 ring-blue-900/50 absolute left-32 transform -translate-x-1/2 flex items-center justify-center">
                    <Rocket className="w-2 h-2 text-white" />
                  </div>
                </div>

                <div className="ml-40">
                  <h3 className="text-xl font-semibold mb-2">
                    better-loyalty@1.0.0
                  </h3>
                  <p className="text-blue-300 font-medium mb-6">
                    🚀 Lanzamiento Inicial
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center space-x-2 text-gray-300 font-medium mb-3">
                        <BrainCircuit className="w-4 h-4 text-purple-400" />
                        <span>Características Principales (Core Features)</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Se introduce el **Motor
                          de Reglas Declarativo** para centralizar la lógica de
                          negocio.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Implementación de la
                          interfaz `IDatabaseAdapter` para ser **agnóstico a la
                          base de datos**.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Se añade un **Sistema de
                          Eventos** (`on`/`off`) para reaccionar a
                          `points_updated` y `tier_changed`.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Módulos separados para la
                          gestión de Puntos (`PointsModule`) y Niveles
                          (`TiersModule`).
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center space-x-2 text-gray-300 font-medium mb-3">
                        <Package className="w-4 h-4 text-green-400" />
                        <span>Paquete y Herramientas (Tooling)</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Docs" /> Lanzamiento del sitio de
                          documentación inicial construido con **Fumadocs**.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Configuración de `tsup`
                          para empaquetar en formatos CJS y ESM.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" /> Suite de tests inicial
                          con **Vitest** cubriendo la lógica principal.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aquí empezarías a añadir futuras versiones, por ejemplo v1.0.1 */}
              <div className="relative opacity-50">
                <div className="flex items-center mb-6">
                  <span className="text-gray-400 text-sm w-24 text-right mr-8">
                    Próximamente...
                  </span>
                  <div className="w-2 h-2 bg-gray-600 rounded-full absolute left-32 transform -translate-x-1/2"></div>
                </div>
                <div className="ml-40">
                  <h3 className="text-xl font-semibold mb-4 text-gray-500">
                    Próximas Mejoras
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Estamos trabajando en adaptadores pre-construidos y más...
                    ¡Mantente al tanto!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Sin cambios) */}
      <footer className="border-t border-gray-800/30 bg-[#0a0a0a]/95 backdrop-blur relative z-10 mt-24">
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
