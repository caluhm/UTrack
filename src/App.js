import './App.css';
import logo from './logo.png'
import { Button, Stack, Dropdown, Card, ProgressBar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import AddAssignmentModal from './components/AddAssignmentModal'
import AddModuleModal from './components/AddModuleModal'
import { useState } from "react"
import AssignmentCard from './components/AssignmentCard';
import ModuleCard from './components/ModuleCard';

function App() {
  const [showAddModuleModal, setShowAddModuleModal] = useState(false)
  const [showAddAssignmentModal, setShowAddAssignmentModal] = useState(false)
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
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        </div>
            
        
      </Container>
    </>
  );
}

export default App;
