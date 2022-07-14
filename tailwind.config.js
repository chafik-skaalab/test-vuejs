/* eslint-disable @typescript-eslint/no-var-requires */

const skaalabColors = require('./src/plugins/tailwind/config/skaalab-colors');

module.exports = {
  important: '#body',
  purge: {
    // enabled: true,
    content: ['./index.html', './src/*.{vue,js,ts,jsx,tsx,css,scss}', './src/**/*.{vue,js,ts,jsx,tsx,css,scss}'],
  },
  theme: {
    extend: {
      colors: {
        blue: skaalabColors.blueCrayola,
        green: skaalabColors.success,
        orange: skaalabColors.warning,
        red: skaalabColors.danger,

        info: skaalabColors.information,
        warning: skaalabColors.warning,
        danger: skaalabColors.danger,
      },

      boxShadow: {
        outline: '0 0 0 2px rgba(25, 101, 255, 0.75)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
