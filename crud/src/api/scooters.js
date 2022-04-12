// Nuskaitome scooterius is local storage
export const getScooters = () => {
  const scooters = localStorage.getItem('scooters');
  return scooters ? JSON.parse(scooters) : []; // [{id: 1}, {id: 2}, {id: 3}]
};

export const nextScootersDbId = () => {
  const scootersDbId = localStorage.getItem('scooters_db_id') ?? 0;
  const newScootersDbId = Number(scootersDbId) + 1;
  localStorage.setItem('scooters_db_id', newScootersDbId.toString());
  return Number(newScootersDbId);
};

// Irasome scooterius i local storage
export const setScooters = (scooters /*[{}, {}, {}]*/) => {
  localStorage.setItem('scooters', JSON.stringify(scooters));
};

export const addScooter = () => {
  const scooters = getScooters();

  const newScooter = {
    id: nextScootersDbId(),
    registrationCode: (Math.random() + 1).toString(36).substring(4),
    isBusy: false,
    lastUseTime: null,
    totalRideKilometres: 0
  };

  console.log(newScooter);

  scooters.push(newScooter);
  setScooters(scooters);
}; // [{}, {}, {}, {}]

export const editScooter = (id /*id: 3*/, data /*{}*/) => {
  const scooters = getScooters();

  // const scooterIndex = scooters.findIndex(scooter => scooter.id === id);
  // scooters[scooterIndex].registrationDate = "2020-10-11";
  // scooters[scooterIndex].id = 3;

  const updatedScooters = scooters.map((scooter) => {
    if (scooter.id !== id) return scooter;
    return { ...scooter, ...data };
  });

  setScooters(updatedScooters);
};

export const deleteScooter = (id) => {
  const scooters = getScooters();
  const updatedScooters = scooters.filter(scooter => scooter.id !== id);
  setScooters(updatedScooters);
}
