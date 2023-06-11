
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
      textFillColor: theme => theme('borderColor'),
      textStrokeColor: theme => theme('borderColor'),
      textStrokeWidth: theme => theme('borderWidth'),

      paintOrder: {
        'fsm': { paintOrder: 'fill stroke markers' },
        'fms': { paintOrder: 'fill markers stroke' },
        'sfm': { paintOrder: 'stroke fill markers' },
        'smf': { paintOrder: 'stroke markers fill' },
        'mfs': { paintOrder: 'markers fill stroke' },
        'msf': { paintOrder: 'markers stroke fill' },
      },
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#2A374C',
        primary: '#0EB582',
        grey: '#f8f8f8',
        star: '#ED9700',
        asul: '#18406B',
      },

      backgroundImage: {
        'banner1': 'url("./img/slider-bg.jpg")',
        'shape': 'url("./img/bg-shape.png")',

      },

      boxShadow: {
        'xl': '0px 0px 30px 0px rgb(0 0 0 / 3%)',
      },

      keyframes: {
        sliding1:{
          from: {
            left:'0',
          },
          to: {
            left:'100%',
          },
        },
        sliding2:{
          from: {
            right:'0',
          },
          to: {
            right:'100%',
          },
        }
      },
      animation:{
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      },
    },
    variants: { // all the following default to ['responsive']
      textFillColor: ['responsive'],
      textStrokeColor: ['responsive'],
      textStrokeWidth: ['responsive'],
      paintOrder: ['responsive'],
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}

