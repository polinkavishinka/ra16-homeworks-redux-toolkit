import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowField, resetFields, resetFilter, showFacts } from '../../reducers/factReducer';

function FactShow() {
    const { number } = useSelector(state => state.factShow);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(resetFilter());
        dispatch(showFacts(number));
        dispatch(resetFields());
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(changeShowField({name, value}));
    };

    return (
        <form className='input-wrapper' onSubmit={handleSubmit}>
            <h3>Сколько новых фактов о Star Wars ты хочешь узнать?</h3>
            <input
                name="number"
                className='input-show-fact'
                type="number"
                min="1"
                max="5"
                placeholder="Введите цифру от 1 до 5"
                onChange={handleChange}
                value={number}
            />
        </form>
    );
}

export default FactShow;

