import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
// import { TicketList } from './page/ticket-list/TicketList.page';
// import { Entry } from './page/entry/entry.page';
// import { Dashboard } from './page/dashboard/Dashboard.page'
// import { AddTicket } from './page/new-ticket/AddTicket.page';
import { Ticket  } from "./page/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket/> */}
        {/* <TicketList/> */}
        <Ticket/>
        
      </DefaultLayout>

    </div>
  );
}

export default App;
