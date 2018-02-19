import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Student extends Component {
    render() {
        return(
            <View style={styles.student}>
                <Image 
                    style={styles.studentImage}
                    source={{ uri: this.props.data.thumbnail }}
                />
                <View style={styles.studentInfo}>
                    <Text style={styles.studentName}>{this.props.data.name}</Text>
                    <Text style={styles.studentDescription}>{this.props.data.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    student: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    studentImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    studentInfo: {
        marginLeft: 10,
    },

    studentName: {
        fontWeight: 'bold',
        color: '#333',
    },

    studentDescription: {
        fontSize: 12,
        color: '#999',
    }
});