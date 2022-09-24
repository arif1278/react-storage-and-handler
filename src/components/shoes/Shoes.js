import React from 'react';
import { add, divide, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    const div = divide(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result} and total: {sum} and divide: {div}</p>
        </div>
    );
};

export default Shoes;