import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getShoeData } from '../../db/firebase';
import classes from './OnSale.module.css';
import Card from 'react-bootstrap/Card';
import Button from '../UI/Button';

const SaleShoes = () => {
    const [shoeData, setShoeData] = useState([]);

    useEffect(() => {
        getShoeData().then((response) => setShoeData(response))
    }, []);

    console.log(shoeData)

    const id = shoeData.map(({id}) => id)
    const image = shoeData.map(({img}) => img)
    const brand = shoeData.map(({Brand}) => Brand)
    const name = shoeData.map(({Name}) => Name)     
    const price = shoeData.map(({Price}) => Price) 
    console.log(id)
    
    return (
 <div className={classes.wrapper}>
  <h2 className={classes.heading}>On Sale This Month</h2>
    <div className={classes['card-container']}>
        { shoeData.map((shoe, index) => index < 10 && (
            <Card key={shoe.id} className={classes.card}>
            <Card.Img className={classes.img} variant="top" src={shoe.img} />
                <Card.Body>
                    <Card.Title className={classes.brand}>{shoe.Brand}</Card.Title>
                    <Card.Text className={classes.name}>{shoe.Name}</Card.Text>
                    <Card.Text className={classes.price}>$ {shoe.Price}</Card.Text>
                <Link to={`shoe/${shoe.id}`}>
                <Button>More Info</Button>
                </Link>
            </Card.Body>
      </Card>
            ))}
    </div>
</div>
    )
};
 export default SaleShoes;