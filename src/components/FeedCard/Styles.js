import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 88,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.08,
  },
  headerImage: {
    top: 42
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    height: 400
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageBackground: {
    backgroundColor: '#E5E5E5',
  },
  card: {

  },
});

export default styles;
