import React, { Component } from 'react';
import Search from '../../components/Search'
import Header from '../../components/layout/Header'
import ImageItem from '../../components/ImageItem';
import Container from 'react-bootstrap/Container';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            API_KEY: '0ywd5r3RzqvCZoo5Y9ZZZHRVfklCUbfOR859tIlP',
            isFirst: true
        }
    }

    onSearchClick = (msoi, camera) => {
        //console.log(`from home.js ${msoi} and ${camera}`);
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${msoi}&camera=${camera}&api_key=${this.state.API_KEY}`)
            .then(res => res.json())
            .then(photos => this.setState({ list: photos.photos, isFirst: false }))
    }

    clearList = () => {
        this.setState({ list: [] })
    }


    render() {
        const { list, isFirst } = this.state;
        return (
            <div className='App'>
                <Header />
                <br />
                <Container>
                    <Search onSearchClick={this.onSearchClick} results={this.state.list} clearList={this.clearList} />
                    {

                        list.length ?
                            (list.map((item) => {
                                return (
                                    <ImageItem key={item.id} img={item.img_src} ></ImageItem>
                                )
                            })) :
                            (
                                isFirst ?
                                    (<Container><br /><div ><h6>Please start your searching</h6></div></Container>) : (<Container>
                                        <br /><div>
                                            <h6 style={{ textTransform: 'uppercase' }}>No photos found for the search !!!</h6>
                                        </div></Container>))
                    }
                </Container>
            </div>
        )
    }
}

export default Home;
