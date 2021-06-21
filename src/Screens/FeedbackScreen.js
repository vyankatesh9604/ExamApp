import React from 'react'
import { View } from 'react-native'
import {TextInput} from 'react-native-paper'

const FeedbackScreen = () => {
    const [text, setText] = React.useState('');

    return (
     <View>
          <TextInput
            mode="outlined"
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
        />
     </View>
    );
}

export default FeedbackScreen
