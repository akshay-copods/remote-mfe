import { Button } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';
import { useQuery } from "react-query";
import '../index.css';
const Counter = () => {
    const [count, setCount] = useState(0);
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
            (res) => res.json()
        )
    );

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{"An error has occurred: " + error}</div>;
    return (
        <div className='flex flex-col gap-4 bg-green-200 w-52 p-6 rounded-xl' >
            <p>
                Add by one each click <strong>APP-1</strong>
            </p>
            <p>Your click count : {count} </p>
            <Button type='primary'>Ant Button</Button>
            <button className='bg-red-300 rounded-md p-2' onClick={() => setCount(count + 1)}>Click me</button>
            <div className="p-10 border-black border-3 border text-white bg-black rounded-3xl">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{" "}
                <strong>✨ {data.stargazers_count}</strong>{" "}
                <strong>🍴 {data.forks_count}</strong>

            </div>
        </div>
    );
};

export default Counter;