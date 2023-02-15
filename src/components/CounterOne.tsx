import { useState } from 'react';
import '../index.css';
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col gap-4 bg-green-200 w-52 p-6 rounded-xl' >
            <p>
                Add by one each click <strong>APP-1</strong>
            </p>
            <p>Your click count : {count} </p>
            <button className='bg-red-300 rounded-md p-2' onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default Counter;