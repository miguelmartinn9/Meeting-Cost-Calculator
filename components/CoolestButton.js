import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const CoolestButton = ({label, action, buttonStyle = [], textStyle = []}) => (
    <TouchableOpacity onPress = {action}>
        <View style = {[stylesss.startButton, ...buttonStyle]}>
            <Text style= {[stylesss.startText, ...textStyle]}>{label}</Text>
        </View>
    </TouchableOpacity>
);


const stylesss = StyleSheet.create({
    startButton: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        maxHeight:80,
        textAlign: 'center',
        backgroundColor: '#2f95dc',
        borderRadius: 10,
    },
    startText: {
        color:'white',
        fontSize:30,
        padding:10,
    }
});

export default CoolestButton;