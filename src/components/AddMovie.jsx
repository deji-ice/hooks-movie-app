import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap"



function AddMovie() {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0, });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  };
  const handleChange = (e) => {
    setShow({ [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault();

  };
  return (
    <>
      <button onClick={handleShow} className="bg-white rounded-md p-1"> add movie </button>

      <Modal
        show={show}
        onHide={handleClose}
        handleShow={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPosterURL">
              <Form.Label>posterUrl</Form.Label>
              <Form.Control type="text" placeholder="posterURL" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPosterURL">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPosterURL">
              <Form.Label>Ratings</Form.Label>
              <Form.Control type="number" placeholder="ratings" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {
            handleClick(e);
            handleShow();
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie