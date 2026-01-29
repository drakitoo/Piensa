import Image from "next/image"

export default function ManualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <header className="w-full border-b border-sky-200/50 dark:border-sky-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {"</>"}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Manual de CodeCards</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Guia completa del juego</p>
              </div>
            </div>
            <a
              href="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
            >
              Volver al juego
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 p-10 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
            </div>
            <div className="relative flex items-center gap-6">
              <div className="hidden md:block">
                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl shadow-inner">
                  📖
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-3">Bienvenido a CodeCards</h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Este manual te guiara paso a paso para aprovechar al maximo tu experiencia de aprendizaje interactivo
                  de programacion
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-4xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Indice
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="#introduccion"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-sky-800 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-sky-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-sky-600 dark:text-sky-400 group-hover:text-sky-500">
                  1. Introduccion
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Que es CodeCards y sus objetivos</p>
              </a>
              <a
                href="#como-jugar"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
                  2. Como jugar
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Instrucciones paso a paso</p>
              </a>
              <a
                href="#desafios"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100 dark:hover:shadow-amber-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400 group-hover:text-amber-500">
                  3. Desafios
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Descripcion de cada nivel</p>
              </a>
              <a
                href="#sistema-puntos"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-500">
                  4. Sistema de puntos
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Como se calcula tu puntuacion</p>
              </a>
              <a
                href="#aprendizaje"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400 group-hover:text-teal-500">
                  5. Sistema de aprendizaje
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Explicaciones y feedback</p>
              </a>
              <a
                href="#consejos"
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-100 dark:hover:shadow-orange-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-orange-600 dark:text-orange-400 group-hover:text-orange-500">
                  6. Consejos y trucos
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Tips para mejorar tu experiencia</p>
              </a>
            </div>
          </section>

          <section id="introduccion" className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">1. Introduccion</h2>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/modern-programming-learning-journey-with-laptop-an.jpg"
                  alt="Introduccion a CodeCards"
                  width={900}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">Que es CodeCards?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                CodeCards es un juego educativo interactivo diseñado para enseñar programacion de manera practica y
                divertida. En lugar de solo leer sobre conceptos de programacion, los pondras en practica ordenando
                lineas de codigo reales.
              </p>

              <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">Objetivos del juego</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                  Aprender conceptos fundamentales de programacion desde cero
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                  Desarrollar logica de programacion ordenando codigo correctamente
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                  Entender como y por que funciona cada linea de codigo
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                  Progresar desde nivel basico hasta conceptos avanzados
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                  Aprender de los errores con explicaciones detalladas
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">Para quien es este juego?</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-200 dark:border-sky-800">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-2xl mb-3">🎓</div>
                  <h4 className="font-semibold mb-2 text-sky-700 dark:text-sky-300">Principiantes</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Si nunca has programado, este juego te introduce a los conceptos basicos de forma visual
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-2xl mb-3">💻</div>
                  <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">Estudiantes</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Refuerza lo aprendido en clase con ejercicios practicos e interactivos
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-2xl mb-3">🔄</div>
                  <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300">Repaso rapido</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Ideal para repasar conceptos fundamentales de JavaScript de forma entretenida
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="como-jugar" className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">2. Cómo jugar</h2>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 1: Selecciona un desafío</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground mb-3">
                    Al iniciar el juego, verás una lista de 8 desafíos organizados por dificultad:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                        B
                      </span>
                      <span>Básico: Variables y funciones simples</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">
                        M
                      </span>
                      <span>Medio: Control de flujo y arrays</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">
                        A
                      </span>
                      <span>Avanzado: Objetos y programación asíncrona</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3 text-sm italic">
                    Consejo: Empieza por el primer desafío si eres principiante
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 2: Lee el objetivo</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Cada desafío muestra claramente qué debes lograr. Por ejemplo:
                  </p>
                  <div className="mt-3 p-3 bg-background rounded border border-border">
                    <p className="font-mono text-sm">
                      "Ordena las líneas para crear una variable y una función que la imprima"
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 3: Arrastra y ordena las cartas</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <p className="text-muted-foreground">Las líneas de código aparecen desordenadas. Debes:</p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Hacer clic</strong> en una carta para seleccionarla
                    </li>
                    <li>
                      <strong>Arrastrarla</strong> a la posición correcta en el área de destino
                    </li>
                    <li>
                      <strong>Soltar</strong> para colocarla
                    </li>
                    <li>
                      <strong>Reorganizar</strong> las cartas tantas veces como necesites
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                    <p className="text-sm">
                      <strong>Tip:</strong> Las cartas en el área de destino muestran números de línea. Piensa en el
                      orden lógico de ejecución del código.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 4: Verifica tu solución</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground mb-3">
                    Una vez que hayas colocado todas las líneas, haz clic en el botón{" "}
                    <strong className="text-foreground">"Verificar Solución"</strong>.
                  </p>
                  <p className="text-muted-foreground">El juego te mostrará:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                    <li>Un mensaje de éxito o error</li>
                    <li>Los puntos ganados (si es correcto)</li>
                    <li>Una explicación detallada del código</li>
                    <li>La solución correcta (si te equivocaste)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 5: Lee y aprende</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    La parte más importante es leer las explicaciones que aparecen después de verificar. Estas
                    explicaciones te enseñan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                    <li>
                      <strong>Por qué</strong> el código funciona de esa manera
                    </li>
                    <li>
                      <strong>Cómo funciona</strong> paso a paso cada línea
                    </li>
                    <li>
                      <strong>Conceptos clave</strong> de programación aplicados
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paso 6: Continúa al siguiente desafío</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Una vez completado un desafío, haz clic en{" "}
                    <strong className="text-foreground">"Siguiente Desafío"</strong> para avanzar al próximo nivel de
                    dificultad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="desafios" className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">3. Descripción de desafíos</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                    Básico
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 1: Variables y funciones</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Declaración de variables y funciones básicas
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo crear variables con let, definir funciones y llamarlas para ejecutar
                  código
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                    Básico
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 2: Funciones con parámetros</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Funciones que reciben y procesan datos
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo pasar argumentos a funciones y usar template literals para combinar
                  texto
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-yellow-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
                    Medio
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 3: Condicionales</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Estructuras if-else para tomar decisiones
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo crear lógica condicional que ejecuta diferentes códigos según
                  condiciones
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-yellow-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
                    Medio
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 4: Bucles</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Iteración con bucles for
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo repetir código múltiples veces de forma automática usando bucles
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-yellow-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
                    Medio
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 5: Arrays</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Listas de datos y métodos de array
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo almacenar múltiples valores y usar métodos como forEach para
                  procesarlos
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold">
                    Avanzado
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 6: Objetos</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Estructuras de datos con propiedades y métodos
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo agrupar datos relacionados y funciones en objetos
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold">
                    Avanzado
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 7: Arrow functions</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Sintaxis moderna y concisa para funciones
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo escribir funciones de forma más elegante con arrow functions
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold">
                    Avanzado
                  </span>
                  <h3 className="text-xl font-semibold">Desafío 8: Promesas</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Concepto:</strong> Programación asíncrona con promesas
                </p>
                <p className="text-muted-foreground">
                  <strong>Aprenderás:</strong> Cómo manejar operaciones que toman tiempo usando async/await y promesas
                </p>
              </div>
            </div>
          </section>

          <section id="sistema-puntos" className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">4. Sistema de puntos</h2>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Cómo se calculan los puntos</h3>
                <p className="text-muted-foreground mb-4">
                  El sistema de puntos recompensa la eficiencia. Cuantos menos intentos necesites para resolver un
                  desafío, más puntos ganas:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                      100
                    </div>
                    <div>
                      <p className="font-semibold">1er intento</p>
                      <p className="text-sm text-muted-foreground">Perfecto - 100 puntos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      75
                    </div>
                    <div>
                      <p className="font-semibold">2do intento</p>
                      <p className="text-sm text-muted-foreground">Muy bien - 75 puntos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                      50
                    </div>
                    <div>
                      <p className="font-semibold">3er intento</p>
                      <p className="text-sm text-muted-foreground">Bien - 50 puntos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      25
                    </div>
                    <div>
                      <p className="font-semibold">4to intento o más</p>
                      <p className="text-sm text-muted-foreground">Completado - 25 puntos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Puntuación total</h4>
                <p className="text-muted-foreground">
                  Tu puntuación se acumula a medida que completas desafíos. La puntuación máxima posible es{" "}
                  <strong className="text-foreground">800 puntos</strong> (100 puntos × 8 desafíos).
                </p>
              </div>
            </div>
          </section>

          <section id="aprendizaje" className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">5. Sistema de aprendizaje</h2>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Feedback al completar</h3>
                <p className="text-muted-foreground mb-4">
                  Después de verificar tu solución, el juego proporciona feedback educativo detallado:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      Si tu respuesta es correcta
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✓ Mensaje de felicitación</li>
                      <li>✓ Puntos ganados destacados</li>
                      <li>✓ Explicación del "por qué" funciona el código</li>
                      <li>✓ Explicación del "cómo funciona" paso a paso</li>
                      <li>✓ Botón para avanzar al siguiente desafío</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Si tu respuesta es incorrecta</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✗ Mensaje indicando que el orden no es correcto</li>
                      <li>✗ La solución correcta mostrada claramente</li>
                      <li>✗ Explicación del "por qué" funciona la solución correcta</li>
                      <li>✗ Explicación del "cómo funciona" paso a paso</li>
                      <li>✗ Opción de intentar nuevamente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Estructura de las explicaciones</h3>
                <p className="text-muted-foreground mb-4">
                  Cada explicación está dividida en dos secciones para maximizar el aprendizaje:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">1. Por qué funciona</h4>
                    <p className="text-sm text-muted-foreground">
                      Explica el concepto de programación detrás del código, qué problema resuelve y por qué es
                      importante conocer este patrón.
                    </p>
                    <div className="mt-2 p-3 bg-muted rounded text-sm font-mono">
                      Ejemplo: "Las variables son contenedores que guardan información..."
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">2. Cómo funciona</h4>
                    <p className="text-sm text-muted-foreground">
                      Describe paso a paso qué hace cada línea de código, en qué orden se ejecuta y qué resultado
                      produce.
                    </p>
                    <div className="mt-2 p-3 bg-muted rounded text-sm font-mono">
                      Ejemplo: "Línea 1: Se crea una variable llamada 'mensaje'..."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Consejo de aprendizaje</h4>
                <p className="text-sm text-muted-foreground">
                  No te saltes las explicaciones, incluso si resolviste el desafío correctamente. Leerlas refuerza tu
                  comprensión y te ayuda a interiorizar los conceptos.
                </p>
              </div>
            </div>
          </section>

          <section id="consejos" className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">6. Consejos y trucos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-semibold mb-2">Lee el objetivo primero</h3>
                <p className="text-sm text-muted-foreground">
                  Antes de empezar a arrastrar cartas, lee cuidadosamente qué debes lograr. Esto te dará contexto sobre
                  qué buscar.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Piensa en el flujo lógico</h3>
                <p className="text-sm text-muted-foreground">
                  El código se ejecuta de arriba hacia abajo. Pregúntate: ¿qué debe suceder primero? ¿qué depende de
                  qué?
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold mb-2">No temas equivocarte</h3>
                <p className="text-sm text-muted-foreground">
                  Los errores son parte del aprendizaje. Las explicaciones cuando fallas son igual de valiosas que
                  cuando aciertas.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold mb-2">Lee las explicaciones completas</h3>
                <p className="text-sm text-muted-foreground">
                  Las explicaciones del "por qué" y "cómo funciona" son la clave del aprendizaje. No las saltes para
                  pasar al siguiente desafío.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Avanza progresivamente</h3>
                <p className="text-sm text-muted-foreground">
                  Los desafíos están ordenados por dificultad. Completa cada uno antes de pasar al siguiente para
                  construir conocimiento sólido.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-semibold mb-2">Observa los colores y badges</h3>
                <p className="text-sm text-muted-foreground">
                  Los badges de nivel (Básico, Medio, Avanzado) y los colores te ayudan a identificar la dificultad de
                  cada desafío.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">🔢</div>
                <h3 className="text-lg font-semibold mb-2">Busca la máxima puntuación</h3>
                <p className="text-sm text-muted-foreground">
                  Intenta resolver cada desafío en el primer intento. Si no puedes, analiza la solución y vuelve a
                  intentarlo.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <div className="text-3xl mb-3">🧩</div>
                <h3 className="text-lg font-semibold mb-2">Reorganiza sin miedo</h3>
                <p className="text-sm text-muted-foreground">
                  Puedes mover las cartas las veces que necesites antes de verificar. Experimenta con diferentes
                  órdenes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Preguntas frecuentes</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Necesito conocimientos previos de programación?</h3>
                <p className="text-muted-foreground">
                  No. El juego está diseñado para principiantes absolutos. Los primeros desafíos introducen conceptos
                  básicos y el juego progresa gradualmente.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Se guarda mi progreso?</h3>
                <p className="text-muted-foreground">
                  Actualmente el progreso se mantiene mientras mantengas la página abierta. Si recargas la página,
                  deberás comenzar de nuevo.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Puedo repetir desafíos completados?</h3>
                <p className="text-muted-foreground">
                  Sí. Puedes volver a cualquier desafío haciendo clic en él desde el menú de selección de desafíos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Qué lenguaje de programación usa el juego?</h3>
                <p className="text-muted-foreground">
                  Todos los desafíos usan JavaScript, uno de los lenguajes de programación más populares y versátiles
                  del mundo.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Puedo usar el juego en dispositivos móviles?</h3>
                <p className="text-muted-foreground">
                  Sí. El juego es responsive y funciona en tablets y móviles, aunque la experiencia es óptima en
                  pantallas más grandes.
                </p>
              </div>
            </div>
          </section>

          <section className="p-10 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Listo para empezar?</h2>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
              Ahora que conoces todas las mecanicas del juego, es hora de poner en practica tu aprendizaje.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-4 rounded-xl bg-white text-sky-600 font-bold hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Volver al juego
            </a>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2025 CodeCards. Aprende programacion de forma divertida.</p>
        </div>
      </footer>
    </div>
  )
}
