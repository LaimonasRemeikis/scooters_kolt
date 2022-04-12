import React, {useState} from "react";
import {Button, Form, Table} from "react-bootstrap";
import { useScooters } from './hooks';
import { ScooterEditForm } from "./components";

const App = () => {
  const [selectedScooter, setSelectedScooter] = useState(null);
  const { scooters, deleteScooter, addScooter, editScooter } = useScooters();

  const handleOnEdit = (formData) => {
    editScooter(selectedScooter.id, formData);
    handleOnClose();
  };

  const handleOnClose = () => {
    setSelectedScooter(null);
  };

  return (
    <div className="p-4">
      <div className="container">
        <div className="d-flex align-items-end justify-content-end mb-2">
          <Button onClick={addScooter}>Add</Button>
        </div>
        <Table className="mb-2" striped bordered hover>
          <thead>
          <tr>
            <td>Id</td>
            <td>Registration code</td>
            <td>Is busy</td>
            <td>Last use time</td>
            <td>Total ride</td>
            <td>Actions</td>
          </tr>
          </thead>
          <tbody>
          {scooters.map(scooter => (
            <tr key={scooter.id}>
              <td>{scooter.id}</td>
              <td>{scooter.registrationCode}</td>
              <td><Form.Check type="checkbox" readOnly disabled checked={scooter.isBusy} /></td>
              <td>{scooter.lastUseTime}</td>
              <td>{scooter.totalRideKilometres}</td>
              <td className="d-flex align-items-center">
                <Button onClick={() => setSelectedScooter(scooter)} className="me-2" size="sm">Edit</Button>
                <Button onClick={() => deleteScooter(scooter.id)} variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      <ScooterEditForm onClose={handleOnClose} onSave={handleOnEdit} scooter={selectedScooter} />
    </div>
  );
};

export default App;
