"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, User, Mail, Lock, LogIn, UserPlus, Trophy, Target, Zap } from "lucide-react"

type AuthMode = "login" | "register"

interface UserData {
  username: string
  email: string
  password: string
  score: number
  completedChallenges: number[]
  level: number
  createdAt: string
}

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (user: UserData) => void
}

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    if (isOpen) {
      setError("")
      setSuccess("")
      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }
  }, [isOpen])

  const handleRegister = () => {
    setError("")
    setSuccess("")

    if (!username || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos")
      return
    }

    if (password !== confirmPassword) {
      setError("Las contrasenas no coinciden")
      return
    }

    if (password.length < 6) {
      setError("La contrasena debe tener al menos 6 caracteres")
      return
    }

    const users = JSON.parse(localStorage.getItem("codecards_users") || "[]")
    
    if (users.find((u: UserData) => u.email === email)) {
      setError("Ya existe una cuenta con este correo")
      return
    }

    if (users.find((u: UserData) => u.username === username)) {
      setError("Este nombre de usuario ya esta en uso")
      return
    }

    const newUser: UserData = {
      username,
      email,
      password,
      score: 0,
      completedChallenges: [],
      level: 1,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    localStorage.setItem("codecards_users", JSON.stringify(users))
    
    setSuccess("Cuenta creada exitosamente. Ahora puedes iniciar sesion.")
    setTimeout(() => {
      setMode("login")
      setSuccess("")
    }, 2000)
  }

  const handleLogin = () => {
    setError("")
    setSuccess("")

    if (!email || !password) {
      setError("Por favor completa todos los campos")
      return
    }

    const users = JSON.parse(localStorage.getItem("codecards_users") || "[]")
    const user = users.find((u: UserData) => u.email === email && u.password === password)

    if (!user) {
      setError("Correo o contrasena incorrectos")
      return
    }

    localStorage.setItem("codecards_current_user", JSON.stringify(user))
    onLogin(user)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            {mode === "login" ? (
              <LogIn className="h-8 w-8 text-white" />
            ) : (
              <UserPlus className="h-8 w-8 text-white" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {mode === "login" ? "Iniciar Sesion" : "Crear Cuenta"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === "login" 
              ? "Accede para guardar tu progreso" 
              : "Registrate para comenzar tu aventura"}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm">
            {success}
          </div>
        )}

        <div className="space-y-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="username" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nombre de usuario
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Correo electronico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Contrasena
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contrasena"
            />
          </div>

          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Confirmar contrasena
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirma tu contrasena"
              />
            </div>
          )}

          <Button 
            onClick={mode === "login" ? handleLogin : handleRegister}
            className="w-full gap-2"
            size="lg"
          >
            {mode === "login" ? (
              <>
                <LogIn className="h-5 w-5" />
                Iniciar Sesion
              </>
            ) : (
              <>
                <UserPlus className="h-5 w-5" />
                Crear Cuenta
              </>
            )}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              No tienes cuenta?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-primary hover:underline font-medium"
              >
                Registrate aqui
              </button>
            </>
          ) : (
            <>
              Ya tienes cuenta?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-primary hover:underline font-medium"
              >
                Inicia sesion
              </button>
            </>
          )}
        </div>

        {mode === "register" && (
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center mb-3">
              Al registrarte podras:
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-muted/50">
                <Trophy className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Guardar puntos</span>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <Target className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Ver progreso</span>
              </div>
              <div className="p-2 rounded-lg bg-muted/50">
                <Zap className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Continuar</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
