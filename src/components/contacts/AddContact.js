import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        // Check errors
        if (name === "") {
            this.setState({
                errors: { name: "Name is required" }
            });
            return;
        }

        if (email === "") {
            this.setState({
                errors: { email: "Email is required" }
            });
            return;
        }

        if (phone === "") {
            this.setState({
                errors: { phone: "Phone is required" }
            });
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            newContact
        );

        dispatch({ type: "ADD_CONTACT", payload: res.data });

        // Clear State
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });

        this.props.history.push("/");
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <div>
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
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        name="email"
                                        id="email"
                                        type="email"
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        name="phone"
                                        id="phone"
                                        error={errors.phone}
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
            </div>
        );
    }
}
