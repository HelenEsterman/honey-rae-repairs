import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketServices";
import "./App.css";

export const App = () => {
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
        {filteredTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div>
                  <div className="ticket-info">Emergency</div>
                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          );
        })}
      </article>
    </div>
  );
};
