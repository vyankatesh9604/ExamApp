import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../../Screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                },
            }} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen