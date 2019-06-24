import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'

class ImageItem extends Component {
    render() {
        return (

            <img src={this.props.img} className='col-md-3' style={{ paddingBottom:'15px', paddingTop:'15px', marginBottom:'10px'}} />

        )
    }
}

export default ImageItem
