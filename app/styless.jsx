import {StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar,} from 'react-native';
import {scale, verticalScale, moderateScale} from "./scaling.js"


export const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
      },
    
      ImageIconStyle: {
        marginTop: 24,
        resizeMode: 'stretch',
        height: scale(24),
        width: scale(96),
      },

      inputStyle: {
        flex:1,
        marginTop: 16,
        borderWidth: 1.5,  // size/width of the border
        borderColor: '#E4EBF2',  // color of the border
        borderRadius: 15, 
        height: scale(60),
        width: scale(350),
        radius: 12,
      },


      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(16),
        borderWidth: 1.5,  // size/width of the border
        borderColor: '#E4EBF2',  // color of the border
        borderRadius: 15, 
        height: scale(60),
        width: scale(350),
        
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: scale(24),
        width: scale(24),
        resizeMode: 'stretch',
        alignItems: 'center',
    },
      
  });

  