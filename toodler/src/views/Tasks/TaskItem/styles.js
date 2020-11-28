import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  taskDescription: {
    padding: 5,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 150,
    width: 360,
    padding: 5,
  },
});
export default styles;
