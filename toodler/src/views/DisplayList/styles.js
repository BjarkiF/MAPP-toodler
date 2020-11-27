import { StyleSheet } from 'react-native';
import { darkerBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 20,
    backgroundColor: darkerBlue,
    justifyContent: 'space-around',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
  },
});
