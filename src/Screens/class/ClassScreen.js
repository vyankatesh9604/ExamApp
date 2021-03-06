import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import { userContext } from '../../../App'
import url from '../../url';



export default function ClassScreen({ navigation }) {
  const { state, dispatch } = useContext(userContext)
  const [studentclass, setStudentClass] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios
        .get(`${url}/class/student_classes?studentId=${state._id}`)
        .then((res) => {
          setStudentClass(res.data.classes)
        })
        .catch((err) => { console.log(err) })
    })
    return unsubscribe;
  }, [navigation])

  const openClass = (classId) => {
    dispatch({ type: 'Active_Class', payload: classId })
    navigation.navigate('HomeDrawer')
  }

  return (
    <>
      {
        studentclass.map((oneclass, index) => {
          return <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 8, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }} key={index}>
            <Card.Title title={oneclass.name} />
            <Card.Content>
              <Title>created by {oneclass.teacher.name}</Title>
            </Card.Content>
            <Card.Actions>
              <Button
                style={{ backgroundColor: '#009387', marginLeft: '70%', marginVertical: 8 }}
                onPress={() => { openClass(oneclass._id) }}>
                <Text style={{ color: 'white' }}>View</Text>
              </Button>
            </Card.Actions>
          </Card>

        })




      }
    </>
  )
}

const styles = StyleSheet.create({})
