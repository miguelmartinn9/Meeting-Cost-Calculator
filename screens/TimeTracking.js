import React, {Component} from 'react'
import {Text, View} from 'react-native'
import CoolestButton from "../components/CoolestButton";
class TimeTracking extends Component  {

    static navigationOptions= {
        title: 'Time Tracking Screen',
    };
    
    render (){
        return (
            <View>
                <Text>{Number(3.45).toFixed(2)} €</Text>
                <CoolestButton
                    label={'End Meeting'}
                    action={() =>
                        this.props.navigation.navigate('MeetingSummary')}
                />
            </View>
        );
    }
}

export default TimeTracking;