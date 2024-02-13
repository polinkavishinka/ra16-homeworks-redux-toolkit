
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    number: '',
    name: '',
    value: '',
    facts: [
        {
            id: nanoid(), 
            title: 'Fact #1', 
            content: 'прообразом Чубакки стал пёс режиссёра', 
            image: 'https://placeimg.com/200/300/nature'
        }, {
            id: nanoid(), 
            title: 'Fact #2', 
            content: 'актёрам разрешили подобрать любимый цвет для своих световых мечей',
            image: 'https://placeimg.com/200/300/nature'
        }, {
            id: nanoid(), 
            title: 'Fact #3', 
            content: 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину', 
            image: 'https://placeimg.com/200/300/nature'
        }, {
            id: nanoid(), 
            title: 'Fact #4', 
            content: 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу', 
            image: 'https://placeimg.com/200/300/nature'
        }, {
            id: nanoid(), 
            title: 'Fact #5', 
            content: 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок', 
            image: 'https://placeimg.com/200/300/nature'
        },
    ],
};

const factShowSlice = createSlice({
    name: 'factShow',
    initialState,
    reducers: {
        showFacts: (state, action) => {
            state.number = action.payload;
            state.facts = state.facts.slice(0, state.number);
        },
        changeShowField: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        resetFields: (state) => {
            state.number = '';
        },
        resetFilter: () => initialState
    }
});

export const {
    showFacts,
    changeShowField,
    resetFields,
    resetFilter
} = factShowSlice.actions;

export default factShowSlice.reducer;