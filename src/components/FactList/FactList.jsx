import React from 'react';
import { useSelector } from 'react-redux';
import Fact from '../Fact/Fact';


export default function FactList() {
    const { facts } = useSelector(state => state.factShow);
    return (
        <ul className="list-group">
            {facts.map(fact => <Fact key={fact.id}>{fact}</Fact>)}
        </ul>
    )
}