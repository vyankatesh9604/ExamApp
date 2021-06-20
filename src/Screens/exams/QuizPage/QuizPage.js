import React, { useState, useEffect, useContext,useRef } from 'react'
import { StyleSheet, Text, View, BackHandler, ScrollView,AppState } from 'react-native'
import { Headline, Title, Button, ActivityIndicator } from 'react-native-paper';
import moment from 'moment'
import CountDown from 'react-native-countdown-component';
import axios from 'axios';
import url from '../../../url';
import { userContext } from '../../../../App';

const QuizPage = ({ route, navigation }) => {
    
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    let paperId = route.params.paperId
    const { state } = useContext(userContext)

    const [paper, setPaper] = useState(null)
    const [loading, setLoading] = useState(true)
    // const [questions, setQuestions] = useState(paper.questions)
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [totalmarks, setTotalmarks] = useState(0)

    // let dur = moment.duration(moment(paper?.endTime).diff(moment(currenttime)));

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    useEffect(() => {
        axios
            .get(`${url}/paper/getPaper/${paperId}`)
            .then((res) => {
                setPaper(res.data.Paper)
                setLoading(false)
            })
            .catch((err) => { console.log(err) })
    }, [paperId])


    useEffect(() => {
        console.log('hiii')
        AppState.addEventListener("change", _handleAppStateChange);
    
        return () => {
          AppState.removeEventListener("change", _handleAppStateChange);
        };
      }, []);

    

      const _handleAppStateChange = (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("App has come to the foreground!");
          alert('exam automatically submitted')
        }
    
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log("AppState", appState.current);
      };
    const selectedOption = (index) => {
        if (!('selected' in paper.questions[currentQuestion - 1])) {
            let arr = paper.questions
            arr[currentQuestion - 1].selected = true
            arr[currentQuestion - 1].selectedOption = `o${index}`
            if (paper.questions[currentQuestion - 1].correctoption === `o${index}`) {
                setTotalmarks(totalmarks + 1)
            }
            setPaper({ ...paper, questions: arr })
        } else {
            alert('You have already submitted answer')
            TestSubmitted()
        }
    }
    const TestSubmitted = () => {
        // clearInterval(interval)
        setcurrentQuestion(1)
        setLoading(true)
        axios
            .post(`${url}/paper/submit_paper`, { paperId, student: state._id, obtainedMarks: 10 })
            .then((res) => {
                if (res.data.status === 'sucess') {
                    alert('You have sucessfully submitted Test thank you! ')
                    navigation.navigate('Current Exams')
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <>
            {
                !paper
                    ?
                    <View>
                        <ActivityIndicator style={{ marginTop: 310 }} animating={true} size={'large'} />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        {/* <Text>{JSON.stringify(paper._id)}</Text> */}
                        <View style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 20 }}>
                            <View>
                                <Headline style={styles.subjectName}>{paper.subjectName}</Headline>
                                <Text style={styles.questionNum}>Question <Text style={{ fontSize: 30 }}>{currentQuestion}</Text> / {paper.questions.length}</Text>
                            </View>
                            {!loading && <CountDown
                                until={moment.duration(moment(paper?.endTime).diff(moment())).as('seconds')}
                                size={18}
                                onFinish={() => TestSubmitted()}
                                digitStyle={{ backgroundColor: '#FFF' }}
                                digitTxtStyle={{ color: '#1CC625' }}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{ h: 'Hrs', m: 'Min', s: 'Sec' }}
                                style={{ marginLeft: 'auto', paddingVertical: 18 }}
                            />}
                        </View>

                        {/* current question */}
                        <ScrollView style={styles.questionContainer}>
                            <Text style={{ fontSize: 25 }}>
                                {/* {`This is question jjjjj j jj j jj jj j jj j jjjjjj  jjjjjj  jjjjj  of your question tahet 5 tshh is are ayou whrer that is  yehhd nd dj aydsh uhchs hxcdc uhcjdnjd cbdbc jcjdcbn hdcbdc bcbdfd cdbc`} */}
                                {`${paper.questions[currentQuestion - 1].question}`}
                            </Text>
                        </ScrollView>

                        <View style={styles.optionContainer}>
                            {
                                Object.keys(paper.questions[currentQuestion - 1].options).map((opKey, index) => {
                                    return (
                                        'selected' in paper.questions[currentQuestion - 1] &&
                                            opKey === paper.questions[currentQuestion - 1].selectedOption
                                            ? <Button mode="contained" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                                {`${index + 1}] ${paper.questions[currentQuestion - 1].options[opKey]}`}
                                            </Button> : <Button mode="outlined" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                                {`${index + 1}] ${paper.questions[currentQuestion - 1].options[opKey]}`}
                                            </Button>)
                                })
                            }
                        </View>
                        {
                            currentQuestion < paper.questions.length ?
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
                                    {paper.questions.length !== 1 && <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion - 1)}>
                                        Back
                                    </Button>}
                                    <Button mode="contained" style={styles.submitBtn} onPress={() => TestSubmitted()}>
                                        Submit Test
                                    </Button>
                                </View>

                        }
                    </View>
            }
        </>
    )
}

export default QuizPage

const styles = StyleSheet.create({
    Btn: {
        width: '40%',
        padding: 8,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    submitBtn: {
        width: '45%',
        padding: 8
    },
    optionContainer: {
        padding: 16,
        marginBottom: 20,
        marginTop: 'auto'
    },
    optionBtn: {
        padding: 10,
        marginVertical: 5,
    },
    questionContainer: {
        height: 200,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    subjectName: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },
    questionNum: {
        fontSize: 20,
        paddingHorizontal: 10
    }
})