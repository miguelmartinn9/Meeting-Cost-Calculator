import React, {Component} from 'react'
import {Text} from 'react-native'


class MeetingSummary extends Component {
    
    static navigationOptions = {
        title: 'Meeting Summary Screen'
    };

    render() {
        return(
            <Text>This is the meeting summary screen</Text>
        );
    }
}

export default MeetingSummary;