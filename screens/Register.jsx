import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageBackground, Modal } from 'react-native';
import { useState } from "react";
// import { CheckBox } from '@rneui/themed';




const Register = () => {

  const [Login, setLogin] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [LinkFileFoto, setLinkFileFoto] = useState('');

  // chooise gender when register
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState('');


  return (
 <ImageBackground source={{ uri: 'https://i.postimg.cc/sfKm58XJ/download.jpg' }} style={{ width: '100%', height: '100%' }}>

                <View style={styles.container}>

                    <ScrollView>

                        <View style={styles.centerizedView}>
                            <View style={styles.authBox}>


                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 150, width: 150 }}
                                        source={{ uri: 'https://i.postimg.cc/Z54mCW5F/Pngtree-transparent-register-now-button-8709661.png' }} />
                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize={false}
                                        onChangeText={setLogin}
                                        value={Login}
                                        placeholder="Login"
                                        keyboardType='default'
                                        placeholderTextColor={'black'}
                                    />
                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize={false}
                                        placeholder="name"
                                        onChangeText={setName}
                                        value={Name}
                                        keyboardType='default'
                                        placeholderTextColor={'black'}
                                    />


                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize={false}
                                        secureTextEntry={true}
                                        placeholder="password"
                                        onChangeText={setPassword}
                                        value={Password}
                                        keyboardType='numeric'
                                        placeholderTextColor={'black'}
                                    />
                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize={false}
                                        placeholder="Email"
                                        onChangeText={setEmail}
                                        value={Email}
                                        keyboardType='email-address'
                                        placeholderTextColor={'black'}
                                    />
                                </View>

                                <View style={styles.inputBox}>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize={false}
                                        placeholder="add Foto Link"
                                        onChangeText={setLinkFileFoto}
                                        value={LinkFileFoto}
                                        keyboardType='url'
                                        placeholderTextColor={'black'}
                                    />
                                    <Text style={styles.infoInputLink}>*No need to add a picture</Text>
                                </View>

                                <View style={styles.checkBox}>

                                    {/* <CheckBox
                                        center
                                        title='Male'
                                        checked={male}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        onPress={genderMale}
                                        containerStyle={{ backgroundColor: null, borderWidth: null }}
                                    /> */}

                                    {/* <CheckBox
                                        center
                                        title='Female'
                                        checkedColor='rgb(221, 167, 176)'
                                        checked={female}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        onPress={genderFemale}
                                        containerStyle={{ backgroundColor: null, borderWidth: null }}
                                    /> */}
                                </View>

                            </View>
                        </View>

                        <View style={styles.buttonClick}>
                            <TouchableOpacity style={styles.loginButton} >
                                <Text style={styles.loginButtonText}>Let's Start</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

            </ImageBackground>
  );
};

export default Register;




const styles = StyleSheet.create({

  // style alert popup
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },

  modalView: {
      width: 320,
      height: 330,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: "center",

  },
  modalTextTitle: {
      color: '3#c466a',
      fontSize: 18,
      marginTop: 30
  },
  modalText: {
      color: '3#c466a',
      fontSize: 16,
      marginTop: 10
  },

  textStyleCLose: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "red",
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginTop: 30,
      marginBottom: 20,
      borderRadius: 50
  },

  container: {
      flex: 1,
      position: 'relative',
  },

  centerizedView: {
      width: '100%',
      top: '10%',
  },
  authBox: {
      width: '80%',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
  },
  loginTitleText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10,
  },
  inputBox: {
      marginTop: 10,
  },
  inputLabel: {
      fontSize: 18,
      marginBottom: 6,
  },
  input: {
      width: '100%',
      height: 45,
      backgroundColor: 'rgba(128, 128, 128, 0.140)',
      borderRadius: 4,
      paddingHorizontal: 10,
  },
  buttonClick: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  loginButton: {
      backgroundColor: '#e48a33',
      marginTop: 50,
      paddingVertical: 8,
      borderRadius: 4,
      width: "50%",
  },
  loginButtonText: {
      color: "white",
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
  },
  checkBox: {
      paddingTop: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",
  },
  infoInputLink: {
      fontSize: 11,
      color: "rgba(0, 0, 0, 0.675)",
  }
});
