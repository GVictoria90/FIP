//Ejercicio 3: Encontrar el error 


//profile va con la inicial en mayuscula, en todos lados
//y le falta un export, adelante de donde dice function profile
//tambien una linea al final de todo
//export default App;
//asi deberia quedar:


export function Profile (){ 
  return( 
      <img 
         src = "https://i.imgur.com/lICfvbD.jpg" 
         alt = "Aklilu Lemma" 
      /> 
 
  ); 
} 
 
let App3 = function Gallery() { 
  return ( 
    <div className="App3"> 
      <Profile /> 
    </div> 
  ); 
} 
 
export default App;