import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  BookOpen,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Better Loyalty</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="/docs"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/EijunnN/better-loyalty"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Framework Declarativo
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            El Framework de Lealtad que los{" "}
            <span className="text-primary">Desarrolladores</span> Aman
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Construye sistemas de fidelización complejos y robustos sin la
            complejidad habitual. Define tus reglas de negocio de forma
            declarativa y deja que el framework orqueste la magia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="group">
              <Link href="/docs">
                Comenzar
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/EijunnN/better-loyalty">
                <Github className="mr-2 h-4 w-4" />
                Ver en GitHub
              </Link>
            </Button>
          </div>

          {/* Code Preview */}
          <div className="bg-muted/50 rounded-lg p-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">
                loyaltyRules.ts
              </span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`import { LoyaltyRule } from "better-loyalty";

export const loyaltyRules: LoyaltyRule[] = [
  {
    name: "Puntos por compra > $10",
    event: "purchase_completed",
    condition: (ctx) => ctx.payload.amount > 10,
    action: (ctx) => ({
      points: Math.floor(ctx.payload.amount),
      actionName: \`Compra de $\${ctx.payload.amount}\`,
    }),
  },
  {
    name: "Bonus por reseña de calidad",
    event: "review_created", 
    condition: (ctx) => ctx.payload.rating >= 4,
    action: () => ({ points: 50, actionName: "Reseña de calidad" }),
  },
];`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diseñado para Desarrolladores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Olvídate de esparcir lógica de if/else por toda tu aplicación.
            Define tus reglas una vez y déjate sorprender.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Motor de Reglas</CardTitle>
              <CardDescription>
                Define tu lógica de negocio en un formato legible y
                centralizado. Sin más if/else esparcidos por tu código.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Agnóstico a Todo</CardTitle>
              <CardDescription>
                Funciona con cualquier base de datos y cualquier sistema de
                autenticación. Solo implementa la interfaz y listo.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Totalmente Reactivo</CardTitle>
              <CardDescription>
                Reacciona a eventos como tier_changed para construir
                experiencias dinámicas y notificaciones en tiempo real.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            De Imperativo a Declarativo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ve la diferencia entre el enfoque tradicional y el modo
            better-loyalty
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <span className="mr-2">👎</span>
                El Modo Tradicional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto bg-background p-4 rounded border">
                <code>{`// En tu API de creación de reseñas...
async function createReview(data) {
  const review = await db.reviews.create(data);

  if (review.rating >= 4 && review.text.length > 50) {
    const userProfile = await db.users.find(review.userId);
    const newPoints = userProfile.points + 50;
    await db.users.update(review.userId, { points: newPoints });

    // ¿Y si ahora sube de nivel? 
    // Más if/else aquí...
  }
  return review;
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                <span className="mr-2">👍</span>
                El Modo better-loyalty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto bg-background p-4 rounded border">
                <code>{`// Tu API de creación de reseñas...
async function createReview(data) {
  const review = await db.reviews.create(data);

  // Anunciamos que un evento ha ocurrido. 
  // Eso es todo.
  await loyaltySystem.processEvent({
    userId: review.userId,
    event: "review_created",
    payload: { 
      rating: review.rating, 
      textLength: review.text.length 
    },
  });

  return review;
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tiene tu sistema funcionando en menos de 5 minutos con nuestra guía
            paso a paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/docs">
                <BookOpen className="mr-2 h-4 w-4" />
                Leer Documentación
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/EijunnN/better-loyalty">
                <Github className="mr-2 h-4 w-4" />
                Ver en GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-semibold">Better Loyalty</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/EijunnN/better-loyalty"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
