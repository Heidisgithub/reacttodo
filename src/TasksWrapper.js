import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";
// import EditTask from "./EditTask";

class TasksWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskInEdit: null,
            tasks: []

        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleTaskToggle = this.handleTaskToggle.bind(this);
        this.handleTaskInEdit = this.handleTaskInEdit.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this)
    }

    componentDidMount() {
        const storedData = localStorage.getItem("toDoTasks")
        if (storedData) {
            this.setState({tasks: JSON.parse(storedData)})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('toDoTasks', JSON.stringify(this.state.tasks))
    }

    handleCreateTask(newTask) {
        let toDoX = {
            title: newTask,
            done: false,
            id: this.state.tasks.length
        }
        const tasksUpdate = [...this.state.tasks, toDoX];
        this.setState({ tasks: tasksUpdate });
        console.log(this.state.tasks)
    }

    handleTaskInEdit(id) {
        this.setState({ taskInEdit: id });
    }

    handleEditTask(taskData) {
        const newTasks = this.state.tasks.map((task) => {
          if (task.id !== taskData.id) {
            return task;
          }
          return {
            ...task,
            title: taskData.title,
          };
        });
        this.setState({ tasks: newTasks, taskInEdit: null });
    }

    handleTaskToggle(id) {
        const newTodos = this.state.tasks.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }

            const newTodosObj = { ...todo, done: !todo.done };
            return newTodosObj;
        });
        this.setState({ tasks: newTodos });
    }

    handleDeleteTask(targetTask){

    }

    render() {
        return (
            < main className="tasksFlex" >
                <div className="tasksWrapper" >
                    <OpenTasks
                        tasks={this.state.tasks}
                        taskInEdit={this.state.taskInEdit}
                        createTask={this.handleCreateTask}
                        handleTaskToggle={this.handleTaskToggle}
                        handleTaskInEdit={this.handleTaskInEdit}
                        handleEditTask={this.handleEditTask}
                    />
                    <CloseTasks
                        tasks={this.state.tasks}
                        handleTaskToggle={this.handleTaskToggle}
                    />
                </div>
                <Stats tasks={this.state.tasks} />
            </main>
        );
    }
}

export default TasksWrapper;