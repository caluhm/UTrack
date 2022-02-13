import { Button, Modal, Form } from 'react-bootstrap'
import { useRef } from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import { useAssignments } from '../contexts/AssignmentsContext'


export default function EditAssignmentModal ({ assignmentId, handleClose }) {
  const dateRef = useRef()
  const percentRef = useRef()
  const { assignments } = useAssignments()
  const { updateAssignment } = useAssignments()
  const details = assignments.filter(b => b.id === assignmentId)
  function handleSubmit(e) {
    e.preventDefault()
    updateAssignment({
        
        id: assignmentId,
        newDate: dateRef.current.value,
        newPercent: percentRef.current.value,
    })
    handleClose()
  }
  
    return (
          <Modal show= {assignmentId != null} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Assignment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="assignment-name">
                <Form.Label>Assignment Name</Form.Label>
                {details.map(detail =>
                <Form.Control type="text" defaultValue={detail.name} disabled />
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-desc">
                <Form.Label>Module</Form.Label>
                {details.map(detail => 
                <Form.Control type="text" defaultValue={detail.module} disabled />
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-due-date">
                <Form.Label>Due Date</Form.Label>
                {details.map(detail => 
                <Form.Control ref={dateRef} type="datetime-local" defaultValue={detail.date} required />
                )}  
              </Form.Group>
              <Form.Group className="mb-3" controlId="assignment-%-complete">
                <Form.Label>% Complete </Form.Label>
                <InputGroup className="mb-3">
                {details.map(detail => 
                  <Form.Control
                    ref={percentRef}
                    type="number"
                    placeholder="0-100%"
                    required
                    min={0}
                    max={100}
                    step={10}
                    defaultValue={detail.percent}
                  />
                  )}  
                  <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Modal.Body>
          </Form>
        </Modal>
    
        
        
        
    )



}

