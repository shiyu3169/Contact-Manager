import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    };

    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            dispatch({ type: "DELETE_CONTACT", payload: id });
        } catch (e) {
            // Only for jsonplaceholder. Not neccessary for real back end data
            dispatch({ type: "DELETE_CONTACT", payload: id });
        }
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    onClick={() => {
                                        this.setState({
                                            showContactInfo: !showContactInfo
                                        });
                                    }}
                                    className="fas fa-sort-down"
                                    style={{ cursor: "pointer" }}
                                />
                                <i
                                    className="fas fa-times float-right"
                                    style={{ cursor: "pointer", color: "red" }}
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: "point",
                                            float: "right",
                                            color: "black",
                                            marginRight: "1rem"
                                        }}
                                    />
                                </Link>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };
