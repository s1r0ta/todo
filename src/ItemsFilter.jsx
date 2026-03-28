const ItemsFilter = ({filter, onFilterChange}) => {
    return(
        <div className="btn-group" role="group" id="filter">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onClick={() => onFilterChange('all')}/>
            <label className="btn btn-outline-info" htmlFor="btnradio1">Всё</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onClick={() => onFilterChange('active')}/>
            <label className="btn btn-outline-info" htmlFor="btnradio2">Активно</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" onClick={() => onFilterChange('done')}/>
            <label className="btn btn-outline-info" htmlFor="btnradio3">Сделано</label>
        </div>
    )
}

export default ItemsFilter;