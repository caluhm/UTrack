import { Button, Modal, Form } from 'react-bootstrap'
import { useRef } from "react"
import { useAssignments } from "../contexts/AssignmentsContext"

export default function AddModuleModal ({ show, handleClose }) {
  const nameRef = useRef()
  const colourRef = useRef()
  const { addModule } = useAssignments()
  function handleSubmit(e) {
    e.preventDefault()
    addModule({
      name: nameRef.current.value,
      colour: colourRef.current.value,
    })
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
                <Form.Control ref={nameRef} type="text" placeholder='Example Name' maxlength="17" required />
              </Form.Group>
              <Form.Group>
              <Form.Label htmlFor="exampleColorInput">Colour Code</Form.Label>
                <Form.Control
                  ref={colourRef}
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