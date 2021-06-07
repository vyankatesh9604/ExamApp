import React, { useContext, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios'
import { StyleSheet, Dimensions } from 'react-native';
import { View } from 'native-base';
import Pdf from 'react-native-pdf'
import url from '../../url';
import { userContext } from '../../../App';


const AssignmentSubmit = ({ navigation, route }) => {

    // let assignment = route.params.assignment
    const [assignment, setAssignment] = useState(route.params.assignment)

    const { state, dispatch } = useContext(userContext)

    const uploadDocumentFile = async () => {

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });

            // file source object
            const fileSource = {
                uri: res.uri,
                type: `test/${res.type.split('/')[1]}`,
                name: res.name
            }

            const data = new FormData()
            data.append("file", fileSource)
            data.append("upload_preset", "Examapp")
            data.append("cloud_name", "dzjlte5ga")

            // to get the url of file
            if (fileSource.type === 'test/pdf') {
                console.log('Inside cloudinary pdf upload')
                axios.post('https://api.cloudinary.com/v1_1/dzjlte5ga/raw/upload', data)
                    .then((res) => {
                        axios.post(`${url}/assignment/submit_assignment`, {
                            assignmentId: assignment._id,
                            student: state._id,
                            document: res.data.secure_url
                        }).then((res) => {
                            if (res.data.status === 'sucess') {
                                setAssignment(res.data.assignment)
                            }
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                alert('Please Select PDF File Only')
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log(err)
                console.log('out of picker')
            } else {
                throw err;
            }
        }
    }


    return (
        <>
            {/* {console.log(assignment.submissions.filter((submission) => submission.student === state._id)[0].document)} */}
            {
                assignment.submissions.filter((submission) => submission.student === state._id).length === 0 ?
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 180 }}>
                        <Text style={styles.heading}>Submit Your Response</Text>
                        <Button style={styles.btn} mode='contained' onPress={() => { uploadDocumentFile() }}>
                            <Text style={styles.btnText}>Choose from Files</Text>
                        </Button>
                        <Text style={{ marginVertical: 10 }}>*uplaod documents only in PDF format</Text>
                    </View>
                    :
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', marginTop: 20 }}>You have submitted the assignment</Text>
                        <Pdf
                            activityIndicatorProps={{ color: '#2e64e5', progressTintColor: '#2e64e5' }}
                            source={{ uri: assignment.submissions.filter((submission) => submission.student === state._id)[0].document, cache: true }}
                            onError={(error) => {
                                console.log(error);
                            }}
                            style={styles.pdf} />
                    </View>
            }
        </>
    )

}

export default AssignmentSubmit

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20
    },
    btn: {
        width: '60%',
        backgroundColor: '#2e64e5'
    },
    btnText: {
        color: '#fff',
        textTransform: 'capitalize'
    },
    pdf: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
        marginBottom: 70
    },
})