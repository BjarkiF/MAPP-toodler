import { StyleSheet } from 'react-native';
import { darkerBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: darkerBlue,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
  },
});
