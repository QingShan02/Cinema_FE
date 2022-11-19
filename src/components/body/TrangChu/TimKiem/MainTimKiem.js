import React from 'react';

function TimKiem() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <form className="d-flex w-75" role="search">
                    <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger w-25" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default TimKiem;