import { StyleSheet } from 'react-native';
import { darkerBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
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
