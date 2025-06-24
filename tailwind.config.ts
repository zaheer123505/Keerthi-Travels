// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // ... (keep darkMode and content)
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
     require('@tailwindcss/forms'), 
  ],
}
export default config