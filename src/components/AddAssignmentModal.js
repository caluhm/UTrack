import { Button, Modal, Form } from 'react-bootstrap'
import { useRef } from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import { useAssignments } from '../contexts/AssignmentsContext'


export default function AddAssignmentModal ({ show, handleClose }) {
  const nameRef = useRef()
  const moduleRef = useRef()
  const dateRef = useRef()
  const percentRef = useRef()
  const { addAssignment } = useAssignments()
  const { modules } = useAssignments()
  function handleSubmit(e) {
    e.preventDefault()
    addAssignment({
      name: nameRef.current.value,
      module: moduleRef.current.value,
      date: dateRef.current.value,
      percent: percentRef.current.value,
    })
    handleClose()
  }

    return (
          <Modal show= {show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="assignment-name">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder='Example Name'required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-desc">
                <Form.Label>Module</Form.Label>
                <Form.Select ref={moduleRef}>
                {modules.map(module => (
                  <option>{module.name}</option>
                ))}
                  
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-due-date">
                <Form.Label>Due Date</Form.Label>
                <Form.Control ref={dateRef} type="datetime-local" required />  
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-%-complete">
                <Form.Label>% Complete </Form.Label>
                <InputGroup className="mb-3">
                  
                  <Form.Control
                    ref={percentRef}
                    type="number"
                    placeholder="0-100%"
                    required
                    min={0}
                    max={100}
                    step={10}
                  />
                  <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                </InputGroup>
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

