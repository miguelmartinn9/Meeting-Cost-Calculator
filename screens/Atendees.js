import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    } from 'react-native'
import CoolestButton from '../components/CoolestButton'

class Atendees extends React.Component{

    static navigationOptions= {
        title: 'Attendees Screen',
    };

    render() {
        return(
            <View style={stylesss.container}>
                <View style = {[stylesss.startButton]}>
                    <CoolestButton 
                    label={'Start Meeting!'}
                    action={() => this.props.navigation.navigate('TimeTracking')}>
                    </CoolestButton>
                </View>

                <ScrollView style = {stylesss.attendeesContainer}>

                </ScrollView>

                <View style= {[stylesss.form]}>
                </View>
            </View>
        );
    }
}

const stylesss = StyleSheet.create({
    container: {
        flex: 1,
    },
    startButton: {
        flex: 1,
        maxHeight: 80,
       // backgroundColor: 'red',
    },
    attendeesContainer: {
        flex: 1,
      //  backgroundColor: 'lightblue',
    },
    form:{
        flex: 1,
        maxHeight:120,
       // backgroundColor: 'orange'
    },
});



export default Atendees;