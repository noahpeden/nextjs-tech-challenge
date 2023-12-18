'use client';
import React, { createContext, useState, useEffect } from 'react';
import fetchDozers from '../actions/fetchDozers';
import backupData from '../backup-data.json';
export const DozersContext = createContext();

export const DozersProvider = ({ children }) => {
  const [originalDozers, setOriginalDozers] = useState([]);
  const [dozers, setDozers] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    engineHP: [0, 500],
    operatingWeight: [0, 150000],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let response = await fetchDozers();

      if (response?.error) {
        console.error(response?.error);
        response = backupData;
      }
      response = response?.models ?? backupData;
      setOriginalDozers(response);
      setDozers(response);

      let minHP = Number.MAX_VALUE,
        maxHP = 0,
        minWeight = Number.MAX_VALUE,
        maxWeight = 0;
      response.forEach((dozer) => {
        const enginePower = parseInt(
          dozer.specs
            .find((spec) => spec.spec_name === 'Power - Net')
            ?.spec_value?.[1]?.split(' ')[0] || '0'
        );
        const operatingWeight = parseInt(
          dozer.specs
            .find((spec) => spec.spec_name === 'Operating Weight')
            ?.spec_value?.[1]?.split(' ')[0] || '0'
        );
        minHP = Math.min(minHP, enginePower);
        maxHP = Math.max(maxHP, enginePower);
        minWeight = Math.min(minWeight, operatingWeight);
        maxWeight = Math.max(maxWeight, operatingWeight);
      });

      setFilters((filters) => ({
        ...filters,
        engineHP: [minHP, maxHP],
        operatingWeight: [minWeight, maxWeight],
      }));
      setLoading(false);
    }

    fetchData();
  }, []);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);

    const filteredDozers = originalDozers.filter((dozer) => {
      const matchesCategory =
        newFilters.categories.length === 0 ||
        newFilters.categories.includes(dozer.family);

      const enginePower = parseInt(
        dozer.specs
          .find((spec) => spec.spec_name === 'Power - Net')
          ?.spec_value?.[1]?.split(' ')[0] || '0'
      );

      const operatingWeight = parseInt(
        dozer.specs
          .find((spec) => spec.spec_name === 'Operating Weight')
          ?.spec_value?.[1]?.split(' ')[0] || '0'
      );

      const matchesPower =
        enginePower >= newFilters.engineHP[0] &&
        enginePower <= newFilters.engineHP[1];
      const matchesWeight =
        operatingWeight >= newFilters.operatingWeight[0] &&
        operatingWeight <= newFilters.operatingWeight[1];

      return matchesCategory && matchesPower && matchesWeight;
    });

    setDozers(filteredDozers);
  };

  return (
    <DozersContext.Provider
      value={{ dozers, setDozers, filters, updateFilters, loading }}
    >
      {children}
    </DozersContext.Provider>
  );
};
