import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';

// const App = () =>
// {
//   const myFunction = () =>
//   {
//     console.log("This is my function!!!")
//   }

//   const classComponent = <MyComponentClass color="red" size="medium" onClick={()=>
//     {
//       console.log("This is executed in App.js");
//     }}/>

//   myFunction()

//   const buttonHandler = () =>
//   {
//     console.log("Button is clicked!!!")
//   }

//   let firstyVariable = 1
//   console.log("firstyVariable: ", firstyVariable)

//   const el1 = <h2>This is a sample JSX code snippet</h2>
//   console.log("el1: ", el1)

//   // return React.createElement(
//   //   "div", 
//   //   null, 
//   //   "Hello Aditya!!", 
//   //   React.createElement("p", null, "This is my Paragraph!!"),
//   //   React.createElement("ul", null, 
//   //     React.createElement("li", null, "This is list item 1"),
//   //     React.createElement("li", null, "This is list item 2"),
//   //     React.createElement("li", null, "This is list item 3"),
//   //     React.createElement("li", null, "This is list item 4"),
//   //   )
//   // )

//   const unmountFunction = () =>
//   {
//     classComponent = "Class component unmounted now!"
//   }

//   return <div>
//     <p>This is my Paragraph abc!!</p>
//     <ul>
//       <li>This is list item 1</li>
//       <li>This is list item 2</li>
//       <li>This is list item 3</li>
//       <li>This is list item 4</li>
//     </ul>
//     <MyComponent color="yellow" size="medium" />
//     <br/>
//     {classComponent}

//     <br/>
//     <button>Unmount Class Comp</button>
//   </div>
// }

class App extends React.Component
{
  state = {classComponent: <MyComponentClass color="red" size="medium" onClick={()=>
    {
      console.log("This is executed in App.js");
    }}/>}

  unmountFunction = () =>
  {
    this.setState({classComponent: "Class component unmounted now!"})
  }

  render()
  {
    return <div>
              <p>This is my Paragraph abc!!</p>
              <ul>
                <li>This is list item 1</li>
                <li>This is list item 2</li>
                <li>This is list item 3</li>
                <li>This is list item 4</li>
              </ul>
              <MyComponent color="yellow" size="medium" />
              <br/>
              {this.state.classComponent}

              <br/>
              <button onClick={this.unmountFunction}>Unmount Class Comp</button>
            </div>
  }
}

export default App;