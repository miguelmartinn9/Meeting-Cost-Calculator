import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

class TimeTracking extends Component  {

    static navigationOptions= {
        title: 'Time Tracking Screen',
    };

    render (){
        return (
            <View>
                <Text>Time Tracking screen!</Text>
                <TouchableOpacity onPress= {() =>this.props.navigation.navigate('MeetingSummary') } >
                    <Text>End Meeting</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TimeTracking;