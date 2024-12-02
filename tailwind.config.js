/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'ui-monospace', 'monospace'],
        sans: ['SF Pro Text', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#000000',
          50: '#0A0A0A',
          100: '#141414',
          200: '#1C1C1E',
        },
        accent: {
          DEFAULT: '#FFFFFF',
          muted: '#999999',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#E5E5E5',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-lead': '#E5E5E5',
            '--tw-prose-links': '#FFFFFF',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#999999',
            '--tw-prose-bullets': '#999999',
            '--tw-prose-hr': '#999999',
            '--tw-prose-quotes': '#FFFFFF',
            maxWidth: 'none',
            fontSize: '1.125rem',
            h1: {
              fontSize: '2.25rem',
              lineHeight: '1.3',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontSize: '1.75rem',
              lineHeight: '1.3',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2.5em',
            },
            p: {
              lineHeight: '1.75',
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid #999999',
              transition: 'border-color 0.2s ease',
              '&:hover': {
                borderColor: '#FFFFFF',
              },
            },
            'ul > li': {
              paddingLeft: '1.5em',
              '&::before': {
                width: '0.5em',
                height: '0.125em',
                top: '0.875em',
                left: 0,
                borderRadius: '999px',
              },
            },
            img: {
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
