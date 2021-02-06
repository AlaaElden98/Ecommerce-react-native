import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const imageDim = 100;

const styles = ScaledSheet.create({
  wrappper: {
    padding: 10,
  },
  image: {
    width: imageDim,
    height: imageDim,
    borderRadius: 0.5 * imageDim,
  },
  title: {
    textAlign: 'center',
  },
  titleWrapper: {
    height: 100,
  },
  selctedTitle: {
    color: TINT_COLOR,
  },
  unSelctedTitle: {
    color: 'black',
  },
});

export default styles;
