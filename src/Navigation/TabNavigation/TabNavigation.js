import React from 'react'
import Ion from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExamStackScreen from '../StackNavigation/ExamStack';
import HomeStackScreen from '../StackNavigation/HomeStack';
import LeaderBoardStackScreen from '../StackNavigation/LeaderBoardStack.';

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Exam"
        component={ExamStackScreen}
        options={{
          tabBarLabel: 'Exams',
          tabBarColor: '#2e64e5',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader"
        component={LeaderBoardStackScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Ion name="leaderboard" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
