import React from 'react'
import {View,Text,StatusBar} from 'react-native'
// import Header from '../Component/Header/TopHeader'
import {useTheme} from '@react-navigation/native'

export default function HomeScreen({navigation}) {
    const {colors} =useTheme()
    const theme =useTheme()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle={theme.dark?"light-content":"light-content"}/>
            <Text style={{color:colors.text}}>Home Screen</Text>
    </View>
        // <Header title={"Home"}/>
    )
}
