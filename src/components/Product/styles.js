import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const imageWidth = width / 2;
const imageHeigh = imageWidth * 2;

const styles = ScaledSheet.create({
  image: {
    width: imageWidth,
    height: imageHeigh,
  },
  title: {
    fontSize: '20@s',
  },
  container: {
    alignItems: 'flex-start',
  },
});
export default styles;
