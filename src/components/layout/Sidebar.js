import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <Link to="/client/add" className="btn btn-secondary btn-block">
            <i className="fas fa-plus"></i> New
        </Link>
    )
}
