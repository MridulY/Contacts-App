import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet, ImageBackground } from 'react-native';

const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {

    const dummyContacts = [
      { id: 1, name: 'Mridul', number: '7015947615' },
      { id: 2, name: 'Lalit', number: '7082242475' },
      { id: 3, name: 'Sanjay Kumar', number: '8410190000' },
      { id: 4, name: 'Arjun Singh', number: '8607198000' },
      { id: 5, name: 'Satinder Singh', number: '9814054946' },
      { id: 6, name: 'Gurmit S Chauhan', number: '9780312000' },
      { id: 7, name: 'Ashwini Gotyal', number: '9480645440' },
      { id: 8, name: 'Mukhwinder Singh', number: '9646800007' },
      { id: 9, name: 'Rajpal Singh', number: '9814061235' },
      { id: 10, name: 'Varun Sharma', number: '9810568658' },
      { id: 11, name: 'Surinder Lambha', number: '9929600021' },
      { id: 12, name: 'Sanjay Agarwal', number: '9501200927' },
      { id: 13, name: 'Surabhi Malika', number: '9815874099' },
      { id: 14, name: 'Neeraj Sharma', number: '9814054585' },
      { id: 15, name: 'Inder Pal Garg', number: '9417201238' },
      { id: 16, name: 'Rahul Gupta', number: '9872888848' },
      { id: 17, name: 'Mukul Rai', number: '9779737710' },
      { id: 18, name: 'Anil Joshi', number: '9592066666' },
      { id: 19, name: 'Arjun Kumar', number: '7009044113' },
      { id: 20, name: 'Ajay Chaudhary', number: '7837338845' },
      { id: 21, name: 'Abhinav', number: '9216885721' },
      { id: 22, name: 'Sanjay Lather', number: '8762335255' },
      { id: 23, name: 'Adinath Mahadev', number: '7979945332' },
      { id: 24, name: 'Pranjal Das', number: '8966532814' },
      { id: 25, name: 'Pratik Aman', number: '9922135711' },
      { id: 26, name: 'Ayush Raj', number: '8577123869' },
      { id: 27, name: 'Shourya Das', number: '9651142232' },
      { id: 28, name: 'Aryan Karn', number: '8569132114' },
      { id: 29, name: 'Rohit Kumar', number: '7933876522' },
      { id: 30, name: 'Manish Kumar', number: '8375665431' },
    ];

    setContacts(dummyContacts);
    setFilteredContacts(dummyContacts);
  };

  const filterContacts = (query) => {
    setSearchQuery(query);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactNumber}>{item.number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Contacts"
        value={searchQuery}
        onChangeText={filterContacts}
      />
      <FlatList
        data={filteredContacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={hideModal}>
        <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        >
        <View style={styles.modalContainer}>
          <Text style={styles.contactName}>{selectedContact?.name}</Text>
          <Text style={styles.contactNumber}>{selectedContact?.number}</Text>
          <TouchableOpacity style={styles.dismissButton} onPress={hideModal}>
            <Text style={styles.dismissButtonText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF'
  },
  contactItem: {
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 14,
    color: '#000000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  dismissButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FF0000',
    borderRadius: 8,
  },
  dismissButtonText: {
    fontSize: 16,
    color: '#FFFFFFF',
    textAlign: 'center',
  },
});

export default ContactsApp;
