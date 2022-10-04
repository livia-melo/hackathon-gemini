import * as React from 'react';
import '../RestauranteCard/RestauranteCard.css';

export default function RestauranteCard(props) {
  return (
     <div className='container'>
         <div className='card'>
         <img src={props.restaurante?.imagem}></img>
            <div className='informacoes'>
               <span><strong>{props.restaurante?.nome}</strong></span>
               <span>{props.restaurante?.distancia} km</span>
               <span>{props.restaurante?.nota}</span>
               <span>{props.restaurante?.tempo_medio} - {props.restaurante?.valor_entrega == 0 ? 'Grátis': `R$${props.restaurante?.valor_entrega}`}</span>
            </div>
         </div>
     </div>
  );
}
