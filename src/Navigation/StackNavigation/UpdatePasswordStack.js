import React from 'react'
import { View, Text } from 'react-native'
import UpdatePassword from '../../Screens/Auth/UpdatePassword'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

const UpdateStack = createStackNavigator();

const UpdatePasswordStackScreen = ({ navigation }) => {
    return (
      <UpdateStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2e64e5'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
  
        <UpdateStack.Screen name="Update Password" component={UpdatePassword} options={{
          headerLeft: () => {
            return <Icon.Button name="md-chevron-back-sharp"
              onPress={() => navigation.goBack('LoginScreen')}
              size={26} color="blue" backgroundColor='#2e64e5' color='white' />
          },
  
        }} />
      </UpdateStack.Navigator>
    )
  }
export default UpdatePasswordStackScreen
