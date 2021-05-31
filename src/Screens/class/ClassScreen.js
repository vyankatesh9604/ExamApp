import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function ClassScreen({navigation}) {
    return (
        <View>
            <Card  mode='outlined' style={{marginVertical:8, marginHorizontal:8}}>
                <Card.Title title="class Name"  />
                <Card.Content>
                  <Title>New Assignment Added</Title>
                  <Paragraph>Assignment is about this subject and Due date is 30 may</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button  style={{width:'100%',backgroundColor:'#009387'}}onPress={()=>{navigation.navigate('HomeDrawer')}}><Text style={{color:'white'}}>To View</Text></Button>
                </Card.Actions>
              </Card>
        </View>
    )
}

const styles = StyleSheet.create({})
