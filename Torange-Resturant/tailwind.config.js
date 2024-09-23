/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-bg': "url('/src/assets/background-image.jpg')",
      },
      screens: {
        'xs': '480px', // گوشی‌های کوچک
        'sm': '640px', // گوشی‌های متوسط
        'md': '768px', // تبلت‌ها
        'lg': '1024px', // لپ‌تاپ و دسکتاپ کوچک
        'xx': '1073px' ,
        'xl': '1280px', // دسکتاپ بزرگ
        'xxx': '1196px',
        'xxxxx': '935px',
        'xxxx': '1117px',
        '2xl': '1536px', // دسکتاپ بسیار بزرگ
        
      },
    },
  },
  plugins: [],
}