/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600',
              color: '#1f2937',
            },
            'p': {
              color: '#374151',
              lineHeight: '1.75',
            },
            'a': {
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'blockquote': {
              borderLeftColor: '#e5e7eb',
              color: '#6b7280',
            },
            'code': {
              color: '#2563eb',
              backgroundColor: '#eff6ff',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'pre': {
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
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
