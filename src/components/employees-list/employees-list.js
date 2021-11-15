
import './employees-list.css';
import EmployeesListItem from '../emloyees-list-item/employees-list-item';
const EmployeesList = ({data, onDelete, onToggleStatus})=>{

    const elements = data.map(item =>{
        
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                    key = {id} 
                    {...itemProps}
                    onDelete={()=>onDelete(id)}
                    onToggleStatus={(e)=>onToggleStatus(id, e.currentTarget.getAttribute('data-toggle'))}
                    />
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;