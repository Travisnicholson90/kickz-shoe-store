import { useState, useEffect } from "react";
import { getShoeData } from "../../db/firebase";
import Card from 'react-bootstrap/Card';
import Button from '../../components/UI/Button';
import { Link } from "react-router-dom";



const Dress = () => {
    const [shoeData, setShoeData] = useState([]);

    useEffect(() => {
        getShoeData().then((response) => setShoeData(response));
    }, [])

    // can you return all the shoes with a category of dress?
    const dressShoes = shoeData.filter((shoe) => shoe.Brand === 'Dr. Martins')
    
    const { Name, Brand, Price, img } = dressShoes;

    return (
    <div>
        <div>
           <h2 className="text-4xl font-bold p-3 m-5">Mens Dress Shoes</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                   { dressShoes.map((dressShoes) =>  (
                       <Card className="p-5" key={dressShoes.id}>
                       <Card.Img className="w-full object-cover aspect-square" variant="top" src={dressShoes.img} />
                           <Card.Body>
                               <Card.Title className="text-xl font-bold py-1">{dressShoes.Brand}</Card.Title>
                               <Card.Text>{dressShoes.Name}</Card.Text>
                               <Card.Text className="text-lg font-bold py-1">$ {dressShoes.Price}</Card.Text>
                           <Link to={`shoe/${dressShoes.id}`}>
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
export default Dress;