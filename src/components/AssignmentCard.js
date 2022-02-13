import { Button, Stack, Card, ProgressBar } from 'react-bootstrap'
import { useAssignments } from '../contexts/AssignmentsContext'
import { useState } from "react"
import moment from 'moment'

export default function AssignmentCard ({
  name,
  module,
  date,
  percent,
  colour,
  onEditAssignmentClick,
}) {
const { deleteAssignment } = useAssignments()
const { modules } = useAssignments()
var formattedDate = moment(date).format("Do MMM YY")
var daysFrom = moment(date).fromNow()
const moduleColour = modules.filter(b => b.name === module)

    return (
        <Card>
          <Card.Body className>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-bold mb-2">
              <div className="me-2" style={{ "font-size": "1.1rem"}}>{module}</div>
              <div className="d-flex align-items-baseline text-muted">{formattedDate}</div>
            </Card.Title>
            <div className="mt-3 fw-normal">{name}</div>
            <div className="mt-3 fw-normal text-muted">% Complete</div>
            <ProgressBar
            className="rounded-pill mt-1"
            striped
            animated
            min={0}
            max={100}
            now={percent}
            label={`${percent}%`} 
            />
            <Stack direction="horizontal" gap="2" className="mt-3">
              <p className="mt-3 fw-light ">&#8987; Due {daysFrom}</p>
              <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onEditAssignmentClick}
              >
                &#9998;
              </Button>
              {moduleColour.map(module =>
              <Button
               onClick={() => deleteAssignment({name})}
               variant="danger"
               style={{ "background-color": module.colour, "borderBlockColor": "black" }}>
                &#10005;
              </Button>
              )}
          </Stack>
      </Card.Body>
    </Card>
    )
}