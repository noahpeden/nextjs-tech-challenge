'use client';
import React, { createContext, useState, useEffect } from 'react';
import fetchDozers from '../actions/fetchDozers';

export const DozersContext = createContext();

export const DozersProvider = ({ children }) => {
  const [originalDozers, setOriginalDozers] = useState([]);
  const [dozers, setDozers] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    engineHP: 50,
    operatingWeight: 50,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetchDozers();
      setOriginalDozers(response.models);
      setDozers(response.models); // Initially set all dozers
    }
    fetchData();
  }, []);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);

    const filteredDozers = originalDozers.filter((dozer) => {
      const matchesCategory =
        newFilters.categories.length === 0 ||
        newFilters.categories.includes(dozer.family);
      console.log(dozer.family, matchesCategory);
      const enginePower =
        dozer.specs.find((spec) => spec.spec_name === 'Power - Net')
          ?.spec_value?.[1] || '0 kW';
      const operatingWeight =
        dozer.specs.find((spec) => spec.spec_name === 'Operating Weight')
          ?.spec_value?.[1] || '0 kg';

      const powerInKw = parseInt(enginePower.split(' ')[0]);
      const weightInKg = parseInt(operatingWeight.split(' ')[0]);

      const matchesPower = powerInKw <= newFilters.engineHP;
      const matchesWeight = weightInKg <= newFilters.operatingWeight;

      return matchesCategory;
    });
    console.log({ filteredDozers });

    setDozers(filteredDozers);
  };

  return (
    <DozersContext.Provider
      value={{ dozers, setDozers, filters, updateFilters }}
    >
      {children}
    </DozersContext.Provider>
  );
};
