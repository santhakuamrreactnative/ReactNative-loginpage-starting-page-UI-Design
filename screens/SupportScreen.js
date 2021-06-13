import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Support Screen</Text>
            <Button 
            title="Click Me"
            onPress={() => alert('Button Clicked!')}></Button>
        </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})