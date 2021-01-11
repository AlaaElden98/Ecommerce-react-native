import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
		alignItems: 'center',
		padding:'10@s'
  },

	totalText:{
		fontSize:'18@s'
	},
	checkOutText:{
		fontSize:'16@s',
	},
});
export default styles;
