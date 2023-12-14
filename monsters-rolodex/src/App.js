import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "", //So that we have access to it anywhere in our component
    };
  }

  componentDidMount() { // Now class Component is going to only build it once when it initializes the class for the first time because it's a method.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => { 
    const searchField = event.target.value.toLocaleLowerCase(); //Jo hum search type krein gey

    this.setState(() => {
      return { searchField };
    });
  }
  /*So components at Mount is a method that you have access to and inside you want to write your code and
whatever you write here will get run whenever the component mounts.
Mounting is the first time a component gets placed onto the DOM, so the first time react renders a
component onto the page that is mounting.*/

  render() {
    //Yeh Dikhana hai
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); //IMP NOTE: jo SearchFeild mein likha gaya hai voh agar INCLUDED hai toh return True and Save it to FilteredMonsters.
      /* So now filtered monsters should be. Using the state search field because we're updating it in the same way.*/
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={onSearchChange} // now it NOT going to re-initialize the anonymous function again & again eveytime render gets called.
        />

        {filteredMonsters.map((monster) => {
          //using .map() we want this method to return us an array of bunch of HTML h1s element with the shape that we expect the HTML to render.
          //monster in callback is a parameter that represents the current element of the array during each iteration of the map
          return (
            <div key={monster.id}>
              {" "}
              <h1> {monster.name}</h1>{" "}
            </div>
          );

          /* 1- For each monster in the monsters array, the arrow function is called.
        2- Inside the arrow function, an <h1> element is created with the name of the current monster.
        3- The map function returns an array of these <h1> elements.*/
        })}
      </div>
    );
  }
}

export default App;

/*<header className="App-header"> //SECTION-3 & L-32

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => { 
              // Ideal & optimal way to write setState code in Class 
              this.setState(
                () => { //this is an updater function
                  return { 
                    // The first function that you pass to the setState here is going to be some function 
                    // where you return an object that it will then use to shallow merge against state.
                    name: { firstName: "Syed", lastName: "Noor" }
                  }
                 },
                () => {});
            }}
          >
            change name
          </button>
        </header>
        */
