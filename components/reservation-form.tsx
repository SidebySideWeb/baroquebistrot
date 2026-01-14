"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { trackReservationFormSubmit } from "@/lib/analytics"

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/moyoetfz22meocnqn7wexkdg7rw6arow"

export function ReservationForm() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Convert date from YYYY-MM-DD (ISO) to dd/mm/yy format
      const formatDateForWebhook = (dateString: string): string => {
        if (!dateString) return ""
        const date = new Date(dateString + "T00:00:00") // Add time to avoid timezone issues
        const day = String(date.getDate()).padStart(2, "0")
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const year = String(date.getFullYear()).slice(-2) // Get last 2 digits
        return `${day}/${month}/${year}`
      }

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formatDateForWebhook(formData.date),
          time: formData.time,
          guests: formData.guests,
          message: formData.message || "",
          timestamp: new Date().toISOString(),
          language: language,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit reservation")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      })

      // Track successful form submission
      trackReservationFormSubmit()

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("Error submitting reservation:", err)
      setError(
        language === "el"
          ? "Συγγνώμη, προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας απευθείας."
          : "Sorry, an error occurred. Please try again or call us directly."
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-medium mb-2">{language === "el" ? "Ευχαριστούμε!" : "Thank you!"}</h3>
        <p className="text-muted-foreground font-light">
          {language === "el"
            ? "Η κράτησή σας έχει καταχωρηθεί. Θα επικοινωνήσουμε μαζί σας σύντομα."
            : "Your reservation has been received. We will contact you shortly."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t.name} *</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-background" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t.phone} *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-background"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">{t.date} *</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">{t.time} *</Label>
          <Input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">{t.guests} *</Label>
        <Input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="20"
          value={formData.guests}
          onChange={handleChange}
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.message}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-background resize-none"
          placeholder={language === "el" ? "Ειδικές επιθυμίες ή σημειώσεις..." : "Special requests or notes..."}
        />
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded text-destructive text-sm">
          {error}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading
          ? language === "el"
            ? "Αποστολή..."
            : "Submitting..."
          : t.submit}
      </Button>

      <p className="text-sm text-muted-foreground text-center font-light">
        * {language === "el" ? "Υποχρεωτικά πεδία" : "Required fields"}
      </p>
    </form>
  )
}
