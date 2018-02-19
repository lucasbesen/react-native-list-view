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
  Platform,
  TouchableOpacity
} from 'react-native';

import Student from './components/Student';
import NewStudentModal from './components/NewStudentModal';

export default class App extends Component {
  state = {
    modalVisible: false,
    students: [
      
    ]
  };

  _addStudent = (newStudentId, newStudentName, newStudentDescription) => {
    const student = {
      id: newStudentId,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp',
      name: newStudentName,
      description: newStudentDescription,
    };

    this.setState({
      modalVisible: false,
      students: [
        ...this.state.students,
        student,
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Student List and Detail</Text>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.studentList}>
          { this.state.students.map(student => 
          <Student key={student.id} data={student} />) }
        </ScrollView>

        <NewStudentModal 
          onCancel={() => this.setState({modalVisible: false})} 
          onAdd={this._addStudent}
          visible={this.state.modalVisible} 
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  studentList: {
    padding: 20,
  },

});
