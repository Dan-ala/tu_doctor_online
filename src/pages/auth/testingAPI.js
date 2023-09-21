import axios from "axios";

const testingApi = async (setStateFunction) => {
  try {
    const response = await axios.get('http://localhost:4000/citas');
    setStateFunction(response.data);
  } catch (error) {
    console.error("Error en testingApi:", error);
  }
};

const testingApi3 = async (setStateFunction) => {
  try {
    const response = await axios.get('http://localhost:4000/medicos');
    setStateFunction(response.data);
  } catch (error) {
    console.error("Error en testingApi3:", error);
  }
};

const testingApi2 = async (setStateFunction) => {
  try {
    const response = await axios.delete('http://localhost:4000/citas');
    setStateFunction(response.data);
  } catch (error) {
    console.error("Error en testingApi2:", error);
  }
};

export {
  testingApi,
  testingApi2,
  testingApi3
};
