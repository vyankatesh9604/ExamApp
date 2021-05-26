import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headline, Title, Button } from 'react-native-paper';
import moment from 'moment'

const QuizPage = ({ route,navigation}) => {

    const paper = route.params.paper
    console.log(paper)
    const [questions, setQuestions] = useState(paper.questions)
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [endtime ,setEndTime] =useState(paper.endTime)

    const [totalmarks, setTotalmarks] = useState(0)
    

    useEffect(() => {
        let x= new moment(paper.startTime)
        let y= new moment(paper.endTime)
        let time = moment.duration(y.diff(x)).as('milliseconds')
        setTimeout(()=>{alert('5 min remaining')},time-300000)
         
      }, []);
    
    const selectedOption = (index) => {
        if (!('selected' in questions[currentQuestion - 1])) {
            let arr = questions
            arr[currentQuestion - 1].selected = true
            arr[currentQuestion - 1].selectedOption = `o${index}`
            if (questions[currentQuestion - 1].correctoption === `o${index}`) {
                setTotalmarks(totalmarks + 1)
            }
            console.log(arr)
            setQuestions(arr)
        } else {
            alert('You have already submitted answer')
        }
    }
    const TestSubmitted = ({navigation}) =>{
        // if(endtime === currenttime){
        //     alert('time is over')
        // }
        alert('You have sucessfully submitted Test thank you! ')
        navigation.navigate('Past Exams')
    }
    return (
        <>
            <Headline style={styles.subjectName}>{paper.subjectName}</Headline>
            <Text style={styles.questionNum}>Question {currentQuestion}/{questions.length}</Text>

            {/* current question */}
            <View style={styles.question}>
                <Text style={{ fontSize: 30,marginTop:50}}>
                    {`Q. ${questions[currentQuestion - 1].question}`}
                </Text>
            </View>
            <View style={styles.optionContainer}>
                {
                    Object.keys(questions[currentQuestion - 1].options).map((opKey, index) => {
                        return (
                            'selected' in questions[currentQuestion - 1] &&
                                opKey === questions[currentQuestion - 1].selectedOption
                                ? <Button mode="contained"  style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                    {`${index + 1}] ${questions[currentQuestion - 1].options[opKey]}`}
                                </Button> : <Button mode="outlined" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                    {`${index + 1}] ${questions[currentQuestion - 1].options[opKey]}`}
                                </Button>)
                    })
                }
            </View>

            {
                currentQuestion < questions.length ?
                    <View style={styles.btnRow}>
                        {/* <Button mode="contained" style={styles.Btn}>
                            Quit
                        </Button> */}
                        <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion + 1)}>
                            Next
                        </Button>
                    </View>
                    :
                    <View style={styles.btnRow}>
                        <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion - 1)}>
                            Back
                        </Button>
                        <Button mode="contained" style={styles.submitBtn} onPress={() => TestSubmitted({navigation})}>
                            Submit Test
                        </Button>
                    </View>

            }
        </>
    )

}

export default QuizPage

const styles = StyleSheet.create({
    Btn: {
        width: '40%',
        padding: 8
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    submitBtn: {
        width: '45%',
        padding: 8
    },
    optionContainer: {
        padding: 18,
        marginTop: 'auto',
        marginBottom: 70
    },
    optionBtn: {
        padding: 10,
        marginVertical: 5,
    },
    question: {
        margin: 16,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    subjectName: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold'
    },
    questionNum: {
        fontSize: 30,
        textAlign: 'center'
    }
})