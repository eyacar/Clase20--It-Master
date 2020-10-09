import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './index.css'


const App = () =>{
const [paswords, setCount] = useState([]);
function ObtenerPass () {
const pasword = []
const valores = ['A','B','C','D','E','F','G','H','Y','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0]
do {
  const random = Math.floor(Math.random()*valores.length)
  pasword.push(valores[random])
} while (pasword.length < 12);
setCount(pasword)
}
return (
  <>
  <h1>Random Password!!!</h1>
  <p>La contraseña obtenida es: <span>{paswords}</span></p>
  <div id="contraseña">
  <Button variant="contained" color="primary" onClick={(ObtenerPass)}>Obtenga su contraseña</Button>
  </div>
  </>
)
}

ReactDOM.render(<App />,document.getElementById('root'));

