const React = require('react');
const CreateTodo = require('./CreateTodo');
const TodosList = require('./TodosList');
import _ from 'lodash';
require('./../index.css');

const todos = [
{
    task: 'make react tutorial',
    isCompleted: false
},
{
    task: 'Eat Dinner',
    isCompleted: true
}
]

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos
        }
    }

    toggleTask = (task) => {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task );
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask = (task) => {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos })
    }

    saveTask = (oldTask, newTask) => {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask = (taskToDelete) => {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    render(){
        return (
            <div>
                <div className='header'>
                    <h1>Your personal Todo</h1>
                    <CreateTodo
                        todos={this.state.todos}
                        createTask={this.createTask}
                    />
   </div>
                <div>
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask}
                        saveTask={this.saveTask}
                        deleteTask={this.deleteTask}
                    />
   </div>
            </div>
        )
    }
}

module.exports = App;

