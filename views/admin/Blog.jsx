const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import {Root} from 'react-static'
import {Link} from '@reach/router'
// import '../assets/admin_css/style.admin_css'
// import Section from './pages/Section';


class Admin extends React.Component {

    render() {


        return (
            <div>
                <h1>Admin / BLog</h1>

                <form action="/profile" method="POST">
                    <input type="file" name="profileImage" />
                    <button>Upload</button>
                </form>

                <form action="/blog/create" method="POST">

                    <label>id *</label>
                    <input type="text" name="id"/>

                    <label>title *</label>
                    <input type="text" name="title"/>

                    <label>description *</label>
                    <input type="text" name="description"/>

                    <label>short_description *</label>
                    <input type="text" name="short_description"/>

                    <label>img *</label>
                    <input type="text" name="img"/>

                    <button>Update</button>

                </form>

            </div>
        )
    }
}

module.exports = Admin;