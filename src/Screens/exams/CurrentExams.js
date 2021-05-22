import React, { useState ,useEffect} from 'react'
import { Alert, StyleSheet, Text, View ,ScrollView} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import url from '../../url'
import moment from 'moment'

const CurrentExams = () => {
    const [papers,setPapers] =useState([])
    const startpaper =() =>{
        
       
    }
    useEffect(() => {
        axios.get(`${url}/paper/getAllPaper`).then((res)=>{

            if(res.data.status==='sucess'){
                setPapers(res.data.Papers)
                
            }else{
                Alert.alert(res.data.message)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <>
        <ScrollView>
        { papers.length > 0 ?papers.map((paper,index)=>{
            
            return <Card  mode='outlined' style={{marginVertical:8, marginHorizontal:8}} key={index}>
            <Card.Title title={paper.subjectName}  style={{paddingLeft:'30%'}} />
            <Card.Content style={{flexDirection:'row'}}>
                <Title>Teacher Name :</Title>
                <Title style={{paddingLeft:'2%'}}>{paper.facultyName}</Title>
            </Card.Content>
            <Card.Content  style={{flexDirection:'row'}}>
                <Title>Start Time:</Title>
                <Title style={{paddingLeft:'2%'}}>{moment(paper.startTime).format("Do MMM YYYY hh:mma")}</Title>
            </Card.Content>
            <Card.Content  style={{flexDirection:'row'}}>
                    <Title>End Time: </Title>
                    <Title style={{paddingLeft:'2%'}}>{moment(paper.endTime).format("Do MMM YYYY hh:mma")}</Title> 
            </Card.Content>
            <Card.Content style={{flexDirection:'row'}}>
                    <Title>Total Marks :</Title>
                    <Title  style={{paddingLeft:'2%'}}>{paper.totalmarks}</Title>
            </Card.Content>
            <Card.Actions>
            <Button  style={{width:'100%',backgroundColor:'#2e64e5'}} onPress={()=>startpaper}><Text style={{color:'white'}}>Start Test</Text></Button>
            </Card.Actions>
        </Card>
        }):<Text>you have no current Exam</Text>
        }
        </ScrollView>
    </>
    )
}

export default CurrentExams

const styles = StyleSheet.create({})
