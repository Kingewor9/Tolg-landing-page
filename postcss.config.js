/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    // 1. First, process the CSS with Tailwind to generate all utility classes
    'tailwindcss': {},
    // 2. Second, use Autoprefixer to add necessary vendor prefixes for better compatibility
    'autoprefixer': {},
  },
}
