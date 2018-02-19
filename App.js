/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform
} from 'react-native';

import Student from './components/Student';

export default class App extends Component {
  state = {
    students: [
      {
        id: 1,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp',
        name: 'teste',
        description: 'adadd',
      },
      {
        id: 2,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp',
        name: 'teste',
        description: 'adadd',
      },
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Student List and Detail</Text>
        </View>

        <ScrollView contentContainerStyle={styles.studentList}>
          { this.state.students.map(student => 
          <Student key={student.id} data={student} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  studentList: {
    padding: 20,
  },

});
