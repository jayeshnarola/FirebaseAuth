import React from 'react';
import { View } from 'react-native';


export class CardSection extends React.Component {
    render() {
        return (
            <View style= {styles.viewStyles}>
                {this.props.children}
            </View>
        )
    }
}
const styles = {
    viewStyles :{
        borderBottomWidth:0,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
}
export default CardSection