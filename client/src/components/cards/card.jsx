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
        <p>Name: {this.props.name} </p>
        <p>Continent: {this.props.continent} </p>
        <Link>
        <img src={this.props.flags} alt='flag'/>
        </Link>
        
        </div>
        
      </div>
      
    )
  }
}


export default Card;
