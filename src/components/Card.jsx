/*Componente card debe tener
1.-Imagen
2.- Una parte con texto donde va a ir su nombre
3.- 2 links, uno a github y uno a linkedin
*/

export default function Card() {
  //creando objeto de estilos para el componente
  const cardStyle = {
    width: "30rem",
    height: "25rem",
    backgroundColor: "#f9cf54",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem auto",
    padding: "1rem"
  }

  const imageStyle = {
    width: "18rem",
    height: "auto",
    borderRadius: "1rem",
    marginBottom: "1rem"
  }

  const h3Style = {
    color: "#066d11",
    fontFamily: "Poppins",
    fontSize: "2rem"
  }

  const textStyle = {
    color: "#5c1305",
    fontFamily: "Arial"
  }

  return (
    <div style={cardStyle}>
      <h3 style={h3Style}>Raúl Maldonado</h3>
      <img src="https://cdn.pixabay.com/photo/2021/09/02/13/26/salami-pizza-6593465_1280.jpg" alt="Pizza Favorita" style={imageStyle} />
      <p style={textStyle}>Mi pizza favorita es la de pepperoni</p>
      <a href="https://github.com/RaulMP30" target="_blank" style={textStyle}>Github</a>
      <a href="www.linkedin.com/in/raúlmp" target="_blank" style={textStyle}>Linkedin</a>
    </div>
  )
}