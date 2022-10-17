import React, { Component } from 'react'
import "../css/Style.css"


export default class Loader extends Component {
    render() {
        return (
            <div className="text-center mb-3 loader">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-border-sm" role="status" aria-hidden="true"></span>
                    &nbsp; Loading...
                </button>
            </div>
        )
    }
}
