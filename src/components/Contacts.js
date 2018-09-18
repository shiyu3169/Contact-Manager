import React, { Component } from "react";

export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "jdoe@gmail.com",
                    phone: "555-555-5555"
                },
                {
                    id: 2,
                    name: "Karen Williams",
                    email: "karen@gmail.com",
                    phone: "222-222-2222"
                },
                {
                    id: 3,
                    name: "Henry Jognson",
                    email: "henry@gmail.com",
                    phone: "111-111-1111"
                }
            ]
        };
    }
    render() {
        return <div />;
    }
}
