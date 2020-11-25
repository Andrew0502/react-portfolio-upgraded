import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import images for projects.
import PTLogo from '../assets/images/PTLogo.png';
import WPLogo from '../assets/images/WPLogo.png';
import WDLogo from '../assets/images/WDLogo.png';

class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items: [
              {
                id: 0,
                title: 'Positive Thoughts',
                subTitle: 'Sending Messages of Encouragement.',
                imgSrc: PTLogo,
                link: 'https://positive-thoughts-gt.herokuapp.com/',
                selected: false
              },
              {
                id: 1,
                title: 'Weather Board',
                subTitle: 'An app for weather in cities around the world.',
                imgSrc: WPLogo,
                link: 'https://andrew0502.github.io/weather-board',
                selected: false
              },
              {
                id: 2,
                title: 'What’s for Dinner!?',
                subTitle: 'An App that fixes food indecisiveness.',
                imgSrc: WDLogo,
                link: 'https://andrew0502.github.io/whats-for-dinner/',
                selected: false
            },
        ]
      }  
    }
    
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;