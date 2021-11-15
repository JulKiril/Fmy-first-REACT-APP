
import {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        } 
              
    }   
    
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) =>{
        const {name, salary} = this.state;
        e.preventDefault();
        
        if(name && salary){
            this.props.onAdd(name,salary);
            this.setState({
                name: "",
                salary: "",
                error: false
            })
                      
            console.log("added");
        } else{
            this.setState({
                error: true
            })
        }

    }
    
    render(){    
        let classNames = 'form-control new-post-label';   
        const {name, salary, error} = this.state;
        if(error){classNames = classNames + " red"}
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className={classNames}
                        placeholder="Как его зовут?" onChange={this.onValueChange}
                        name="name"
                        value={name}/>
                    <input type="number"
                        className={classNames}
                        placeholder="З/П в $?" onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        />                        
                    <button type="submit"
                            className="btn btn-outline-light" onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;