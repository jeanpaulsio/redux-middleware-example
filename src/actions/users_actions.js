import { FETCH_USERS } from "./types";
import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => async dispatch => {
  const { data } = await axios.get(ENDPOINT);
  dispatch({ type: FETCH_USERS, payload: data })
};
