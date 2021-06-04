import React,{useEffect,useContext,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import { userContext } from '../../../App'
import url from '../../url';



export default function ClassScreen({navigation}) {
  const { state, dispatch } = useContext(userContext)
  const [studentclass,setStudentClass] =useState([])

    useEffect(() => {
      axios.get(`${url}/class/student_classes?studentId=${state._id}`).then((res)=>{
        console.log(res.data)
        setStudentClass(res.data.classes)
      })
    }, [])
   
    return (
      <>
        {
           studentclass.map((oneclass,index)=>{
             return <Card  mode='outlined' style={{marginVertical:8, marginHorizontal:8}} key={index}>
             <Card.Title title={oneclass.name}  />
             <Card.Content>
               <Title>created by {oneclass.teacher.name}</Title>
               <Paragraph>Assignment is about this subject and Due date is 30 may</Paragraph>
             </Card.Content>
             <Card.Actions>
               <Button  style={{width:'100%',backgroundColor:'#009387'}}onPress={()=>{navigation.navigate('HomeDrawer')}}><Text style={{color:'white'}}>To View</Text></Button>
             </Card.Actions>
           </Card>
    
           })
              
           
        
       
        }
      </>
    )
}

const styles = StyleSheet.create({})
