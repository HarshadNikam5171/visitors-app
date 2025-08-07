import { useRef } from "react";
import { useEventContext } from "../Context/UseContext";
import InputBar from "../Components/InputBar";

function EventPage() {
  const Ename = useRef();
  const Oname = useRef();
  const { Eventname, setEventname, Orgname, setOrgname } = useEventContext();

  const handleOnClick = () => {
    setEventname(Ename.current.value);
    setOrgname(Oname.current.value);
  };

  return (
    <div className="container mt-5 border border-dark">
      <h2 className="mb-4">Event Setup</h2>
      <div className="mb-3">
        <InputBar
          label="Event Name:"
          inputRef={Ename}
          placeholder="Enter event name"
        />
      </div>
      <div className="mb-3">
        <InputBar
          label="Organizer Name:"
          inputRef={Oname}
          placeholder="Enter organizer name"
        />
      </div>
      <button onClick={handleOnClick} className="btn btn-primary mb-4">
        Save Event Info
      </button>
      <p>
        <strong>Event:</strong> <span>{Eventname}</span>
      </p>
      <p>
        <strong>Organizer:</strong> <span>{Orgname}</span>
      </p>
    </div>
  );
}

export default EventPage;
