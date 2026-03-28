import { useState } from 'react';

const AddItem =  ({onAddItem}) => {

    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAddItem(value);
        setValue('');
    };

    return(
        <div className='item-add-form'>
            <div className="row justify-content-start">
                <div className="col-8">
                    <input 
                    className="form-control" 
                    placeholder="Сюда писать дела"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                </div>
                <div className="col-4">
                    <button className='btn btn-outline-info' onClick={handleAdd}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;