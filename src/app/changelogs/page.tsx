import Link from "next/link";
import { Button } from "@/components/ui/button"; // Asumo que tienes este componente
import {
  Github,
  BookOpen,
  Users,
  Moon,
  Plus,
  Rocket,
  Package,
  BrainCircuit,
  Zap,
  Wand2,
} from "lucide-react";

// Componente helper para las etiquetas de cambio, asegurando consistencia.
const ChangeTag = ({
  type,
}: {
  type: "Breaking" | "Feature" | "Fix" | "Docs" | "Refactor";
}) => {
  const styles = {
    Breaking: "bg-red-900/60 text-red-300 border-red-600/60",
    Feature: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    Fix: "bg-orange-900/50 text-orange-300 border-orange-700/50",
    Docs: "bg-green-900/50 text-green-300 border-green-700/50",
    Refactor: "bg-purple-900/50 text-purple-300 border-purple-700/50",
  };
  return (
    <span
      className={`mr-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${styles[type]}`}
    >
      {type}
    </span>
  );
};

export default function ChangelogsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Íconos decorativos */}
      <Plus className="absolute top-32 left-8 w-4 h-4 text-gray-700" />
      <Plus className="absolute top-32 right-8 w-4 h-4 text-gray-700" />

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

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna Izquierda - Info */}
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

          {/* Columna Derecha - Timeline del Changelog */}
          <div className="relative">
            <div className="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-transparent"></div>
            <div className="space-y-16">
              {/* v2.0.0 - API Rediseñada */}
              <div className="relative">
                <div className="flex items-center mb-6">
                  <span className="text-gray-400 text-sm w-24 text-right mr-8">
                    Jul 29, 2025
                  </span>
                  <div className="w-4 h-4 bg-purple-400 rounded-full ring-4 ring-purple-900/50 absolute left-32 transform -translate-x-1/2 flex items-center justify-center">
                    <Wand2 className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="ml-40">
                  <h3 className="text-xl font-semibold mb-2">
                    better-loyalty@2.0.0
                  </h3>
                  <p className="text-purple-300 font-medium mb-6">
                    ✨ API Rediseñada para una Experiencia de Élite (DX)
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center space-x-2 text-gray-300 font-medium mb-3">
                        <Zap className="w-4 h-4 text-red-400" />
                        <span>Breaking Changes</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Breaking" />
                          La clase `BetterLoyalty` ya no es la API pública. Se
                          reemplaza por un sistema de factoría más simple.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Breaking" />
                          `processEvent` se renombra a `trigger` con una firma
                          más simple: `trigger(eventName, userId, payload)`.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Breaking" />
                          La definición de reglas ya no es un array de objetos,
                          sino un único objeto de configuración para una mejor
                          inferencia de tipos.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center space-x-2 text-gray-300 font-medium mb-3">
                        <BrainCircuit className="w-4 h-4 text-blue-400" />
                        <span>Nuevas Características y Mejoras</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Se introduce `createLoyaltySystem()` como el único
                          punto de entrada para configurar el framework.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Nueva función `defineRules()` que proporciona
                          inferencia de tipos automática entre el nombre del
                          evento y su `payload`.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Refactor" />
                          Las funciones `action` y `condition` ahora reciben
                          argumentos desestructurados (`payload`, `userId`) en
                          lugar de un objeto `context`, simplificando su uso.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* v1.0.0 - Lanzamiento Inicial */}
              <div className="relative">
                <div className="flex items-center mb-6">
                  <span className="text-gray-400 text-sm w-24 text-right mr-8">
                    Jul 28, 2025
                  </span>
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
                        <span>Características Principales</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Se introduce el **Motor de Reglas Declarativo** para
                          centralizar la lógica de negocio.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Implementación de la interfaz `IDatabaseAdapter` para
                          ser **agnóstico a la base de datos**.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Se añade un **Sistema de Eventos** (`on`/`off`) para
                          reaccionar a `points_updated` y `tier_changed`.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center space-x-2 text-gray-300 font-medium mb-3">
                        <Package className="w-4 h-4 text-green-400" />
                        <span>Paquete y Herramientas</span>
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Docs" />
                          Lanzamiento del sitio de documentación inicial
                          construido con **Fumadocs**.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Configuración de `tsup` para empaquetar en formatos
                          CJS y ESM.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <ChangeTag type="Feature" />
                          Suite de tests inicial con **Vitest** cubriendo la
                          lógica principal.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
