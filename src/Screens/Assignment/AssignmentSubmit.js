import React from 'react'
import { Button, Text } from 'react-native-paper'
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios'
import { StyleSheet } from 'react-native';
import { View } from 'native-base';


const AssignmentSubmit = ({ navigation }) => {

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
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                setMessage('Please Select PDF File Only')
                onToggleSnackBar()
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
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 180 }}>
                <Text style={styles.heading}>Submit Your Response</Text>
                <Button style={styles.btn} mode='contained' onPress={() => { uploadDocumentFile() }}>
                    <Text style={styles.btnText}>Browse Files</Text>
                </Button>
                <Text style={{ marginVertical: 10 }}>*uplaod documents only in PDF format</Text>
            </View>
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
        marginHorizontal: 30
    },
    btnText: {
        color: '#fff'
    }
})