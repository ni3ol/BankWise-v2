import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Banks = () => {
  const [banks, createBanks] = useState([]);

  useEffect(() => {
    const url = "/api/v1/banks/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error occurred when fetching banks.");
      })
      .then((response) => createBanks(response))
      .catch(() => console.log('Something'));
  }, []);

  const allBanks = banks.map((bank, index) => (
    <div key={index}>
      {/* <img src={bank.image} alt={`${bank.name} image`} /> */}

      <h5>{bank.name}</h5>
      <Link to={`/bank/${bank.id}`}>View Bank</Link>
    </div>
  ));

  const noBank = (
    <h4>
      No banks yet. Why not <Link to="/new_bank">create one</Link>
    </h4>
  );

  return (
    <>
      <main>
        <Link to="/banks">Create New Bank</Link>
        {console.log(banks)}
        {banks.length > 0 ? allBanks : noBank}
        <Link to="/">Home</Link>
      </main>
    </>
  );
};
