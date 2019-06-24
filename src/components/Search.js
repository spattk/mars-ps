import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msoi: '',
      camera: '',
      hasError: false,
      btnContent: 'Find Photos'
    }
  }

  onSearchClick = (msoi, camera) => {
    if (msoi === '' || camera === '') {
      this.setState({ hasError: true });
      this.props.clearList();
    }
    else {
      this.setState({ hasError: false, btnContent: 'Loading...' }, () => {
        simulateNetworkRequest().then(() => { this.setState({ btnContent: 'Photo Search' }) })
      })
      this.props.onSearchClick(msoi, camera);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSelect = (e) => {
    this.setState({ camera: e.target.innerText })
  }

  render() {

    const lists = this.props.results.map((result) => {
      return (<div key={result.id}>{result.body}</div>)
    })

    return (
      <React.Fragment>
        <Form>
          <Container>

            <Row>
              <Col className='col-md-5 '>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column md={4} >

                    Mission SoI <br /> <span style={{ color: 'red', fontWeight: 'bold' }}> Integer > 0 </span>

                  </Form.Label>
                  <Col>
                    <Form.Control required type="number" name="msoi" value={this.state.msoi} onChange={this.onChange} />
                  </Col>
                </Form.Group>
              </Col>

              <Col className='col-md-5'>
                <Form.Group as={Row} controlId="formBasicPassword" >
                  <Form.Label column md={2}>Camera</Form.Label>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {this.state.camera}
                      </Dropdown.Toggle>
                      <Dropdown.Menu value={this.state.camera} required>
                        <Dropdown.Item onClick={this.onSelect}>FHAZ</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>RHAZ</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>MAST</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>CHEMCAM</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>MAHLI</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>MARDI</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>NAVCAM</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>PANCAM</Dropdown.Item>
                        <Dropdown.Item onClick={this.onSelect}>MINITES</Dropdown.Item>

                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Form.Group>
              </Col>

              <Col className='col-md-2'>
                <Button onClick={() => { this.onSearchClick(this.state.msoi, this.state.camera) }}>
                  {this.state.btnContent}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                {this.state.hasError ? (<div style={{ color: 'red' }}>Both the fields are required. Please input the values and then continue your search<br />Ex : Mission SoI : 100, Camera : FHAZ</div>) : (<div>{lists}</div>)}
              </Col>
            </Row>
          </Container>
        </Form>

      </React.Fragment>
    )
  }
}

export default Search
