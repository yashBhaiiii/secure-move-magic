
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our security theme
				blue: {
					50: "#E6F0FF",
					100: "#CCE0FF",
					200: "#99C2FF",
					300: "#66A3FF",
					400: "#3385FF",
					500: "#0066FF",
					600: "#0052CC",
					700: "#003D99",
					800: "#002966",
					900: "#001433"
				},
				gray: {
					50: "#F9FAFB",
					100: "#F3F4F6",
					200: "#E5E7EB",
					300: "#D1D5DB",
					400: "#9CA3AF",
					500: "#6B7280",
					600: "#4B5563",
					700: "#374151",
					800: "#1F2937",
					900: "#111827",
					950: "#0A0F1A"
				},
				red: {
					50: "#FEF2F2",
					100: "#FEE2E2",
					200: "#FECACA",
					300: "#FCA5A5",
					400: "#F87171",
					500: "#EF4444",
					600: "#DC2626",
					700: "#B91C1C",
					800: "#991B1B",
					900: "#7F1D1D"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'100%': { transform: 'translateX(100%)' }
				},
                'glow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite ease-in-out',
				'float': 'float 5s infinite ease-in-out',
				'shimmer': 'shimmer 2s infinite',
                'glow': 'glow 3s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'url("/images/grid-pattern.svg")',
				'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.15), transparent 60%)',
                'dark-dots': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                'dark-grid': 'linear-gradient(to right, rgba(75, 85, 99, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 85, 99, 0.1) 1px, transparent 1px)'
			},
			fontFamily: {
				'sans': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
				'mono': ['SF Mono', 'JetBrains Mono', 'Menlo', 'monospace']
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100ch',
                        color: 'rgb(229, 231, 235)',
                        a: {
                          color: 'rgb(59, 130, 246)',
                          '&:hover': {
                            color: 'rgb(96, 165, 250)',
                          },
                        },
                        h1: {
                          color: 'rgb(255, 255, 255)',
                        },
                        h2: {
                          color: 'rgb(255, 255, 255)',
                        },
                        h3: {
                          color: 'rgb(255, 255, 255)',
                        },
                        h4: {
                          color: 'rgb(255, 255, 255)',
                        },
                        blockquote: {
                          color: 'rgb(229, 231, 235)',
                          borderLeftColor: 'rgb(75, 85, 99)',
                        },
                        code: {
                          color: 'rgb(249, 250, 251)',
                          backgroundColor: 'rgb(31, 41, 55)',
                        },
                        pre: {
                          backgroundColor: 'rgb(17, 24, 39)',
                        },
                        strong: {
                          color: 'rgb(249, 250, 251)',
                        },
					},
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
