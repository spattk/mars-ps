import React, { Component } from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Mars Photo Search Application</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Header
