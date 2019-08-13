import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}> 
                <Text style={styles.clickMe}>
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = {
    buttonStyle:{
        backgroundColor:'#fff',
        flex:1,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        alignItems:'center'
    },
    clickMe:{
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
}
export default Button