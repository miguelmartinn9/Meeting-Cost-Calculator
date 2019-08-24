import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    
    } from 'react-native'
import CoolestButton from '../components/CoolestButton'

class Atendees extends React.Component{

    static navigationOptions= {
        title: 'Attendees Screen',
    };

    constructor (){
        super();
        this.state = {attedees: [{name: 'Juan', cost: '80'}, {name: 'Pablo', cost:'100'}]}
    }
    
    

    render() {
        return(
            <View style={stylesss.container}>
                <View style = {[stylesss.startButton]}>
                    <CoolestButton 
                    label={"Start Meeting!"}
                    action={() => this.props.navigation.navigate('MeetingSummary')}/>
                </View>

                <ScrollView style = {stylesss.attendeesContainer}>
                    {
                        this.state.attedees.map(
                            (attendee, index) => (
                                <View key={index}>
                                    <Image
                                    source={require('../assets/images/robot-dev.png')}
                                    style={{width:50,height:50,marginRight:10}}
                                    />
                                    <View>
                                        <Text>{attendee.name}</Text>
                                        <Text>{attendee.cost} €/hour</Text>
                                    </View>
                                </View>
                            )
                        )
                    }
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
        justifyContent: 'center',
        alignItems:'center',
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