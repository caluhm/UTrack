import { Button, Stack, Card, ProgressBar } from 'react-bootstrap'

export default function ModuleCard ({}) {

  return (
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-bold mb-3">
            <div className="me-2">Modules</div>
          </Card.Title>
          <hr/>
          <div className="mb-3 fw-normal">Cyber Security <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
              </Button></div>
          <div className="mb-3 fw-normal">Operating Systems <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
              </Button></div>
          <div className="mb-3 fw-normal">Team Project <Button variant="danger" style={{ "margin-left": "1rem" }}>
                &#10005;
              </Button></div>
        </Card.Body>
    </Card>
    )
}