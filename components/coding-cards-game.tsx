"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Trophy,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
} from "lucide-react"

type CodeChallenge = {
  id: number
  title: string
  description: string
  codeLines: string[]
  correctOrder: number[]
  difficulty: "easy" | "medium" | "hard"
  category: string
  points: number
  explanation: string
  howItWorks: string
}

const challenges: CodeChallenge[] = [
  {
    id: 1,
    title: "Imprime Hola Mundo",
    description: "Ordena el código para imprimir 'Hola Mundo' en la consola",
    codeLines: ['console.log("Hola Mundo")', "function saludar() {", "}", "saludar()"],
    correctOrder: [1, 0, 2, 3],
    difficulty: "easy",
    category: "Básico",
    points: 10,
    explanation:
      "Este código crea una función llamada 'saludar' que imprime un mensaje en la consola. Las funciones son bloques de código reutilizables que se ejecutan cuando las llamamos.",
    howItWorks:
      "Primero declaramos la función con 'function saludar()', luego dentro de las llaves {} colocamos el código que queremos ejecutar (console.log), cerramos la función con }, y finalmente la llamamos con 'saludar()' para que se ejecute.",
  },
  {
    id: 2,
    title: "Suma de Números",
    description: "Crea una función que sume dos números",
    codeLines: ["return a + b", "function sumar(a, b) {", "}", "const resultado = sumar(5, 3)"],
    correctOrder: [1, 0, 2, 3],
    difficulty: "easy",
    category: "Funciones",
    points: 15,
    explanation:
      "Las funciones pueden recibir parámetros (valores de entrada) y devolver resultados. Los parámetros 'a' y 'b' son como variables que reciben los valores que pasamos cuando llamamos la función.",
    howItWorks:
      "Declaramos 'function sumar(a, b)' con dos parámetros, usamos 'return a + b' para devolver la suma, cerramos la función, y luego la llamamos con 'sumar(5, 3)' donde 5 es 'a' y 3 es 'b'. El resultado (8) se guarda en la variable 'resultado'.",
  },
  {
    id: 3,
    title: "Loop del 1 al 5",
    description: "Imprime los números del 1 al 5 usando un bucle",
    codeLines: ["for (let i = 1; i <= 5; i++) {", "console.log(i)", "}"],
    correctOrder: [0, 1, 2],
    difficulty: "easy",
    category: "Bucles",
    points: 15,
    explanation:
      "Los bucles 'for' nos permiten repetir código múltiples veces. Son perfectos cuando sabemos exactamente cuántas veces queremos repetir algo.",
    howItWorks:
      "El bucle tiene tres partes: 'let i = 1' (inicio), 'i <= 5' (condición para continuar), e 'i++' (incremento). Comienza con i=1, verifica si i<=5, ejecuta console.log(i), incrementa i en 1, y repite hasta que i sea mayor que 5.",
  },
  {
    id: 4,
    title: "Verificar Edad",
    description: "Verifica si una persona es mayor de edad",
    codeLines: [
      'console.log("Mayor de edad")',
      "if (edad >= 18) {",
      "} else {",
      'console.log("Menor de edad")',
      "}",
      "const edad = 20",
    ],
    correctOrder: [5, 1, 0, 2, 3, 4],
    difficulty: "medium",
    category: "Condicionales",
    points: 20,
    explanation:
      "Las estructuras 'if-else' nos permiten tomar decisiones en el código. El programa ejecuta diferentes bloques de código dependiendo si una condición es verdadera o falsa.",
    howItWorks:
      "Primero definimos la variable 'edad' con valor 20. Luego 'if (edad >= 18)' verifica si la edad es mayor o igual a 18. Si es verdadero, ejecuta el primer console.log. Si es falso, ejecuta el código después de 'else'. En este caso, como 20 >= 18, imprime 'Mayor de edad'.",
  },
  {
    id: 5,
    title: "Filtrar Array",
    description: "Filtra los números mayores a 5 de un array",
    codeLines: [
      "const numeros = [2, 6, 3, 8, 4, 9]",
      "const mayores = numeros.filter((num) => {",
      "return num > 5",
      "})",
      "console.log(mayores)",
    ],
    correctOrder: [0, 1, 2, 3, 4],
    difficulty: "medium",
    category: "Arrays",
    points: 25,
    explanation:
      "El método 'filter' crea un nuevo array con todos los elementos que cumplan una condición. Es una forma elegante de seleccionar elementos específicos de un array sin modificar el original.",
    howItWorks:
      "Creamos un array 'numeros' con 6 valores. El método 'filter' recorre cada número (llamado 'num'), evalúa si 'num > 5', y si es verdadero, incluye ese número en el nuevo array 'mayores'. El resultado será [6, 8, 9] porque son los únicos números mayores a 5.",
  },
  {
    id: 6,
    title: "Crear Objeto Persona",
    description: "Crea un objeto con propiedades y un método",
    codeLines: [
      "const persona = {",
      'nombre: "Ana",',
      "edad: 25,",
      "saludar: function() {",
      "return `Hola, soy ${this.nombre}`",
      "}",
      "}",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
    difficulty: "medium",
    category: "Objetos",
    points: 25,
    explanation:
      "Los objetos nos permiten agrupar datos relacionados (propiedades) y funciones (métodos) en una sola estructura. 'this' se refiere al objeto actual y nos permite acceder a sus propiedades.",
    howItWorks:
      "Creamos un objeto 'persona' con llaves {}. Dentro definimos propiedades (nombre y edad) con sus valores, y un método 'saludar' que es una función. Usamos template literals (``) y ${this.nombre} para insertar el valor de la propiedad 'nombre' en el string. Al llamar persona.saludar() retornará 'Hola, soy Ana'.",
  },
  {
    id: 7,
    title: "Promesa Asíncrona",
    description: "Crea una promesa que se resuelve después de 1 segundo",
    codeLines: [
      "const esperar = new Promise((resolve) => {",
      "setTimeout(() => {",
      'resolve("Completado")',
      "}, 1000)",
      "})",
      "esperar.then((msg) => console.log(msg))",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    difficulty: "hard",
    category: "Async",
    points: 30,
    explanation:
      "Las Promesas manejan operaciones asíncronas (que toman tiempo). Permiten que el código continúe ejecutándose mientras esperamos que algo termine, como una petición a un servidor o un temporizador.",
    howItWorks:
      "Creamos una Promise que recibe una función con 'resolve'. Dentro usamos 'setTimeout' para esperar 1000ms (1 segundo). Después de ese tiempo, llamamos 'resolve(\"Completado\")' para indicar que la promesa terminó exitosamente. Con '.then()' capturamos el resultado y lo imprimimos. El código no se bloquea durante ese segundo de espera.",
  },
  {
    id: 8,
    title: "Map y Reduce",
    description: "Duplica los números y suma el resultado",
    codeLines: [
      "const numeros = [1, 2, 3, 4, 5]",
      "const duplicados = numeros.map(n => n * 2)",
      "const suma = duplicados.reduce((acc, n) => {",
      "return acc + n",
      "}, 0)",
      "console.log(suma)",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    difficulty: "hard",
    category: "Arrays Avanzado",
    points: 35,
    explanation:
      "'map' transforma cada elemento de un array aplicando una función, y 'reduce' combina todos los elementos en un solo valor. Son métodos muy poderosos para procesar datos.",
    howItWorks:
      "Primero 'map' recorre [1,2,3,4,5] y multiplica cada número por 2, creando [2,4,6,8,10]. Luego 'reduce' toma un acumulador (acc) que inicia en 0, y va sumando cada número (n) al acumulador. Primera iteración: 0+2=2, segunda: 2+4=6, tercera: 6+6=12, cuarta: 12+8=20, quinta: 20+10=30. Resultado final: 30.",
  },
]

const difficultyColors = {
  easy: "bg-chart-2 text-white",
  medium: "bg-chart-5 text-white",
  hard: "bg-chart-4 text-white",
}

const difficultyLabels = {
  easy: "Fácil",
  medium: "Medio",
  hard: "Difícil",
}

interface UserData {
  username: string
  email: string
  password: string
  score: number
  completedChallenges: number[]
  level: number
  createdAt: string
}

interface CodingCardsGameProps {
  currentUser?: UserData | null
  onProgressUpdate?: (score: number, completedChallenges: number[], level: number) => void
}

export default function CodingCardsGame({ currentUser, onProgressUpdate }: CodingCardsGameProps) {
  const [currentChallenge, setCurrentChallenge] = useState<CodeChallenge | null>(null)
  const [userOrder, setUserOrder] = useState<number[]>([])
  const [availableCards, setAvailableCards] = useState<number[]>([])
  const [score, setScore] = useState(currentUser?.score || 0)
  const [level, setLevel] = useState(currentUser?.level || 1)
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState<number[]>(currentUser?.completedChallenges || [])
  const [showExplanation, setShowExplanation] = useState(false)

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setLevel(1)
    setCompletedChallenges([])
    loadChallenge(0)
  }

  const loadChallenge = (index: number) => {
    if (index >= challenges.length) {
      setCurrentChallenge(null)
      return
    }

    const challenge = challenges[index]
    setCurrentChallenge(challenge)
    setUserOrder([])
    setAvailableCards(Array.from({ length: challenge.codeLines.length }, (_, i) => i).sort(() => Math.random() - 0.5))
    setFeedback(null)
    setAttempts(0)
  }

  const handleCardClick = (cardIndex: number) => {
    if (feedback) return

    setUserOrder([...userOrder, cardIndex])
    setAvailableCards(availableCards.filter((i) => i !== cardIndex))
  }

  const handleRemoveCard = (position: number) => {
    if (feedback) return

    const cardIndex = userOrder[position]
    setUserOrder(userOrder.filter((_, i) => i !== position))
    setAvailableCards([...availableCards, cardIndex])
  }

  const checkSolution = () => {
    if (!currentChallenge) return
    if (userOrder.length !== currentChallenge.correctOrder.length) return

    const isCorrect = userOrder.every((val, idx) => val === currentChallenge.correctOrder[idx])

    setAttempts(attempts + 1)

    if (isCorrect) {
      setFeedback("correct")
      setShowExplanation(true)
      const earnedPoints = Math.max(currentChallenge.points - attempts * 5, 5)
      const newScore = score + earnedPoints
      const newCompletedChallenges = [...completedChallenges, currentChallenge.id]
      setScore(newScore)
      setCompletedChallenges(newCompletedChallenges)
      
      if (onProgressUpdate) {
        onProgressUpdate(newScore, newCompletedChallenges, level)
      }
    } else {
      setFeedback("incorrect")
      setShowExplanation(true)
    }
  }

  const continueToNext = () => {
    setShowExplanation(false)
    const newLevel = level + 1
    setLevel(newLevel)
    loadChallenge(level)
    
    if (onProgressUpdate) {
      onProgressUpdate(score, completedChallenges, newLevel)
    }
  }

  const resetChallenge = () => {
    if (!currentChallenge) return
    setUserOrder([])
    setAvailableCards(
      Array.from({ length: currentChallenge.codeLines.length }, (_, i) => i).sort(() => Math.random() - 0.5),
    )
    setFeedback(null)
    setShowExplanation(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Code2 className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="font-sans text-4xl font-bold text-balance md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CodeBuilder
            </h1>
            <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground text-balance">
            Aprende programación armando código línea por línea
          </p>
        </div>

        {/* Stats Bar */}
        {gameStarted && currentChallenge && (
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <Badge variant="default" className="px-4 py-2 text-base gap-2 bg-primary">
              <Target className="h-4 w-4" />
              Nivel {level}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base gap-2">
              <Trophy className="h-4 w-4" />
              {score} puntos
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base gap-2">
              <Zap className="h-4 w-4" />
              Intentos: {attempts}
            </Badge>
            <Button onClick={startGame} variant="outline" size="sm" className="gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Reiniciar
            </Button>
          </div>
        )}

        {/* Start Screen */}
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <Card className="p-8 shadow-xl max-w-2xl border-2">
              <div className="text-center mb-6">
                <h2 className="mb-4 text-3xl font-bold text-card-foreground">¿Listo para el desafío?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Arrastra y ordena las líneas de código para resolver cada desafío. Completa todos los niveles para
                  convertirte en un maestro del código.
                </p>
              </div>

              <div className="grid gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">8 Desafíos Progresivos</h3>
                    <p className="text-sm text-muted-foreground">Desde conceptos básicos hasta programación avanzada</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Trophy className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Sistema de Puntos</h3>
                    <p className="text-sm text-muted-foreground">Gana más puntos resolviendo en menos intentos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Aprende Haciendo</h3>
                    <p className="text-sm text-muted-foreground">La mejor forma de aprender es practicando</p>
                  </div>
                </div>
              </div>

              <Button onClick={startGame} size="lg" className="w-full gap-2 text-lg py-6">
                <Sparkles className="h-5 w-5" />
                Comenzar Desafío
              </Button>
            </Card>
          </div>
        ) : currentChallenge ? (
          <div className="space-y-6">
            {/* Challenge Info */}
            <Card className="p-6 shadow-lg border-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-card-foreground">{currentChallenge.title}</h2>
                    <Badge className={difficultyColors[currentChallenge.difficulty]}>
                      {difficultyLabels[currentChallenge.difficulty]}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{currentChallenge.description}</p>
                </div>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {currentChallenge.category}
                </Badge>
              </div>
            </Card>

            {/* Code Building Area */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Available Cards */}
              <Card className="p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Líneas Disponibles
                </h3>
                <div className="space-y-3 min-h-[200px]">
                  {availableCards.map((cardIndex) => (
                    <button
                      key={cardIndex}
                      onClick={() => handleCardClick(cardIndex)}
                      className="w-full p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-2 border-border hover:border-primary transition-all duration-200 text-left group"
                    >
                      <code className="font-mono text-sm text-foreground block group-hover:text-primary transition-colors">
                        {currentChallenge.codeLines[cardIndex]}
                      </code>
                    </button>
                  ))}
                </div>
              </Card>

              {/* User Solution */}
              <Card className="p-6 shadow-lg border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-secondary" />
                  Tu Solución
                </h3>
                <div className="space-y-2 min-h-[200px] mb-4">
                  {userOrder.length === 0 ? (
                    <div className="flex items-center justify-center h-[200px] text-muted-foreground text-sm border-2 border-dashed border-border rounded-lg">
                      Arrastra las líneas aquí para armar el código
                    </div>
                  ) : (
                    userOrder.map((cardIndex, position) => (
                      <button
                        key={position}
                        onClick={() => handleRemoveCard(position)}
                        className="w-full p-4 rounded-lg bg-card border-2 border-primary/30 hover:border-destructive hover:bg-destructive/10 transition-all duration-200 text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-muted-foreground min-w-[20px]">{position + 1}</span>
                          <code className="font-mono text-sm text-foreground flex-1">
                            {currentChallenge.codeLines[cardIndex]}
                          </code>
                          <XCircle className="h-4 w-4 text-muted-foreground group-hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={checkSolution}
                    disabled={userOrder.length !== currentChallenge.codeLines.length || feedback !== null}
                    className="flex-1 gap-2"
                    size="lg"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    Verificar Solución
                  </Button>
                  <Button onClick={resetChallenge} variant="outline" size="lg">
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Feedback */}
            {feedback && showExplanation && (
              <Card
                className={`p-6 shadow-xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                  feedback === "correct" ? "bg-chart-2/10 border-chart-2" : "bg-destructive/10 border-destructive"
                }`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    {feedback === "correct" ? (
                      <>
                        <CheckCircle2 className="h-12 w-12 text-chart-2 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-chart-2 mb-1">¡Excelente!</h3>
                          <p className="text-foreground">
                            Has completado el desafío. +{Math.max(currentChallenge.points - attempts * 5, 5)} puntos
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-12 w-12 text-destructive flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-destructive mb-1">No es correcto</h3>
                          <p className="text-foreground">Veamos la solución correcta y aprendamos de ella</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Show correct solution if incorrect */}
                  {feedback === "incorrect" && (
                    <div className="bg-background/50 rounded-lg p-4 border-2 border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-lg">Solución Correcta:</h4>
                      </div>
                      <div className="space-y-2">
                        {currentChallenge.correctOrder.map((cardIndex, position) => (
                          <div key={position} className="flex items-center gap-3 p-3 rounded bg-muted/50">
                            <span className="text-xs font-bold text-muted-foreground min-w-[20px]">{position + 1}</span>
                            <code className="font-mono text-sm text-foreground">
                              {currentChallenge.codeLines[cardIndex]}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Explanation */}
                  <div className="bg-background/50 rounded-lg p-4 border-2 border-primary/30">
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">¿Por qué funciona así?</h4>
                        <p className="text-foreground leading-relaxed">{currentChallenge.explanation}</p>
                      </div>
                    </div>
                  </div>

                  {/* How it works */}
                  <div className="bg-background/50 rounded-lg p-4 border-2 border-secondary/30">
                    <div className="flex items-start gap-3 mb-3">
                      <Lightbulb className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">¿Cómo funciona paso a paso?</h4>
                        <p className="text-foreground leading-relaxed">{currentChallenge.howItWorks}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {feedback === "correct" ? (
                      <Button onClick={continueToNext} size="lg" className="flex-1 gap-2">
                        <Sparkles className="h-5 w-5" />
                        Continuar al Siguiente
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={resetChallenge}
                          variant="outline"
                          size="lg"
                          className="flex-1 gap-2 bg-transparent"
                        >
                          <RotateCcw className="h-5 w-5" />
                          Intentar de Nuevo
                        </Button>
                        <Button onClick={continueToNext} size="lg" className="flex-1 gap-2">
                          <Sparkles className="h-5 w-5" />
                          Siguiente Desafío
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <Card className="p-8 shadow-xl max-w-2xl border-2 border-primary">
              <div className="text-center">
                <Trophy className="mx-auto mb-6 h-20 w-20 text-primary animate-bounce" />
                <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ¡Felicitaciones!
                </h2>
                <p className="text-xl text-muted-foreground mb-6">Has completado todos los desafíos</p>
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">{score}</div>
                  <div className="text-sm text-muted-foreground">Puntos Totales</div>
                </div>
                <Button onClick={startGame} size="lg" className="gap-2 text-lg px-8">
                  <RotateCcw className="h-5 w-5" />
                  Jugar de Nuevo
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
