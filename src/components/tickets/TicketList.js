import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import "./Tickets.css";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [nonEmergencyOnly, setNonEmergencyOnly] = useState(false);
  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setTickets(ticketsArray);
      console.log("set tickets!");
    });
  }, []);

  useEffect(() => {
    if (nonEmergencyOnly) {
      const nonEmergencyTickets = tickets.filter(
        (ticket) => ticket.emergency === false
      );
      setFilteredTickets(nonEmergencyTickets);
    } else if (emergencyOnly) {
      const emergencyTickets = tickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(tickets);
    }
  }, [emergencyOnly, nonEmergencyOnly, tickets]);
  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
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
      </div>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
