import AppHeader from "./AppHeader.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilter.jsx";

const App = () => {
    const todoData = [
        {id: 1, label: 'Проснуться'},
        {id: 2, label: 'Умыться', important: true},
        {id: 3, label: 'Покушать'}
    ];
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
            <TodoList todos = {todoData}/>
        </div>
    )
}

export default App;