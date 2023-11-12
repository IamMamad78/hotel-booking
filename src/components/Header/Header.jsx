import { MdLocationOn } from "react-icons/md";
import {
  HiCalendar,
  HiSearch,
  HiUserGroup,
  HiMinus,
  HiPlus,
} from "react-icons/hi";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
    console.log(operation);
  };

  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            className="headerSearchInput"
            placeholder="Where to go ?"
            name="destination"
            id="destination"
          />
        </div>
        <div
          className="headerSearchItem"
          id="dateDropDown"
          style={{ border: "none" }}
        >
          <button className="btn headerSearchBtn">
            <HiCalendar className="headerIcon dateDropDown" />
          </button>
        </div>
        <div className="headerSearchItem" style={{ border: "none" }}>
          <button className="btn headerSearchBtn">
            <HiUserGroup
              className="headerIcon"
              id="optionDropDown"
              onClick={() => setOpenOptions(!openOptions)}
            />
          </button>
          {openOptions && (
            <GuestOptionList
              options={options}
              handleOptions={handleOptions}
              setOpenOptions={setOpenOptions}
            />
          )}
        </div>
        <div className="headerSearchItem">
          <div className="headerBtn">
            <button className="headerSearchBtn">
              <HiSearch className="headerIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptionList({ options, handleOptions, setOpenOptions }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () => setOpenOptions(false));
  return (
    <div className="guestOptions" ref={optionsRef}>
      <span className="guestOptionsTitle">
        {options.adult} Adult &bull; {options.children} Children &bull;
        {options.room} Room
      </span>
      <OpenItem
        options={options}
        type="adult"
        minLimit={1}
        handleOptions={handleOptions}
      />
      <OpenItem
        options={options}
        type="children"
        minLimit={0}
        handleOptions={handleOptions}
      />
      <OpenItem
        options={options}
        type="room"
        minLimit={1}
        handleOptions={handleOptions}
      />
    </div>
  );
}

function OpenItem({ options, type, minLimit, handleOptions }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
          onClick={() => handleOptions(type, "dec")}
        >
          <HiMinus />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOptions(type, "inc")}
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
}
