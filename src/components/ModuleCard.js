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
          {modules.map(module => (
            <div className="fw-normal" style={{ "margin-bottom": "0.875rem"}}>
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
        </Card.Body>
    </Card>
    )
}