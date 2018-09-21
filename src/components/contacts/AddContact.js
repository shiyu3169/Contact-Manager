import React, { Component } from "react";

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
                                onChange={this.onChange}
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
                                onChange={this.onChange}
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
                                onChange={this.onChange}
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
