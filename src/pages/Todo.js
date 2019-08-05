import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from "react-native";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import {
  todoFormChangeRequest,
  createTodoRequest,
  updateTodoRequest
} from "../store";
import { format, url } from "nanoid";
import { generateSecureRandom } from "react-native-securerandom";

const Todo = props => {
  const {
    todoFormChange,
    todoForm,
    createTodoSend,
    updateTodoSend,
    history
  } = props;
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

  const wait = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

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
        const generateSecureNumber = generateSecureRandom(12).then(
          randomBytes => randomBytes
        );
        todoForm.id = await format(generateSecureNumber, url, 21);
        createTodoSend(todoForm);
      } else {
        updateTodoSend(todoForm);
      }
      await wait();
      history.push("/");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Page Todo Form</Text>
      <TextInput
        name="titulo"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChange={handleChange}
        value={titulo}
      />
      <TextInput
        name="descripcion"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChange={handleChange}
        value={descripcion}
      />
      <TextInput
        name="tiempo_estimado"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChange={handleChange}
        value={tiempo_estimado}
      />
      <TextInput
        name="tiempo_trabajado"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChange={handleChange}
        value={tiempo_trabajado}
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
    createTodoSend: todo => dispatch(createTodoRequest(todo)),
    updateTodoSend: todo => dispatch(updateTodoRequest(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Todo));
