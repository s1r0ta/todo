const AddItem = ({onAddItem}) => {
    return(
        <div className="item-add-form">
            <div className="row">
                <div className="col-2">
                    <input className="form-control" placeholder="що делать будем" />
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-info" onClick={() => onAddItem('test')}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}


export default AddItem;