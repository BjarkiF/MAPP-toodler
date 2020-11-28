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
  InputName: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  listItem: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 150,
    width: 360,
    padding: 5,
  },
  View: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },

});

export default commonStyles;
