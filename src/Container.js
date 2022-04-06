import {useState} from "react";

function Container(props) {
    const [val, changeVal] = useState('');

    console.log(props.displayValue);

    function inputChange(e) {
        changeVal(e.target.value)
    }

    return (
        <div>
            <h2>{props.displayValue}</h2>
            <h2>{props.someObj.age}</h2>
            <h2>{props.someObj.name}</h2>
            <input type="text" value={val} onChange={(e) => changeVal(e.target.value)}/>
        </div>
    );
}

export default Container;