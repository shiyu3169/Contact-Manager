import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

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
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
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
                                        value="Update Contact"
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
