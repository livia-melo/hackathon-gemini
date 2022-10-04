import * as React from 'react';
import { useParams } from 'react-router-dom';
import RestauranteCard from "../../components/RestauranteCard/RestauranteCard";
import { getRestauranteDetalhes } from '../../services/restaurantes.service';
import {
	TextField,
} from "@material-ui/core";
import ItemCard from '../../components/ItemCard/ItemCard';
import '../RestauranteDetalhes/style.css'

export default function RestauranteDetalhes() {
  const [restaurante, setRestaurante] = React.useState();
  const [cardapio, setCardapio] = React.useState();
  let { id } = useParams();

  React.useEffect(() => {
    getRestauranteDetalhes(id).then((response) => {
      console.log(response)
      setRestaurante(response)
      setCardapio(response.cardapio)
    })
  }, []);


  return (
     <div className='detalhes-container'>
         <RestauranteCard restaurante={restaurante}/>
         <p>{restaurante?.descricao}</p>
         <p>{restaurante?.endereco}</p>
        {cardapio?.map(opcao => (
          <div key={opcao?.categoria}>
            <h3>{opcao?.categoria}</h3>
            {opcao?.itens?.map(item => (
              <div key={item?.nome}>
              <ItemCard item={item}/>
              </div>
            ))}
          </div>
        ))}
         
     </div>
  );
}




// {restaurantesBaratinho?.map(restaurante => (
//   <div key={restaurante.id} onClick={() => navigate(`/restaurante-detalhes/${restaurante.id}`)}>
//   <RestauranteCard restaurante={restaurante}/>
// </div>