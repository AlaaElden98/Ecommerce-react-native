import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const imageDim = Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageDim,
    height: imageDim,
  },
  iconTitleWrapper: {
    position: 'absolute',
    flexDirection: 'row',
  },
  backIcon: {
    fontSize: '32@s',
    color: '#C0C0C0',
    paddingStart: '20@s',
    paddingVertical: '10@vs',
  },
  productTitle: {
    fontSize: '18@s',
    fontWeight: 'bold',
    color: '#C0C0C0',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    flex: 1,
    padding: '10@s',
  },
  discriptionText: {
    fontSize: '18@s',
    color: '#bbb',
    paddingVertical: '10@s',
  },
});

export default styles;
