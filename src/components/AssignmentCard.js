import { Button, Stack, Card, ProgressBar } from 'react-bootstrap'
import { useAssignments } from '../contexts/AssignmentsContext'

export default function AssignmentCard ({
  name,
  module,
  date,
  percent,
  colour,
}) {

const { deleteAssignment } = useAssignments()

    return (
        <Card>
          <Card.Body className>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-bold mb-2">
              <div className="me-2">{module}</div>
              <div className="d-flex align-items-baseline text-muted"> Due: {date}</div>
            </Card.Title>
            <div className="mt-3 fw-normal">{name}</div>
            <div className="mt-3 fw-normal text-muted">% Complete</div>
            <ProgressBar
            style={{ "background-color": {colour}}}
            className="rounded-pill mt-1"
            striped
            animated
            min={0}
            max={100}
            now={percent}
            label={`${percent}%`} 
            />
            <Stack direction="horizontal" gap="2" className="mt-3">
              <p className="mt-3 fw-light ">&#8987; {date} Days remaining</p>
              <Button
              variant="outline-primary"
              className="ms-auto"
              >
                &#9998;
              </Button>
              <Button
               onClick={() => deleteAssignment({name})}
               variant="danger">
                &#10005;
              </Button>
          </Stack>
      </Card.Body>
    </Card>
    )
}