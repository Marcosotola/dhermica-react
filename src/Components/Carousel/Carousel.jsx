import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Carousel.css'
import Promo1 from '../Slider/promoDepi.png'
import Promo2 from '../Slider/promoFacial.png'
import Promo3 from '../Slider/promoManiPedi.png'
import { Link } from 'react-router-dom'


function Example(props) {
    var items = [
        {
            name: Promo1,
            description: ""
        },
        {
            name: Promo2,
            description: ""
        },
        {
            name: Promo3,
            description: ""
        }
    ]

    return (
        <Carousel className='carousel'>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.name} alt='promos'></img>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                <Link to='./tratamientos'>
                    <h3> Hecha un Vistazo!</h3>
                </Link>
            </Button>
        </Paper>
    )
}
export default Example