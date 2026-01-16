import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom Paraíso Piscigranja & Farm Therapy Colors
        farm: {
          beige: "hsl(var(--farm-beige))",
          sand: "hsl(var(--warm-sand))",
          cream: "hsl(var(--farm-cream))",
        },
        nature: {
          grass: "hsl(var(--grass-green))",
          green: "hsl(var(--nature-green))",
          sky: "hsl(var(--sky-blue))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(0 0% 100%)",
        },
        trout: {
          blue: "hsl(var(--trout-blue))",
          orange: "hsl(var(--sunset-orange))",
          deepOrange: "hsl(var(--deep-orange))",
          gold: "hsl(var(--gold-warm))",
          aqua: "hsl(var(--accent-teal))",
          sand: "hsl(var(--sand))",
        },
        lavender: "hsl(var(--calm-lavender))",
        "sunset-orange": "hsl(var(--sunset-orange))",
        "sunset-deep": "hsl(var(--sunset-deep))",
        "gold-warm": "hsl(var(--gold-warm))",
        "sand-terracotta": "hsl(var(--sand-terracotta))",
        "trout-blue": "hsl(var(--trout-blue))",
        "sky-blue": "hsl(var(--sky-blue))",
        "calm-lavender": "hsl(var(--calm-lavender))",
        "water-light": "hsl(var(--water-light))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fish-swim": {
          "0%": { transform: "translateX(-100%) scaleX(1)" },
          "49%": { transform: "translateX(100vw) scaleX(1)" },
          "50%": { transform: "translateX(100vw) scaleX(-1)" },
          "100%": { transform: "translateX(-100%) scaleX(-1)" },
        },
        "water-wave": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-25%) translateY(2px)" },
          "100%": { transform: "translateX(-50%) translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "fish-swim": "fish-swim 20s linear infinite",
        "water-wave": "water-wave 10s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "var(--gradient-hero)",
        "cta-gradient": "var(--gradient-cta)",
        "water-gradient": "var(--gradient-water)",
        "farm-gradient": "var(--gradient-farm)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
