import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPeliculasById, deletePelicula } from '../actions/peliculasActions';
import { Container, Image, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import "../styles/peliculaDetail.css";

const PeliculaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        const data = await getPeliculasById(id);
        setPelicula(data);
      } catch (error) {
        console.error(`Error fetching movie with id ${id}:`, error);
      }
    };
    fetchPelicula();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletePelicula(id);
      navigate('/');
    } catch (error) {
      console.error(`Error deleting movie with id ${id}:`, error);
    }
  };

  const handleConfirmDelete = () => {
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleEdit = () => {
    navigate(`/peliculas/editar/${id}`);
  };

  if (!pelicula) {
    return <p>Cargando...</p>;
  }

  return (
    <Container className="mt-5 pelicula-detail">
      <Row>
        <Col md={6}>
          <Image src={pelicula.imagen} fluid className="pelicula-imagen" />
        </Col>
        <Col md={6}>
          <Card className="pelicula-info">
            <Card.Body>
              <Card.Title className="pelicula-titulo">{pelicula.titulo}</Card.Title>
              <Card.Text className="pelicula-descripcion">
                {pelicula.descripcion}
              </Card.Text>
              <div className="d-flex justify-content-start">
                <Button variant="warning" onClick={handleEdit} className="btn-lg me-2">
                  Editar
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete} className="btn-lg">
                  Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirm} onHide={handleCloseConfirm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar esta película? Esta acción no se puede deshacer.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PeliculaDetail;
