import React from "react";

class CloseTasks extends React.Component {
  render() {
    const closeTasks = this.props.tasks.filter(tasks => tasks.done === true);
    return (
      <div className="doneContainer">
        <div className="containerTitle">
          <h3>Closed</h3>
        </div>
        <div className="tasks doneTasks" id="doneTasks">
          <ul>
            {closeTasks.map((task, index) => {
                return (
                  <li className="taskItem done" key={"task"+index}>
                    <label className="container taskCheck">
                      <input type="checkbox" checked />
                      {task.title}
                      <span className="checkmark"></span>
                    </label>
                    <div className="buttons">
                      <div type="button" value="Delete" className="icon delete"></div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default CloseTasks;
