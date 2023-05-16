import { getShoeData } from '../../db/firebase';
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from '../UI/Button';
import classes from '../onSale/OnSale.module.css';
import { Link } from 'react-router-dom';

const Trending = () => {
const [shoeData, SetShoeData] = useState([]);

useEffect(() => {
    getShoeData().then((response) => SetShoeData(response));
}, []);

const DrMartins = shoeData.filter((shoes) => shoes.Brand === "Dr. Martins");
const image = DrMartins.map(({ img }) => img);
const brand = DrMartins.map(({ Brand }) => Brand);
const name = DrMartins.map(({ Name }) => Name);
const price = DrMartins.map(({ Price }) => Price);

return (
    <div className={classes.wrapper}>
  <h2 className={classes.heading}>Shop The Doc.</h2>
    <div className={classes['card-container']}>
        { DrMartins.map((shoe)  => (
            <Card key={shoe.id} className={classes.card}>
            <Card.Img className={classes.image} variant="top" src={shoe.img} />
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

export default Trending;