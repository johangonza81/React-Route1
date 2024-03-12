import { Link } from "react-router-dom"
import { Container,Navbar } from "react-bootstrap"




const Navigator = () =>{
    return(
    <>
    <Navbar 
    bg="danger">
      <Container >
        <Navbar className="Container3" >
            <Link to="/" className="link">Home 🏠</Link>  
            <Link to="/Contact" className="link">Contacto 📓</Link>
        </Navbar>
        
          <Navbar.Text className="Container3">
            Happy Cake 🎂
          </Navbar.Text>
        
      </Container>
    </Navbar><br></br>
    
    </>
    )
} 
export default Navigator;



