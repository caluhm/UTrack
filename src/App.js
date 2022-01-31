import './App.css';
import logo from './logo.png'
import { Button, Stack, Dropdown } from 'react-bootstrap'
import Container from "react-bootstrap/Container"
import AddAssignmentModal from './components/AddAssignmentModal'
import AddModuleModal from './components/AddModuleModal'
import { useState } from "react"
import AssignmentCard from './components/AssignmentCard';
import ModuleCard from './components/ModuleCard';
import { useAssignments } from './contexts/AssignmentsContext'
import { AssignmentsProvider } from './contexts/AssignmentsContext';


function App() {
  const [showAddModuleModal, setShowAddModuleModal] = useState(false)
  const [showAddAssignmentModal, setShowAddAssignmentModal] = useState(false)
  const { assignments } = useAssignments()
  
  return (
    <>
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4 mt-4">
          <Stack direction="horizontal" gap="2" className="me-auto"> 
            <img src={logo} alt="Logo" className="image"/>
            <h1 className="title">UTrack</h1>
          </Stack>
          <Button variant="outline-primary" onClick={() => setShowAddModuleModal(true)}>Add Module</Button>
          <Button variant="primary" onClick={() => setShowAddAssignmentModal(true)}>Add Assignment</Button>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Order By</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Due Date</Dropdown.Item>
              <Dropdown.Item href="#/action-2">% Complete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
        <AddAssignmentModal 
          show={showAddAssignmentModal}
          handleClose={() => setShowAddAssignmentModal(false)}
        /> 
        <AddModuleModal 
          show={showAddModuleModal}
          handleClose={() => setShowAddModuleModal(false)}
        /> 
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
        <ModuleCard />
        {assignments.map(assignment => 
        <AssignmentCard
          name={assignment.name}
          module={assignment.module}
          date={assignment.date}
          percent={assignment.percent}
          colour={assignment.module.colour}
        />
        )}
        </div>
            
        
      </Container>
    </>
  );
}

export default App;
