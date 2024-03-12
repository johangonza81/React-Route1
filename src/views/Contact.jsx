import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () =>{
    return (
    <>
    <h1>Cuentanos, ¿en que te podemos ayudar? </h1>
 
    <Form>
      <Form.Group className="formulario" controlId="formBasicEmail">
        <Form.Label >Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="formulario" controlId="formBasicPassword">
        <Form.Label >Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button className="formulario2" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <img className="imagen2" src=".\src\assets\imagen\contacto1212.jpg"/>
     
        </>
    )
}
export default Contact;