import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    padding: 2,
    alignItems: 'stretch',
    margin: 4,
    justifyContent: 'space-around',
  },
});

export default commonStyles;
