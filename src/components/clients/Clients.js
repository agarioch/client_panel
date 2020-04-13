import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
    render() {
        const clients = [{
            id: '434343434',
            firstName: 'Kevin',
            lastName: 'Jones',
            email: 'kjones@gmail.com',
            phone: '556-678-4432',
            balance: '30'
        },
        {
            id: '434343434',
            firstName: 'Mary',
            lastName: 'McLeigh',
            email: 'MM@mail.ed.uc.uk',
            phone: '0786209954',
            balance: '55'
        }
        ]

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fas fa-users mr-3 text-black-50"></i>Clients</h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <table className="table table-striped mt-3">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => (
                                <tr key={client.id}>
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>£{parseFloat(client.balance).toFixed(2)}</td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn-secondary btn-sm">
                                            <i className="fas fa-arrow-circle-right"></i> Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default Clients;