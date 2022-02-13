import './App.css';
import logo from './logo.png'
import { ButtonGroup, Button, Stack, Dropdown } from 'react-bootstrap'
import Container from "react-bootstrap/Container"
import AddAssignmentModal from './components/AddAssignmentModal'
import AddModuleModal from './components/AddModuleModal'
import { useState } from "react"
import AssignmentCard from './components/AssignmentCard';
import ModuleCard from './components/ModuleCard';
import { useAssignments } from './contexts/AssignmentsContext'
import { AssignmentsProvider } from './contexts/AssignmentsContext';
import EditAssignmentModal from './components/EditAssignmentModal';

function App() {
  const [showAddModuleModal, setShowAddModuleModal] = useState(false)
  const [showAddAssignmentModal, setShowAddAssignmentModal] = useState(false)
  const [EditAssignmentModalAssignmentId, setEditAssignmentModalAssignmentId] = useState()
  const [ByPercentInc, setByPercentInc] = useState(false)
  const [ByPercentDec, setByPercentDec] = useState(false)
  const [ByOrder, setByOrder] = useState(true)
  const { assignments } = useAssignments()
 
  const sortedByPercentInc = assignments.slice().sort((a, b) => {
    return a.percent - b.percent;
  })

  const sortedByPercentDec = assignments.slice().sort((a, b) => {
    return b.percent - a.percent;
  })

  function set1() {
    setByOrder(true)
    setByPercentInc(false)
    setByPercentDec(false)
  }

  function set2() {
    setByOrder(false)
    setByPercentInc(true)
    setByPercentDec(false)
  }

  function set3() {
    setByOrder(false)
    setByPercentInc(false)
    setByPercentDec(true)
  }

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
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => set1()}>Order Added
              </Button>
            <Button variant="secondary" onClick={() => set2()}>%Complete ↑
              </Button>
            <Button variant="secondary" onClick={() => set3()}>%Complete ↓
              </Button>
          </ButtonGroup>
        </Stack>
        <AddAssignmentModal 
          show={showAddAssignmentModal}
          handleClose={() => setShowAddAssignmentModal(false)}
        /> 
        <EditAssignmentModal
            assignmentId={EditAssignmentModalAssignmentId}
            handleClose={() => setEditAssignmentModalAssignmentId()}
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

        {ByOrder ?
        assignments.map(assignment => 
          <AssignmentCard
            name={assignment.name}
            module={assignment.module}
            date={assignment.date}
            percent={assignment.percent}
            colour={assignment.module.colour}
            onEditAssignmentClick = {() => setEditAssignmentModalAssignmentId(assignment.id)}
          />
        ) : null}
          
        {ByPercentInc ?
        sortedByPercentInc.map(assignment => 
          <AssignmentCard
            name={assignment.name}
            module={assignment.module}
            date={assignment.date}
            percent={assignment.percent}
            colour={assignment.module.colour}
            onEditAssignmentClick = {() => setEditAssignmentModalAssignmentId(assignment.id)}
          />
        ) : null}

        {ByPercentDec ?
        sortedByPercentDec.map(assignment => 
          <AssignmentCard
            name={assignment.name}
            module={assignment.module}
            date={assignment.date}
            percent={assignment.percent}
            colour={assignment.module.colour}
            onEditAssignmentClick = {() => setEditAssignmentModalAssignmentId(assignment.id)}
          />
        ) : null}
        
        </div>
      </Container>
    </>
  );
}

export default App;
