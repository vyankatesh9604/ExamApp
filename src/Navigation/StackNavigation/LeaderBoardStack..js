import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import LeaderBoardScreen from '../../Screens/Leaderboard/LeaderBoardScreen'

const LeaderBoardStack = createStackNavigator();

const LeaderBoardStackScreen = ({ navigation }) => {
    return (
        <LeaderBoardStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2e64e5'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#2e64e5' onPress={() => navigation.openDrawer()}></Icon.Button>
                },

            }} />
        </LeaderBoardStack.Navigator>
    )
}

export default LeaderBoardStackScreen