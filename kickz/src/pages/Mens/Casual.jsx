import { useState, useEffect } from "react";
import { getShoeData } from '../../db/firebase';
import Card from 'react-bootstrap/Card';
import Button from '../../components/UI/Button';
import { Link } from "react-router-dom";


const Casual = () => {
    const [shoeData, setShoeData] = useState([])

    useEffect(() => {
        getShoeData().then((response) => setShoeData(response))
    }, [])

    console.log(shoeData)
    const image = shoeData.map(({img}) => img)
    const brand = shoeData.map(({Brand}) => Brand)
    const name = shoeData.map(({Name}) => Name)     
    const price = shoeData.map(({Price}) => Price) 


    return (
  <div>
     <div>
        <h2 className="text-4xl font-bold p-3 m-5">Mens Casual Shoes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                { shoeData.map((shoe) =>  (
                    <Card className="p-5" key={shoe.id}>
                    <Card.Img className="w-full object-cover aspect-square" variant="top" src={shoe.img} />
                        <Card.Body>
                            <Card.Title>{shoe.Brand}</Card.Title>
                            <Card.Text>{shoe.Name}</Card.Text>
                            <Card.Text>$ {shoe.Price}</Card.Text>
                        <Link to={`shoe/${shoe.id}`}>
                            <Button>More Info</Button>
                        </Link>
                    </Card.Body>
            </Card>
                    ))}
        </div>   
    </div>
</div>
    )
}

export default Casual;