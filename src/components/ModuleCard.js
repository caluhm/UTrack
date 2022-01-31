import { Button, Card } from 'react-bootstrap'
import { useAssignments } from '../contexts/AssignmentsContext'

export default function ModuleCard ({

}) {
const { modules, deleteModule } = useAssignments()
  return (
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-bold mb-3">
            <div className="me-2">Modules</div>
          </Card.Title>
          <hr/>
          {modules.map(module => (
            <div className="mb-3 fw-normal">
              {module.name}
              <Button 
                onClick={() => deleteModule(module)}
                variant="danger" 
                style={{ "margin-left": "1rem", "background-color": module.colour, "borderBlockColor": "black" }} 
              >
                &#10005;
              </Button>
              
            </div>
          ))}       

            
            
          {/*<div className="mb-3 fw-normal">Cyber Security <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
              </Button></div>
          <div className="mb-3 fw-normal">Operating Systems <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
              </Button></div>
          <div className="mb-3 fw-normal">Team Project <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
        </Button></div>*/}
        </Card.Body>
    </Card>
    )
}