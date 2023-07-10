import { Text, View } from "react-native";
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Button, Image, TextInput,
Pressable, Icon,} from 'react-native';
import {styles} from "./styless";
import {scale, verticalScale, moderateScale} from "./scaling.js"



const Home = () => {
    const [number, onChangeNumber] = React.useState('');
    const [number2, onChangeNumber2] = React.useState('');
    
    const [isFocused, setIsFocused] = useState(false);
    const onFocus = () => { setIsFocused(true); };
    const onBlur = () => { setIsFocused(false); };

    const [isFocused2, setIsFocused2] = useState(false);
    const onFocus2 = () => { setIsFocused2(true); };
    const onBlur2 = () => { setIsFocused2(false); };

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [usedImage, setUsedImage] = useState(true);
    const [isChecked, setIsChecked] = useState(true);


    const styles2 = StyleSheet.create({
      SectionStyle1: {
        borderColor: isFocused ? '#35D32F' : '#E4EBF2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(16),
        borderWidth: isFocused ? 2.5 : 1.5,  // size/width of the border
        borderRadius: scale(12), 
        height: scale(60),
        width: scale(350),
        
      },
      SectionStyle2: {
        borderColor: isFocused2 ? '#35D32F' : '#E4EBF2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(16),
        borderWidth: isFocused2 ? 2.5 : 1.5,  // size/width of the border
        borderRadius: scale(12), 
        height: scale(60),
        width: scale(350),
        
      },});

    return (
      
    <View style={styles.container2} >
        <Image
        style={styles.ImageIconStyle}
        source={require('C:/Users/beril/Desktop/app2/app/openwallet/logo.jpg')}
      />
        <Image
          style={{resizeMode: 'cover', height: scale(74), width: scale(350), marginTop: scale(48), marginBottom: scale(16)}}
          source={require('./openwallet/Text.jpg')}
      />

      
      <View style={styles2.SectionStyle1}>
      <Image
          style={styles.ImageStyle}
          source={require('./openwallet/.BB/Profile.jpg')}
      />
        <TextInput
        maxLength={11}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{flex:1, fontSize: scale(16)}}
        onChangeText={onChangeNumber}
        value={number}
        label="TC Kimlik Numarası"
        placeholder="TC Kimlik Numarası"
        keyboardType="numeric"
        placeholderTextColor={'#667085'}
        numberOfLines={2}
      />

      </View>
      
      <View style={styles2.SectionStyle2}>
      <Image
          style={styles.ImageStyle}
          source={require('./openwallet/.BB/Lock.jpg')}
      />
      <TextInput
      
        maxLength={6}
        onFocus={onFocus2}
        onBlur={onBlur2}
        style={{flex:1, fontSize: scale(16), }}
        onChangeText={onChangeNumber2}
        value={number2}
        label="Ödero Şifresi"
        placeholder="Ödero Şifresi"
        keyboardType="numeric"
        placeholderTextColor={'#667085'}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity style={({pressed}) => {opacity: pressed ? 0.5 : 1}} 
          onPress={ () => {setUsedImage(!usedImage); setSecureTextEntry(!secureTextEntry);} }>
          <Image
            source={usedImage ? require('./openwallet/closed.png') : require('./openwallet/opened.png') }
            style={{height:scale(24), width:scale(28), marginRight: scale(12)}}
          />
      </TouchableOpacity>
      

      </View>
      
      <View>   
        <TouchableOpacity style={({pressed}) => {opacity: pressed ? 0.5 : 1}}>
          <Image
          source={require('./openwallet/Button.jpg')}
          style={{marginTop: scale(32), height:scale(60), width:scale(350),}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop:scale(24),}}>

      <TouchableOpacity style={({pressed}) => {opacity: pressed ? 0.5 : 1}}>
      <Image
          style={{marginRight: scale(12), height:scale(24), width:scale(24),}}
          source={require('./openwallet/Checkbox.jpg')}
      />
      </TouchableOpacity>

      <Image
          style={{marginRight: scale(80), marginTop:scale(4), height: scale(14.5), width:scale(100) }}
          source={require('./openwallet/hatırla.jpg')}
      />

      <TouchableOpacity style={({pressed}) => {opacity: pressed ? 0.5 : 1}}>
      <Image
          style={{height:scale(24), width:scale(126),}}
          source={require('./openwallet/unuttum.jpg')}
      />
       </TouchableOpacity>

      </View> 
     </View>      
          
     )
};


  
export default Home;