import * as React from 'react';
import '../ItemCard/ItemCard.css'

export default function ItemCard(props) {
  return (
     <div className='item-container'>
         <div className='item-card'>
         <img src={props.item.imagem}></img>
            <div className='item-informacoes'>
               <span><strong>{props.item.nome}</strong></span>
               <span>{props.item.descricao}</span>
               <span className='item-preco'>R${props.item.valor}</span>
               </div>
         </div>
     </div>
  );
}
