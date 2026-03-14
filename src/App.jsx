import { useState } from "react";
import AppHeader from "./AppHeader.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilter.jsx";
import AddItem from "./AddItem.jsx";

const App = () => {

    const [todoData, setTodoData] = useState([
        {id: 1, label: 'Проснуться'},
        {id: 2, label: 'Умыться', important: true},
        {id: 3, label: 'Покушать'}
    ]);

    const deleteItem = (id) => {
    setTodoData((todoData) => {
        const index = todoData.findIndex((el) => el.id === id);
        const before = todoData.slice(0, index);
        const after = todoData.slice(index + 1);

        return[...before, ...after];
    });
}

    let maxID = 100;
    const addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: maxID++
        }
        setTodoData((todoData) =>{
            const newMassive = [
                ...todoData,
                newItem
            ]
            return newMassive;
        });
}

    return(
        <div className="container">
            <AppHeader done={5} active={7}/>
            <div className="row">
                <div className="col-6">
                    <SearchPanel/>
                </div>
                <div className="col-6">
                    <ItemsFilter/>
                </div>
            </div>
            <TodoList todos = {todoData} onDeleted={deleteItem}/>
            <AddItem onAddItem = {addItem}/>
        </div>
    )
}

export default App;