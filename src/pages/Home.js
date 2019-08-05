import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { getTodosRequest } from "../store";

const Home = () => {
  return (
    <View>
      <Text style={styles.header}>Page Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    todosItems: state.todosReducer.todos,
    loading: state.todosReducer.loading,
    error: state.todosReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodosItems: () => dispatch(getTodosRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
