import React from 'react';

export default function Spinner() {
    return (
        <div className="container">
            <div className="spinner-border mx-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
