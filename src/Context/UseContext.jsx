import { createContext, useContext, useState } from "react";

const EventContext=createContext();

export const Provider=({children})=>{
    const [Eventname, setEventname] = useState("");
    const [Orgname, setOrgname] = useState("");
      const [arraylist, setarraylist] = useState([]);
      const [name, setname] = useState("");
    
    return (
      <EventContext.Provider
        value={{
          Eventname,
          setEventname,
          Orgname,
          setOrgname,
          arraylist,
          setarraylist,
          name,
          setname,
        }}
      >
        {children}
        {/* App.jsx */}
      </EventContext.Provider>
    );
}

export const useEventContext = () =>{
    return useContext(EventContext);
}