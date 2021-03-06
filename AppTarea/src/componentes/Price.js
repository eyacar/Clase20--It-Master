import React from 'react';
import tileData from './tileData';
import './componentes.scss';


const Productos = tileData.map((pro, i) => <tr key={i}> <td>{pro.title}</td> <td>{pro.author}</td> </tr>)

const Price = () =>(
    <table>
    <thead>
     <th>Producto</th>
     <th>Precio</th>
    </thead>
    <tbody>
    {Productos}
    </tbody>
    </table>
)

export default Price;
