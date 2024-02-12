import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props; //De-structure is because if we need to use this in more places than one, it's just easier
    return ( //parental div
      <div> 
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
/*By default, meaning that if they don't try to structure from the file in order to access other things
by default, give them whatever this is, which is our cardless class component.*/
