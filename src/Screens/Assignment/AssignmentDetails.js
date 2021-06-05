import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Pdf from 'react-native-pdf'
import { Text } from 'react-native-paper'

const AssignmentDetails = ({ navigation }) => {

    const source = { uri: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf', cache: true };

    return (
        <>
            <View style={styles.container}>
                <Pdf
                    // activityIndicatorProps={{ color: primaryColor, progressTintColor: primaryColor }}
                    source={source}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf} />
            </View>
        </>
    )

}

export default AssignmentDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});