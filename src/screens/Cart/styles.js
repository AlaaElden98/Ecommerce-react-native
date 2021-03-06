import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
  },

  totalText: {
    fontSize: '18@s',
  },
  checkOutText: {
    fontSize: '16@s',
  },
  list: {
    flex: 1,
  },
  cartIcon: {
    fontSize: 96,
  },
  emptyText: {
    fontSize: 32,
  },
});
export default styles;
