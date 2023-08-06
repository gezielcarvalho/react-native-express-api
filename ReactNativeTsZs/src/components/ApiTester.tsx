import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ApiTester = (): JSX.Element => {
  const [textFromApi, setTextFromApi] = React.useState<string>('Wating ...');
  return (
    <View style={styles.container}>
      <Button
        title="ApiTester"
        onPress={() => {
          //fetch from api
          console.log('fetch from api');

          fetch('http://10.0.2.2:3000/api')
            .then(response => response.json())
            .then(json => {
              console.log(json);
              setTextFromApi(json.message);
            })
            .catch(error => {
              console.error(error);
            });
        }}
      />
      <Text style={styles.text}>{textFromApi}</Text>
    </View>
  );
};

export default ApiTester;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#400',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff',
  },
  button: {
    margin: 10,
  },
});
