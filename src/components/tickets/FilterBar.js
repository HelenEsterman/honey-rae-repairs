import { useState, useEffect } from "react";

export const FilterBar = ({
  setEmergencyOnly,
  setNonEmergencyOnly,
  setSearchTerm,
}) => {
  return (
    <div className="filter-bar">
      <button
        className="filter-btn btn-primary"
        onClick={() => {
          setEmergencyOnly(true);
          setNonEmergencyOnly(false);
        }}
      >
        Emergency
      </button>
      <button
        className="filter-btn btn-secondary"
        onClick={() => {
          setNonEmergencyOnly(true);
          setEmergencyOnly(false);
        }}
      >
        Non Emergencies
      </button>
      <button
        className="filter-btn btn-info"
        onClick={() => {
          setEmergencyOnly(false);
          setNonEmergencyOnly(false);
        }}
      >
        Show All
      </button>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
      ></input>
    </div>
  );
};
