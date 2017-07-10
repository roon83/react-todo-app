const React = require('react');

class TodosListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    renderTaskSection =() => {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick}>
                        <input type='text' defaultValue={task} ref='editInput' />
                    </form>
                </td>
            )
        }
        return (
            <td
                style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        )
    }

    renderActionsSection =() => {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEditClick}>{"\u270E"}</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>{ "\u00D7" }</button>
            </td>
        )
    }

    onCancelClick = () => {
        this.setState({ isEditing: false })
    }

    onEditClick = () => {
        this.setState({ isEditing: true })
    }

    onSaveClick = (event) => {
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    render(){
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        )
    }
}

module.exports = TodosListItem;

