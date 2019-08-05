import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from "react-native";
import { withRouter, } from "react-router-native";
import { connect } from "react-redux";
import { todoFormChangeRequest, createTodoRequest } from "../store";
import { format, url } from "nanoid";
import { generateSecureRandom } from "react-native-securerandom";

const Todo = props => {
  const { todoFormChange, todoForm, createTodoSend } = props;
  const {
    id,
    titulo,
    descripcion,
    tiempo_estimado,
    tiempo_trabajado
  } = todoForm;
  const [errorField, setErrorFieldText] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    todoFormChange(name, value);
  };

  const handleSubmit = async () => {
    for (const name in todoForm) {
      const value = todoForm[name];
      if (value !== null) {
        if (value !== "") {
          continue;
        } else {
          setErrorFieldText(true);
          break;
        }
      }
    }

    if (!errorField) {
      if (id === null) {
        const generateSecureRandom = generateSecureRandom(12).then(
          randomBytes => randomBytes
        );
        todoForm.id = await format(generateSecureRandom, url, 21);
        createTodoSend(todoForm);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Page Todo Form</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChange={handleChange}
        value={titulo}
      />

      <TouchableHighlight style={styles.button} onPress={handleChange}>
        <Text> Guardar </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

const mapStateToProps = state => {
  return {
    todoForm: state.todosReducer.todoForm,
    todoSelected: state.todosReducer.todoSelected,
    loading: state.todosReducer.loading,
    error: state.todosReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todoFormChange: (name, value) =>
      dispatch(todoFormChangeRequest(name, value)),
    createTodoSend: todo => dispatch(createTodoRequest(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Todo));
