import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import AssignmentScreen from '../../Screens/Assignment/AssignmentScreen'
import AssignmentDetails from '../../Screens/Assignment/AssignmentDetails';
import AssignmentTopNav from '../TabNavigation/AssignmentTopNav';

const Stack = createStackNavigator()

const AssignmentStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'blue'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen name="Assignments" component={AssignmentScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='blue' onPress={() => navigation.openDrawer()}></Icon.Button>
                },

            }} />
            <Stack.Screen name="AssignmentDetails" component={AssignmentTopNav} />
        </Stack.Navigator>
    )
}

export default AssignmentStack