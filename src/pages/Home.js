import React from "react";
import { StyleSheet, Text, SectionList, View, Platform } from "react-native";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { getTodosRequest, setTodoSelected } from "../store";

const Home = props => {
  const {
    tasksItems,
    setTodoSelectedSend,
    tasksItemsCount,
    loading,
    error
  } = props;

  const fatListItemSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  const handleTaskActive = (event, task) => {
    setTodoSelectedSend(task);
    event.stopPropagation();
  };

  return (
    <View style={{ marginTop: Platform.OS == "ios" ? 20 : 30 }}>
      <SectionList
        ItemSeparatorComponent={fatListItemSeparator}
        sections={[{ title: "Tasks", data: tasksItems }]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
        )}
        renderItem={({ item }) => (
          <Text
            style={styles.SectionListItemStyle}
            onPress={event => handleTaskActive(event, item)}
          >
            {item.titulo} - {item.descripcion}
            {item.tiempo_estimado} - {item.tiempo_trabajado}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionHeaderStyle: {
    backgroundColor: "#CDDC89",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});

const mapStateToProps = state => {
  return {
    tasksItems: state.todosReducer.todos,
    tasksItemsCount: state.todosReducer.todos.length,
    loading: state.todosReducer.loading,
    error: state.todosReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTodoSelectedSend: todoSelected =>
      dispatch(setTodoSelected(todoSelected)),
    getTodosItems: () => dispatch(getTodosRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
