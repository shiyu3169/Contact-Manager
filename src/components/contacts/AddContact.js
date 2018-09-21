import React, { Component } from "react";

export default class AddContact extends Component {
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    static defaultProps = {
        name: "Fred Smith",
        email: "fread@yahoo.com",
        phone: "777-777-7777"
    };

    render() {
        const { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control form-contorl-lg"
                                placeholder="Enter Name..."
                                name="name"
                                id="name"
                                defaultValue={name}
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
                                defaultValue={email}
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
                                defaultValue={phone}
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
