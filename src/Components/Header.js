import React from 'react';
import {View, Text, Platform, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
let screenHeight = width < height ? height : width
const STATUSBAR_HEIGHT =   Platform.OS === 'ios' ? (screenHeight === 812 ? 44 : 20) : StatusBar.currentHeight;

class Header extends React.Component{
    render(){
        return(
            <View style= { styles.textStyle }>
                <Text style={{fontSize:20}}>{this.props.headerText}</Text>
            </View>
        )
    }
}
const styles={
    textStyle:{
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        paddingTop:STATUSBAR_HEIGHT,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        shadowColor:'#000',
        shadowOffset:{ width :0,height:2 },
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    }
}

export default Header