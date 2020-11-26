import { StyleSheet, useWindowDimensions } from 'react-native';

// const {width} = useWindowDimensions();
// const {height} = useWindowDimensions();

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  listItem: {
    backgroundColor: '#FFF',
    height: 100,
  },
  listName: {
    padding: 15,
  },
});

export default styles;
