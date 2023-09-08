import React, { useState } from "react";

const App = () => {
  //Create an array of object and update its second index
  const [obj, setObj] = useState([
    {
      id: 1,
      name: "Carl Argente",
    },
    {
      id: 2,
      name: "James Argente",
    },
    {
      id: 3,
      name: "Jov Lepalam",
    },
  ]);
  const [person, setPerson] = useState({
    id: 1,
    name: " Carl Emerson Llamera Argente",
    age: 23,
    country: "Philippines",
    isIntern: true,
    hobbies: ["Gaming", "Watching Kdrama/Anime"],
    address: {
      street: "WildFlower St.",
      city: "Cainta, Rizal",
      zipCode: "1900",
    },
    birthday: new Date("1999-10-23"),
  });

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const displayData = obj.map((data) => {
    return <p key={data.id}>{data.name}</p>;
  });
  const displayPerson = (
    <>
      <h5>Person Information</h5>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Is Student: {person.isStudent ? "Yes" : "No"}</p>
      <p>Hobbies: {person.hobbies.join(", ")}</p>
      <p>
        Address: {person.address.street}, {person.address.city},{" "}
        {person.address.zipCode} {person.country}
      </p>
      <p>Birthday: {formatDate(person.birthday)}</p>
    </>
  );

  const handleUpdate = (e) => {
    const updateData = [...obj]; //Create a copy of object
    updateData[1] = {
      ...updateData[1], //copy the existing object property of specific index
      name: "Jelly Argente", //new value for selected index and its property
    };
    setObj(updateData);
  };
  const handleUpdatePerson = (e) => {
    setPerson({
      ...person,
      name: "Carl Argente",
      age: 18,
    });
  };
  return (
    <div className="d-flex-justify-content align-item-center text-center">
      <h2 className="mt-3">
        Create an array of object and update its second index
      </h2>
      {displayData}
      <button className="btn-primary" onClick={handleUpdate}>
        Update Value
      </button>

      <h2 className="mt-3">Create state (object) that have all datatypes property, update it's 2 property values</h2>
      <button className="btn-primary" onClick={handleUpdatePerson}>
        Update Value
      </button>
      {displayPerson}
    </div>
  );
};

export default App;
