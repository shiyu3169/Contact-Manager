import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

const initialState = {
    contacts: [
        {
            id: 1,
            name: "Alice Wonder",
            emial: "alice@gmail.com",
            phone: "111-111-1111"
        },
        {
            id: 2,
            name: "Bob Samsung",
            emial: "Bob@gmail.com",
            phone: "222-222-2222"
        },
        {
            id: 3,
            name: "Charlie Apple",
            emial: "Charlie@gmail.com",
            phone: "333-333-3333"
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}
