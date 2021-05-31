import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import ClassScreen from '../../Screens/class/ClassScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../Content/DrawerContent'

const Drawer = createDrawerNavigator();



const ClassStack = createStackNavigator();

const ClassStackScreen = ({ navigation }) => {
    console.log(navigation)

    
    return (
        <Drawer.Navigator  drawerContent={props => <DrawerContent  {...props} />}>
        {/* <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
        <Drawer.Screen name="Assign" component={AssignmentStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="QuizPage" component={QuizPage} /> */}
        <Drawer.Screen name="ClassScreen" component={classStackNavigation} /> 
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>




    )
   
}
const classStackNavigation = ()=>{
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
            <ClassStack.Screen name="ClassScreen" component={ClassScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#2e64e5' onPress={() => navigation.openDrawer()}></Icon.Button>
                },

            }} />
        </ClassStack.Navigator>
    )
} 




export default ClassStackScreen