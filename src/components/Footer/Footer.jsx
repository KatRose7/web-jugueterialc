import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import perfil from "../../Images/perfil2.jpeg";
const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <img src={perfil} alt="perfil" className="img-footer"/>
                  <h1>Jugueteria Leo y Chris</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Sobre la Jugueteria</h2>
              <ul>
                <li>Categorias</li>
                <li>Nuestras Tiendas</li>
                <li>Terminos y Condiciones</li>
                <li>Politica Privada</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Preguntas Frecuentes</h2>
              <ul>
                <li>Contacto Central </li>
                <li>Haz tu nuevo pedido </li>
                <li>Juguetes para Todo tipo de edad</li>
                <li>Tu pregunta no molesta </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contactos</h2>
              <ul>
                <li>Universidad Mayor de San Andres - La Paz Bolivia </li>
                <li>jugueteria12020@gmail.com</li>
                <li>jugueteria2@gmail.com</li>
                <li>Telefono: +591 0000000</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
