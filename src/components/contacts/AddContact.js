import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: "ADD_CONTACT", payload: newContact });

        // Clear State
        this.setState({
            name: "",
            email: "",
            phone: ""
        });
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    <TextInputGroup
                                        label="Name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        name="name"
                                        id="name"
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        name="phone"
                                        id="phone"
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
