import { Button, Stack, Card, ProgressBar } from 'react-bootstrap'

export default function AssignmentCard ({}) {

    return (
        <Card>
          <Card.Body className>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-bold mb-2">
              <div className="me-2">Cyber Security</div>
              <div className="d-flex align-items-baseline text-muted"> Due: 18/2/2022, 23:59</div>
            </Card.Title>
            <div className="mt-3 fw-normal">Decryption Coursework</div>
            <div className="mt-3 fw-normal text-muted">% Complete</div>
            <ProgressBar
            className="rounded-pill mt-1"
            striped
            animated
            min={0}
            max={100}
            now={69}
            label={`${69}%`} 
            />
            <Stack direction="horizontal" gap="2" className="mt-3">
              <p className="mt-3 fw-light ">&#8987;  27 Days Remaining</p>
              <Button
              variant="outline-primary"
              className="ms-auto"
              >
                &#9998;
              </Button>
              <Button variant="danger">
                &#10005;
              </Button>
          </Stack>
      </Card.Body>
    </Card>
    )
}