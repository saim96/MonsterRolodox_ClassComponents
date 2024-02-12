import { Component } from "react";
import Card from "../card/card.compent";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props; //De-structure is because if we need to use this in more places than one, it's just easier
    return (
      //parental div

      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
/*By default, meaning that if they don't try to structure from the file in order to access other things
by default, give them whatever this is, which is our cardless class component.*/
