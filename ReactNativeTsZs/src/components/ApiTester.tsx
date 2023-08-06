import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ApiTester = (): JSX.Element => {
  const [textFromApi, setTextFromApi] = React.useState<string>('Wating ...');

  const loadFromApi = () => {
    const randonNumber = Math.floor(Math.random() * 10);
    fetch('http://10.0.2.2:3000/api')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setTextFromApi(json.message + ': ' + randonNumber);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={loadFromApi}>
        <Image source={require('../assets/imgs/logo.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>{textFromApi}</Text>
    </View>
  );
};

export default ApiTester;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
  button: {
    margin: 10,
  },
});
