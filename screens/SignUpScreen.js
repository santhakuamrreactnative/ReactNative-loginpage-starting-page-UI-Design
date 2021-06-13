import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignUp Screen</Text>
            <Button 
            title="Click Me"
            onPress={() => alert('Button Clicked!')}></Button>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})