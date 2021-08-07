import React from "react";


class Header extends React.Component {
  render() {
    return (
      <header>
      <h1>Our To-Do-List</h1>

      <div className="darkmode">
          <label for="darkMode">Dark Mode</label>
          <input type="checkbox" id="darkMode" name="darkMode" value="on" onClick="toggleDarkMode()"/>
      </div>
  </header>
    );
  }
}

export default Header;
