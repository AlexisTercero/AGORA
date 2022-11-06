import { Platform } from 'react-native';

import colors from './colors'; //importo la paleta de colores

export default {
  colors, //hago disponible la paleta por medio de la hoja de estilos
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
