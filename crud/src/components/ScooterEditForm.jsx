import { Button, Col, Row, Form, Modal } from "react-bootstrap";
import {useState} from "react";

const ScooterEditForm = (props) => {
  const { onClose, scooter, onSave } = props;
  const [formData, setFormData] = useState({});

  const handleDateChange = (value) => {
    setFormData({...formData, lastUseTime: value});
  };

  const handleDayRideChange = (value) => {
    setFormData({...formData, totalRideKilometres: scooter.totalRideKilometres + Number(value)});
  };

  const handleIsBusyChange = (value) => {
    setFormData({...formData, isBusy: value});
  };

  const handleOnSave = () => {
    onSave(formData);
  };

  const handleOnShow = () => {
    setFormData({ isBusy: scooter.isBusy });
  };

  return (
    <Modal onShow={handleOnShow} show={!!scooter} onHide={onClose} className="scooter-form">
      <Modal.Header closeButton>
        <Modal.Title>Edit scooter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Registration code</Form.Label>
              <Form.Control value={scooter?.registrationCode ?? ""} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Last use time</Form.Label>
              <Form.Control value={scooter?.lastUseTime ?? ""} disabled />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Last use time</Form.Label>
              <Form.Control type="date" onChange={($event) => handleDateChange($event.currentTarget.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Total ride</Form.Label>
              <Form.Control value={scooter?.totalRideKilometres} disabled />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Day ride</Form.Label>
              <Form.Control type="number" onChange={($event) => handleDayRideChange($event.currentTarget.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="registrationCode">
              <Form.Label>Is busy</Form.Label>
              <Form.Check type="checkbox" onChange={($event) => handleIsBusyChange($event.currentTarget.checked)} checked={formData?.isBusy ?? false} />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="secondary" className="me-2">Close</Button>
        <Button onClick={handleOnSave} variant="success">Save</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ScooterEditForm;
