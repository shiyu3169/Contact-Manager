import React, { Component } from "react";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control form-contorl-lg"
                                placeholder="Enter Name..."
                                name="name"
                                id="name"
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control form-contorl-lg"
                                placeholder="Enter Email..."
                                name="email"
                                id="email"
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control form-contorl-lg"
                                placeholder="Enter Phone Number..."
                                name="phone"
                                id="phone"
                                value={phone}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
