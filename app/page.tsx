"use client"

import { useState, useEffect } from "react"
import CodingCardsGame from "@/components/coding-cards-game"
import AuthModal from "@/components/auth-modal"
import Image from "next/image"
import { User, LogOut, Trophy, Target, Zap } from "lucide-react"

interface UserData {
  username: string
  email: string
  password: string
  score: number
  completedChallenges: number[]
  level: number
  createdAt: string
}

export default function Home() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("codecards_current_user")
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = (user: UserData) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    localStorage.removeItem("codecards_current_user")
    setCurrentUser(null)
    setShowUserMenu(false)
  }

  const updateUserProgress = (score: number, completedChallenges: number[], level: number) => {
    if (!currentUser) return

    const updatedUser = {
      ...currentUser,
      score: Math.max(currentUser.score, score),
      completedChallenges: [...new Set([...currentUser.completedChallenges, ...completedChallenges])],
      level: Math.max(currentUser.level, level)
    }

    setCurrentUser(updatedUser)
    localStorage.setItem("codecards_current_user", JSON.stringify(updatedUser))

    const users = JSON.parse(localStorage.getItem("codecards_users") || "[]")
    const userIndex = users.findIndex((u: UserData) => u.email === currentUser.email)
    if (userIndex !== -1) {
      users[userIndex] = updatedUser
      localStorage.setItem("codecards_users", JSON.stringify(users))
    }
  }
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <header className="w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                {"</>"}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CodeCards</h1>
                <p className="text-sm text-muted-foreground">Aprende programación jugando</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#juego" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Jugar
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#caracteristicas"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Características
              </a>
              <a
                href="/manual"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Manual
              </a>
              
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                      {currentUser.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-sm">{currentUser.username}</span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4 z-50">
                      <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg font-bold">
                          {currentUser.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{currentUser.username}</p>
                          <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Trophy className="h-4 w-4" />
                            Puntos totales
                          </span>
                          <span className="font-semibold text-foreground">{currentUser.score}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Target className="h-4 w-4" />
                            Desafios completados
                          </span>
                          <span className="font-semibold text-foreground">{currentUser.completedChallenges.length}/8</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Zap className="h-4 w-4" />
                            Nivel actual
                          </span>
                          <span className="font-semibold text-foreground">{currentUser.level}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors text-sm font-medium"
                      >
                        <LogOut className="h-4 w-4" />
                        Cerrar sesion
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium text-sm">Iniciar sesion</span>
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Juego Educativo Interactivo
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-foreground">
                Aprende a programar armando código línea por línea
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Domina conceptos de programación desde lo básico hasta lo avanzado con desafíos interactivos que te
                explican cómo y por qué funciona cada línea de código
              </p>
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="#juego"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Comenzar a jugar
                </a>
                <a
                  href="#como-funciona"
                  className="px-8 py-4 rounded-lg bg-white dark:bg-gray-800 text-foreground font-semibold border border-border hover:bg-muted transition-colors"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/codecards-hero.png"
                alt="Logo de CodeCards - Juego de cartas de programación"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div id="juego" className="mb-20">
            <CodingCardsGame 
              currentUser={currentUser}
              onProgressUpdate={updateUserProgress}
            />
          </div>

          <AuthModal 
            isOpen={showAuthModal} 
            onClose={() => setShowAuthModal(false)} 
            onLogin={handleLogin}
          />

          <section id="como-funciona" className="mb-20 text-left">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-foreground">¿Cómo funciona?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tres simples pasos para comenzar tu aventura de programación
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative mb-6 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/clean-interface-showing-challenge-selection-menu-w.jpg"
                    alt="Selección de desafíos"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-2xl mb-4">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-2">Selecciona un desafío</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Elige entre 8 desafíos progresivos que van desde conceptos básicos como variables hasta temas
                  avanzados como promesas asíncronas
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative mb-6 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/drag-and-drop-interface-with-code-blocks-being-org.jpg"
                    alt="Arrastra y ordena código"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-white font-bold text-2xl mb-4">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-2">Arrastra y ordena</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Arrastra las líneas de código desordenadas y colócalas en el orden correcto para formar un programa
                  funcional
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative mb-6 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/educational-feedback-with-checkmark-and-detailed-c.jpg"
                    alt="Aprende del feedback"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-2xl mb-4">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-2">Aprende del feedback</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Recibe explicaciones detalladas sobre cómo funciona el código cuando aciertas, o revisa la solución y
                  aprende de tus errores
                </p>
              </div>
            </div>
          </section>

          <section id="caracteristicas" className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-foreground">Características</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Todo lo que necesitas para aprender programación de forma divertida
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/progressive-learning-path-with-ascending-levels-an.jpg"
                    alt="8 Desafíos progresivos"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">8 Desafíos Progresivos</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Desde variables básicas hasta programación asíncrona, cada desafío construye sobre el anterior para un
                  aprendizaje sólido
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/scoring-and-points-system-with-rewards-and-achieve.jpg"
                    alt="Sistema de puntos"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Sistema de Puntos Inteligente</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Gana más puntos resolviendo en menos intentos. El sistema recompensa la eficiencia y el pensamiento
                  lógico
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/detailed-educational-explanation-with-books-and-li.jpg"
                    alt="Explicaciones detalladas"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Explicaciones Pedagógicas</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Aprende no solo qué hace el código, sino por qué funciona así y cómo cada línea contribuye al
                  resultado final
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/intuitive-drag-and-drop-interface-with-smooth-inte.jpg"
                    alt="Interfaz intuitiva"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Interfaz Drag & Drop</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sistema intuitivo de arrastrar y soltar que hace el aprendizaje táctil y divertido, sin frustraciones
                  técnicas
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-border">
                <div className="text-4xl mb-3">🚀</div>
                <h5 className="font-semibold mb-2">Aprende Rápido</h5>
                <p className="text-sm text-muted-foreground">Progreso visible desde el primer desafío</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-border">
                <div className="text-4xl mb-3">🎯</div>
                <h5 className="font-semibold mb-2">Práctica Real</h5>
                <p className="text-sm text-muted-foreground">Código JavaScript funcional y aplicable</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-border">
                <div className="text-4xl mb-3">💡</div>
                <h5 className="font-semibold mb-2">Comprensión Profunda</h5>
                <p className="text-sm text-muted-foreground">Entiende el "por qué" de cada concepto</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-border">
                <div className="text-4xl mb-3">🎮</div>
                <h5 className="font-semibold mb-2">Diversión Garantizada</h5>
                <p className="text-sm text-muted-foreground">Aprender nunca fue tan entretenido</p>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="w-full border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  {"</>"}
                </div>
                <span className="font-bold text-xl">CodeCards</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La forma más divertida e interactiva de aprender programación desde cero hasta nivel avanzado
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#juego" className="hover:text-primary transition-colors">
                    Jugar ahora
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-primary transition-colors">
                    Guía de uso
                  </a>
                </li>
                <li>
                  <a href="#caracteristicas" className="hover:text-primary transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="/manual" className="hover:text-primary transition-colors">
                    Manual completo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 CodeCards. Creado con pasión por la educación en programación.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
