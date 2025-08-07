import { useRef } from "react";
import { useEventContext } from "../Context/UseContext";
import InputBar from "../Components/InputBar";

function VisitorPage() {
  const message = useRef();
  const { Eventname, Orgname, name, setname, arraylist, setarraylist } =
    useEventContext();

  const handleOnClick = () => {
    setname(message.current.value);
    const list = [...arraylist, message.current.value];
    setarraylist(list);
  };

  return (
    <div className="container mt-5 border border-dark">
      <h2 className="mb-4">Visitor Check-In</h2>
      <div className="mb-3">
        <InputBar
          label="Enter Your Name:"
          inputRef={message}
          placeholder="Your name"
        ></InputBar>
        {/* <label className="form-label">Enter Your Name:</label>
        <input
          type="text"
          ref={message}
          className="form-control"
          placeholder="Your Name"
        /> */}
      </div>
      <button onClick={handleOnClick} className="btn btn-success mb-3">
        Check In
      </button>

      <div className="mb-3">
        <h4>Welcome, {name}</h4>
      </div>

      <ul className="list-group mb-3">
        {arraylist.map((ele, index) => (
          <li key={index} className="list-group-item">
            {ele}
          </li>
        ))}
      </ul>

      <p>
        <strong>Event:</strong> <span>{Eventname}</span>
      </p>
      <p>
        <strong>Organizer:</strong> <span>{Orgname}</span>
      </p>
    </div>
  );
}

export default VisitorPage;
