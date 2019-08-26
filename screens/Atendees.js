import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,

    } from 'react-native'
import CoolestButton from '../components/CoolestButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {createAddAttendee} from '../model/actions';


const mapStateToProps = (state) => {
    return ({attedees: state.attedees});
}

const mapDispatchToProps = {
    dispatchAddAttendees: (name,cost) => createAddAttendee (name,cost)
};

class Atendees extends React.Component{

    

    static navigationOptions= {
        title: 'Attendees Screen',
    };

    constructor (){
        super();
        this.state = {name:'', cost:''};
    }
    
    addAttendee(name,cost){
        this.props.dispatchAddAttendees (name,cost);
        this.setState({name:'', cost:''});
        
    }

    render() {
        const {attedees} = this.props;

        return(
            <View style={stylesss.container}>
                <View style = {[stylesss.startButton]}>
                    <CoolestButton 
                    label={"Start Meeting!"}
                    action={() => this.props.navigation.navigate('MeetingSummary')}/>
                </View>

                <ScrollView style = {stylesss.attendeesContainer}>
                    {

                        attedees.map(
                            (attendee, index) => (
                                <View style={stylesss.attendeesList} key={index} >
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
                <AttendantForm
                    name={ this.state.name }
                    cost={ this.state.cost }
                    onNameChange={ (name) => this.setState({name}) }
                    onCostChange={ cost => this.setState({cost}) }
                    addAttendee={ () =>  this.addAttendee(this.state.name, this.state.cost) }
                />
                
            </View>
        );
    }
}

const AttendantForm = ( {name, onNameChange, cost, onCostChange, addAttendee} ) => (
    <View style={stylesss.form}>
        <View style={stylesss.inputWrapper}>
            <TextInput
                placeholder="Name of the attendee"
                value={name}
                style={stylesss .inputText}
                onChangeText={onNameChange} />

            <TextInput
                placeholder="Cost per hour"
                value={cost}
                keyboardType = 'number-pad'
                style={stylesss.inputText}
                onChangeText={ onCostChange } />
        </View>
        <TouchableOpacity onPress={ addAttendee }>
            <View style={stylesss.buttonContainer}>
                <Text style={stylesss.addButton}>+</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const stylesss = StyleSheet.create({
    inputText:{
        height:45,
        padding:10,
        backgroundColor:'#ededed',
        borderColor: '#ddd',
        borderWidth:1,
        borderRadius: 10,
        fontSize:20,
        marginBottom:5,
    },
    attendeesList:{
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems:'center'
    },
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
        borderTopWidth:1,
        borderTopColor:'#999',
        flexDirection:'row',
        padding:10,
       // backgroundColor: 'orange'
    },
    inputWrapper:{
      flex:1,
      backgroundColor:'orange',  
    },
    buttonContainer:{
        backgroundColor:'#ededed',
        borderColor: '#ddd',
        width:100,
        height:100,
        borderRadius:20,
        borderWidth:1,
        marginLeft:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    addButton:{
        fontSize:20,
        lineHeight: 28
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Atendees);