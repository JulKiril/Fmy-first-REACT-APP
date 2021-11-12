import {Component} from "react";
import './employees-list-item.css';

class EmployeesListItem extends Component{
     constructor(props){
         super(props);
         this.state = {
             increase : false,
             rise: false
         }
     }

     //////////////////USED DESTRUCTURISATION
        onIncrease = ()=>{
            this.setState(({increase}) => ({
                increase: !increase                
            }))
            console.log(this.state.increase);
        }
    //////////////////WITHOUT DESTRUCTURISATION
        // onIncrease = ()=>{
        //     this.setState((state)=>({
        //          increase: !this.state.increase
        //     }))
        //     console.log(this.state.increase);
        // }

        
     onStar = ()=>{
        this.setState(({rise}) =>({
            rise: !rise
        }))
    }


     render(){
        const {name, salary, onDelete } = this.props;
        const {increase} = this.state;
        const {rise} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
    
        if(increase){
            classNames += " increase";
        }

        if(rise){
            classNames += " like";
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm" onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
     }
}

export default EmployeesListItem;