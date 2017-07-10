const React = require('react');
const TodosListHeader = require('./TodosListHeader');
const TodosListItem = require('./TodosListItem');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import _ from 'lodash';

class TodosList extends React.Component {
    renderItems = () => {
        const props = _.omit(this.props, 'todos');
        return (
            _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />)
        )
    }
    render(){
        return (
            <table className='table'>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}

module.exports = TodosList;

