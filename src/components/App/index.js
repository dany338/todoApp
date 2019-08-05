import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Link } from "react-router-native";
import store from "../../store";
// Call Pages
import Home from "../../pages/Home";
import Todo from "../../pages/Todo";

// Call Components
import Nav from "../Nav";

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />
        </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  }
});

export default App;
