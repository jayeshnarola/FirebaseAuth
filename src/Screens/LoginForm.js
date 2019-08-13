import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase';
import Spinner from '../Components/Spinner';

export class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        error: '',
        isLoading: false
    }
    onChangeEmail(email) {
        this.setState({
            email: email
        })
    }
    onChangePassword(password) {
        this.setState({
            password: password
        })
    }
    onButtonPress() {
        this.setState({
            isLoading: true
        });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });

    }
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            isLoading: false
        });
    }
    onLoginFail(){
        this.setState({ error: 'Authentication failed',isLoading: false });
    }
    renderError() {
        if (this.state.error) {
            return (
                <Text style={styles.ErrorStyle}>{this.state.error}</Text>
            )
        }
    }
    renderButton() {
        if (this.state.isLoading == true) {
            return <Spinner />
        } else {
            return <TouchableOpacity style={styles.OpacityStyle} onPress={() => this.onButtonPress()} >
                <Text style={styles.BuyttonStyle}>
                    Log in
                </Text>
            </ TouchableOpacity>
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.containerStyle1}>
                    <TextInput style={styles.TextStyle}
                        placeholder="user@gmail.com"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={this.onChangeEmail.bind(this)}
                    />
                </View>
                <View style={styles.containerStyle1}>
                    <TextInput style={styles.TextStyle}
                        placeholder="password"
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={this.onChangePassword.bind(this)}
                    />
                </View>
                {this.renderError()}
                {this.renderButton()}

            </View>
        )
    }
}
const styles = {
    containerStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 5
    },
    containerStyle1: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    TextStyle: {
        height: 40,
        padding: 5,
        fontSize: 18
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
    ErrorStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red',
        alignSelf: 'center'

    }
}
export default LoginForm