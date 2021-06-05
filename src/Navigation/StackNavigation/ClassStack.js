import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import ClassScreen from '../../Screens/class/ClassScreen'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerContent from '../../Content/DrawerContent'

// const Drawer = createDrawerNavigator();
const ClassStack = createStackNavigator();

const ClassStackScreen = ({ navigation }) => {
    // console.log(navigation)
    return (
        <ClassStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2e64e5'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <ClassStack.Screen name="Classes" component={ClassScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#2e64e5' onPress={() => navigation.openDrawer()}></Icon.Button>
                },

            }} />
        </ClassStack.Navigator>
    )

}
// const classStackNavigation = ()=>{

// } 




export default ClassStackScreen