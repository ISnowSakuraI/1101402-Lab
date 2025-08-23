import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/react-logo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Digitech SUT</Text>
        <Text style={styles.profileEmail}>dgt@digitech.sut.ac.th</Text>
      </View>
      <View style={styles.details}>
        {/* ช่องว่างสำหรับข้อมูลเพิ่มเติม */}
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings-outline" size={22} color="#222" style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="help-circle-outline" size={22} color="#222" style={styles.menuIcon} />
          <Text style={styles.menuText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="log-out-outline" size={22} color="#222" style={styles.menuIcon} />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileHeader: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 15,
    color: '#888',
  },
  details: {
    height: 300, // ปรับความสูงช่องว่างตามต้องการ
    width: '100%',
  },
  menuContainer: {
    width: '80%',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 18,
    color: '#222',
  },
});

export default ProfileScreen;