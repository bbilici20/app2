import { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
 
{width > 600 ? width=370 : 1 }
{height > 600 ? height=680 : 1 }

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 380;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};