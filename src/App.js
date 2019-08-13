import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './Components/Header'
import firebase from 'firebase';
import LoginForm from '../src/Screens/LoginForm';
import Spinner from './Components/Spinner'

class App extends React.Component {
    state = {
        login: false
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDGCWlzyVOezcpJKRPqBg0sXnQIxmipI1Q',
            authDomain: 'auth-e98fc.firebaseapp.com',
            databaseURL: 'https://auth-e98fc.firebaseio.com',
            projectId: 'auth-e98fc',
            storageBucket: 'auth-e98fc.appspot.com',
            messagingSenderId: '164592560283'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ login: true })
            } else {
                this.setState({ login: false })
            }
        });
    }
    renderContent() {
        switch (this.state.login) {
            case true:
                return <TouchableOpacity style={styles.OpacityStyle} onPress={() => this.onButtonPress()} >
                    <Text style={styles.BuyttonStyle}>
                        Log Out
                    </Text>
                    </ TouchableOpacity>
            case false:
                return <LoginForm />
            default:
                <Spinner />
        }
    }
    onButtonPress(){
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.containerStyles}>
                <Header headerText={'Auth'} />
                {this.renderContent()}
            </View>
        )
    }
}
const styles = {
    containerStyles: {
        flex: 1
    },
    OpacityStyle: {
        borderWidth: 1,
        borderColor: '#007aff',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    },
    BuyttonStyle: {
        marginTop: 10,
        marginBottom: 10
    },
}
export default App