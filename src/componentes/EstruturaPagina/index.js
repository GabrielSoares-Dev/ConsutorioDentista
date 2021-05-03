
import React from 'react';

import Cabecalho from '../cabecalho/';
import Rodape from '../rodape/';



const  EstruturaPagina =(props) => (
<body>
  <Cabecalho/>


    {props.children}

<Rodape/>

</body>

)
  
export default EstruturaPagina;