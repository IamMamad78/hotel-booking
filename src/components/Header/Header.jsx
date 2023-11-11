import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch, HiUserGroup } from "react-icons/hi";

function Header() {
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
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
            <HiUserGroup className="headerIcon" id="optionDropDown" />
          </button>
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
