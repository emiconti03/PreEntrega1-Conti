import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBarra() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Categorias</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#almacen">Almacen</Nav.Link>
            <Nav.Link href="#bebidas">Bebidas</Nav.Link>
            <Nav.Link href="#frescos">Frescos</Nav.Link>
            <Nav.Link href="#congelados">Congelados</Nav.Link>
            <Nav.Link href="#limpieza">Limpieza</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarra;