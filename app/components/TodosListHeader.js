const React = require('react');

class TodosListHeader extends React.Component {
    render(){
        return (
           <thead>
               <tr>
                   <th>Task</th><th>Action</th>
               </tr>
           </thead>
        )
    }
}

module.exports = TodosListHeader;

