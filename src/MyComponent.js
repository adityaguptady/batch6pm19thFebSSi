import { useState } from "react"

const MyComponent = (props) =>
{
    const [counter, setCounter] = useState(1)
    const [myString, setMyString] = useState("Default")
    const [object, setObject] = useState({
        key1: "This is property's value",
        key2: 2,
        key3: true,
        key4: [{}],
        key5: {}
    })
    let count = 0
    console.log("props: ", props)
    console.log("Color: ", props.color)

    const incrementCounter = () =>
    {
        setCounter(counter+1)
    }

    const increment = () =>
    {
        count = count+1
        console.log("count: ", count)
    }

    return  <div>
                <h1>Functional Component</h1>
                Hello React!!<br/>
                Color: <label style={{backgroundColor: props.color}}>
                            {props.color}
                        </label>
                <br/>
                ------------------------------
                <br/>
                <div>
                    Count: {count}
                    <br/>
                    <button onClick={increment}>Increment</button>
                    <br/>
                    Counter: {counter}
                    <br/>
                    <button onClick={incrementCounter}>Update Counter</button>
                </div>
            </div>
}
export default MyComponent