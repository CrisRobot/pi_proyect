import React from "react";
import styles from "../../css/card.module.css"
import { Link } from "react-router-dom";


class Card extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.Cardinner}>
        <p>ID: {this.props.id} </p>
        <p>Name: {this.props.name} </p>
        <p>Continent: {this.props.continent} </p>
        <p>Capital: {this.props.continent} </p>
        <p>Subregion: {this.props.continent} </p>
        <p>Area: {this.props.continent} </p>
        <p>Population: {this.props.continent} </p>
        <img src={this.props.flags} alt='flag'/>
        
        </div>
        
      </div>
      
    )
  }
}

export default Card;