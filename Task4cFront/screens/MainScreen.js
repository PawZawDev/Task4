import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import Layout from "./Layout";
import Activity from "../components/Activity";

const login = "admin";


function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
<<<<<<< HEAD

const activitiesFromDB= [
  {
    id: 0,
    type: "morda.jpg",
    randomStatistics: "so many chairs",
  },
  {
    id: 1,
    type: "piesa.png",
    randomStatistics: "so many things",
  },
  {
    id: 2,
    type: "alien.png",
    randomStatistics: "so many elephants",
  },
  {
    id: 3,
    type: "pinezka.jpg",
    randomStatistics: "just the two of us",
  },
  {
    id: 4,
    type: "checked.jpg",
    randomStatistics: "crazy funk",
  }, 
] 
=======
>>>>>>> 8e010360e21534b38ae4bf17a09c72503eee2eea

// async fetchActivities() {
//   await fetch("https://task44.herokuapp.com/login", {
//     method: "POST",
//     body: JSON.stringify({
//       login: login
//     })
//   }).then( (response) => response.json())
//   .then((responseJson) => {
//     // setValid(responseJson.successful);
//     // setError(!(responseJson.successful));
//     if(responseJson) {
//       //RETURN LOGIN TO MAIN
//       props.navigation.navigate('Main');
//     }
//     else (setError(!(responseJson.successful)));
//   });
// }

let activitiesFromDB= [] 

const allActivities = [
  {
    id: 0,
    nazwa: "Pilkarzyki",
    imageUrl: require("../assets/images/" + "pilkarzyki" + ".png"),
    randomStatistics: "2",
  },
  {
    id: 0,
    nazwa: "FIFA",
    imageUrl: require("../assets/images/" + "noga" + ".png"),
    randomStatistics: "1",
  },
  {
    id: 0,
    nazwa: "Piwo",
    imageUrl: require("../assets/images/" + "piwo" + ".png"),
    randomStatistics: "0",
  },
  {
    id: 0,
    nazwa: "Kawa",
    imageUrl: require("../assets/images/" + "kawa" + ".png"),
    randomStatistics: "4",
  },
  {
    id: 0,
    nazwa: "Papieros",
    imageUrl: require("../assets/images/" + "fajki" + ".png"),
    randomStatistics: "crazy funk",
  },
]


var chunkedActivities = chunk(allActivities, 2) // [[{ }, { }], [{ }, { }]]



function MainScreen(props) {
  const [activites, setActivites] = useState([]);

  setInterval(() =>{
    fetch("https://task44.herokuapp.com/activities", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        login: login,
      })
    }).then( (response) => response.json())
    .then((responseJson) => {
      setActivities(responseJson.activities)
    })
  }, 5000);

  return (
    <Layout>
      <ScrollView style={styles.scrollView}>
        {chunkedActivities.map(row => (
          <View style={styles.singleRowView}>
            <Activity activity={row[0]} whereToGo="Event" onTouchFunction={props.navigation.navigate} />
            {row.length === 1
              ? <View style={styles.singleActivity}/>
              : <Activity activity={row[1]} whereToGo="Event" onTouchFunction={props.navigation.navigate} />
            }
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // flexGrow: 2,
  },
  singleRowView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  singleActivity: {
    flex: 1,
    width: 100,
    height: 100,
    textAlign: "center",    // to koniecznie potem wyjebac
    textAlignVertical: "center",
    // resizeMode: "stretch", //doesn't work
    padding: 2,
  },
});

export default MainScreen;