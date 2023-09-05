import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import "./Tickets.css";
import { FilterBar } from "./FilterBar";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [nonEmergencyOnly, setNonEmergencyOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    const foundTickets = tickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, tickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setEmergencyOnly={setEmergencyOnly}
        setNonEmergencyOnly={setNonEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
