const React = require('react');
const TodosListHeader = require('./TodosListHeader');
const TodosListItem = require('./TodosListItem');

class CreateTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    renderError = () => {
        if (!this.state.error) {
            return null;
        }

        return <div style={{color: 'white'}}>{this.state.error}</div>
    }

    handleCreate = (event) => {
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);
        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }
        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput = (task) => {
        if (!task) {
            return 'please enter a task!';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'task already exists';
        } else {
            return null;
        }
    }


    render(){
        return (
            <form onSubmit={this.handleCreate}>
                <input type='text' placeholder='Enter what you need to do.' ref='createInput' />
                <button className='addBtn'>Create</button>
                {this.renderError()}
            </form>
        )
    }
}

module.exports = CreateTodo;

