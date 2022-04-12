import { ScootersClient } from "../api";
import {useCallback, useEffect, useState} from "react";

const useScooters = () => {
  const [scooters, setScooters] = useState([]);

  // Kad galetum naudoti funkcija useEffect viduje
  const updateScooters = useCallback(() => {
    const initialScooters = ScootersClient.getScooters();
    setScooters(initialScooters);
  }, []);

  useEffect(() => {
    updateScooters();
  }, [updateScooters]);

  const addScooter = () => {
    ScootersClient.addScooter();
    updateScooters();
  };

  const deleteScooter = (id) => {
    ScootersClient.deleteScooter(id);
    updateScooters();
  };

  const editScooter = (id, formData) => {
    ScootersClient.editScooter(id, formData);
    updateScooters();
  };

  return { scooters, deleteScooter, addScooter, editScooter };
};

export default useScooters;
