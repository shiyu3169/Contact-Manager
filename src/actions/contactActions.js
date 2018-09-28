import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import Axios from "axios";

export const getContacts = () => async dispatch => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContact = id => async dispatch => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

export const addContact = contact => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};
