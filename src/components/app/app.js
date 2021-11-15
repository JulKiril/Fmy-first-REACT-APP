import {Component} from "react";


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
            {name:"Nick", salary: 800, increase: true, rise: true, id: 1},
            {name:"Sally", salary: 600, increase: false, rise: false, id: 2},
            {name:"John", salary: 1000, increase: false,  rise: false,id: 3}
            ]
        }
        this.maxId = 4;       
    }

    onToggleStatus = (id, status) =>{
        // this.setState(({data}) => ({
        //     data: data.map(item => {
        //         if(item.id === id){
        //             return {...item, increase: !item.increase}
        //         } else{
        //           return item  
        //         }                
        //     }) 
        // }))
        //////////////ALTERNATIVE APPROACH
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id);
            const old = data[index];
            const newItem = {...old, [status]: !old[status]};
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem = (name, salary) =>{
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++            
        }
        const newArr = [...this.state.data, newItem ]
        this.setState (({data}) =>{
            return {
                data: newArr
            }
        })
        console.log(newArr)
    }

    deleteItem = (id) =>{
        console.log(this.state.data)
        const newArr = this.state.data.filter(item => item.id !== id)
        this.setState (({data}) =>{
            return {
                data: newArr
            }
        })
        console.log(newArr)
    }

    /////////////////ALTERNATIVE APPROACH

    // deleteItem = (id) => {
    //     this.setState(({data})=>{
    //         const index = data.findIndex(item => {
    //             return item.id === id
    //         })
    //         const before = data.slice(0,index);
    //         const after = data.slice(index + 1);
    //         const newData = [...before, ...after];
    //         return {
    //             data: newData
    //         }
    //     })
    // }


    render(){
        return (
            <div className = "app">
                <AppInfo data={this.state.data}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleStatus={this.onToggleStatus}
                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
    

}

export default App;
