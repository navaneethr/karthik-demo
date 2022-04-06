import './App.css';
import Card from "./Card";
import Container from "./Container";
import React from "react";

function App() {

    const [data, setData] = React.useState('Karthik') //  => [storeAValue, toChangeAValue] // changeValue('Nav')

    function changeValue(newName) {
        // API Callg

        setData(newName);
    }

    const someName = "Nithin";

    const person = {
        age: 21,
        name: 'Abi'
    }

    const books = [
        {
            name: 'xyz'
        },
        {
            name: 'abc'
        }
    ]

    function renderMultipleCards() {
        const newArr = [];
        for(let i =0; i<books.length; i++) {
            newArr.push(
                <Container
                    displayValue={books[i].name}
                    someObj={person}
                />
            )
        }
        return newArr
    }

    return (
    <div className="App">
        <h1>{data}</h1>
        <button onClick={() =>  { changeValue('Nav'); console.log('xyz') }}>Change Name</button>
        <Card/>
        <Container
            displayValue={someName}
            someObj={person}
        />
        {renderMultipleCards()}
    </div>
    );
}

export default App;
