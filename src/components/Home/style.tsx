import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  app: {
    margin: 20,
    height: '100%',
  },
  banner: {
    height: 150,
  },
  imgBanner: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  TextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // ignore this - we'll come back to it
    flexWrap: 'wrap',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // ignore this - we'll come back to it
    // flexWrap: 'wrap',
    width: '100%',
    height: 500,
  },
  item: {
    padding: 5,
    width: '50%',
    height: 200,
  },
  itemRow: {
    padding: 5,
    width: 200,
    height: 300,
  },
  imgItem: {
    height: 200
  },
});

export default styles;
