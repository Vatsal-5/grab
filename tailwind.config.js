import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        },

        'ring-2': 'var(--ring-2)',

        background: 'var(--background)',
        'sidebar-link-background': 'var(--sidebar-link-background)',
        'pagination-button-background': 'var(--pagination-button-background)',
        'profile-details-background': 'var(--profile-details-background)',

        'border-1': 'var(--border-1)',
        'border-2': 'var(--border-2)',
        'border-3': 'var(--border-3)',
        'border-4': 'var(--border-4)',
        'border-5': 'var(--border-5)',
        'border-6': 'var(--border-6)',
        'border-7': 'var(--border-7)',

        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        'text-4': 'var(--text-4)',
        'text-5': 'var(--text-5)',

        'separator-1': 'var(--separator-1)',

        'rating-star': 'var(--rating-star)'
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        gilroy: ['Gilroy', 'sans-serif']
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
