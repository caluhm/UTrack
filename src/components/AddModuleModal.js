import { Button, Modal, Form } from 'react-bootstrap'

export default function AddModuleModal ({ show, handleClose }) {

  function handleSubmit(e) {
    e.preventDefault()
    handleClose()
  }

    return (
        <Modal show= {show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="assignment-name">
                <Form.Label>Module Name</Form.Label>
                <Form.Control type="text" placeholder='Example Name'required />
              </Form.Group>
              <Form.Group>
              <Form.Label htmlFor="exampleColorInput">Colour Code</Form.Label>
                <Form.Control
                    type="color"
                    id="module-colour-input"
                    defaultValue="#0D6EFD"
                    title="Choose your color"
                />
              </Form.Group> 
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </div>
            </Modal.Body>
          </Form>
        </Modal>
    )
 }