import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import LeaderBoardScreen from '../../Screens/LeaderBoardScreen';

const LeaderBoardStack = createStackNavigator();

const LeaderBoardStackScreen = ({ navigation }) => {
    return (
        <LeaderBoardStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#d02860'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#d02860' onPress={() => navigation.openDrawer()}></Icon.Button>
                },

            }} />
        </LeaderBoardStack.Navigator>
    )
}

export default LeaderBoardStackScreen