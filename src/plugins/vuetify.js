/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken2, // '#1976D2'
          secondary: colors.grey.darken3, // '#424242'
          accent: colors.blue.accent1, // '#82B1FF'
          error: colors.red.accent2, // '#FF5252'
          info: colors.blue.base, // '#2196F3'
          success: colors.green.base, // '#4CAF50'
          warning: colors.amber.base, // '#FFC107'
          background: colors.grey.lighten3, // '#eeeeee'
        },
      },
      dark: {
        colors: {
          primary: colors.grey.darken4, // '#212121'
          secondary: colors.grey.darken3, // '#424242'
          accent: colors.grey.lighten3, // '#eeeeee'
          error: colors.red.accent2, // '#FF5252'
          info: colors.blue.base, // '#2196F3'
          success: colors.green.base, // '#4CAF50'
          warning: colors.amber.base, // '#FFC107'
          background: colors.grey.darken1, // '#757575'
        },
      },
    },
  },
})
