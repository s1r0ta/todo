import { useState, useEffect } from "react";
import AppHeader from "./AppHeader.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilter.jsx";
import AddItem from './AddItem.jsx';

const App = () => {

    const [todoData, setTodoData] = useState(() => {
        const saved = localStorage.getItem('todoData');
        return saved ? JSON.parse(saved) : [
            {id: 1, label: 'Проснуться'}, 
            {id: 2, label: 'Умыться', important: true},
            {id: 3, label: 'Покушать'}
        ];
    });

    //Сохранение в браузере
    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }, [todoData]);

    const deleteItem = (id) => {
        setTodoData((todoData) => {
            const index = todoData.findIndex(el => el.id === id);
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);

            return [...before, ...after];
        });
    }

    const addItem = (text) => {
        if (!text.trim()) return;

        setTodoData((todoData) => {
            const maxId = todoData.length > 0 ? Math.max(...todoData.map((item) => item.id)) : 0;

            const newItem = {
                label: text,
                important: false,
                done: false,
                id: maxId + 1
            }

            return [...todoData, newItem];
        });
    };

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');    
    const onSearchChange = (term) => {
        setTerm(term);
    }

    const onFilterChange = (filter) => {
        setFilter(filter);
    }

    const searchItem = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    const filterItem = (items, filter) => {
        switch(filter) {
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    const visibleItems = filterItem(
        searchItem(todoData, term),
        filter
    );

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    const toggleDone = (id) => {
        setTodoData((todoData) => {
            const index = todoData.findIndex((item) => item.id === id);
            const oldItem = todoData[index];

            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };

            return [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ];
        });
    };

    const toggleImportant = (id) => {
        setTodoData((todoData) => {
            const index = todoData.findIndex((item) => item.id === id);
            const oldItem = todoData[index];

            const newItem = {
                ...oldItem,
                important: !oldItem.important
            };

            return [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ];
        });
    };

    return(
        <div className="container">
            <AppHeader done={doneCount} active={todoCount} />

            <SearchPanel onSearchChange={onSearchChange} />
            
            <ItemsFilter filter={filter} onFilterChange={onFilterChange} />

            <TodoList
             todos = {visibleItems}
             onDeleted = {deleteItem}
             onToggleDone = {toggleDone}
             onToggleImportant = {toggleImportant}
             />
            <AddItem onAddItem = {addItem}/>
        </div>
    )
}



export default App;