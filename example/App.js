import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Button, Text, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NativeModules} from 'react-native';
const {
  CreateGuid: {createGuid},
} = NativeModules;

// Commented out because of limitations importing local libraries in a RN project
// import { createGuid } from 'react-native-create-guid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  guidShown: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const App = () => {
  const [guid, setGuid] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}> React Native Create Guid: </Text>
        <Text style={styles.sectionDescription}>Small library to create GUIDs</Text>
        <Text> Current GUID: </Text>
        <Text style={styles.guidShown}> {guid} </Text>
        <Button
          title="Create new one"
          onPress={async () => {
            const newGuid = await createGuid();
            setGuid(newGuid);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
