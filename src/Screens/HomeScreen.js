import React, { useContext, useState } from 'react'
//  import {View,Text,StatusBar} from 'react-native'
// // import Header from '../Component/Header/TopHeader'
// import {useTheme} from '@react-navigation/native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { userContext } from '../../App'

export default function HomeScreen({ navigation }) {
  // const {colors} =useTheme()
  // const theme =useTheme()
  const { state, dispatch } = useContext(userContext)
  const [notifications, setNotifications] = useState([])

  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      {
        <ScrollView>
          {
            [0, 1, 2, 3].map((v, i) => <Card mode='outlined' style={styles.card} key={i}>
              <Card.Content>
                <Title>New Assignment Added</Title>
                <Paragraph>'Assignment is about this subject and Due date is 30 may'</Paragraph>
              </Card.Content>
              <Card.Actions style={{ justifyContent: 'center' }}>
                <Button
                  mode='text'
                  style={{ marginLeft: 'auto', marginRight: 20 }}
                  onPress={() => { navigation.navigate('Assign') }}>
                  <Text style={{ color: '#009387' }}>View</Text>
                </Button>
              </Card.Actions>
            </Card>)}
          {/* <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 8 }}>
        <Card.Title title="Gr Name" />
        <Card.Content>
          <Title>New Assignment Added</Title>
          <Paragraph>Assignment is about this subject and Due date is 30 may</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button style={{ width: '100%', backgroundColor: '#009387' }} onPress={() => { navigation.navigate('Assign') }}><Text style={{ color: 'white' }}>To View</Text></Button>
        </Card.Actions>
      </Card> */}
        </ScrollView>
      }
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 0
  }
})
