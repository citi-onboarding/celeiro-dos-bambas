import React from 'react';

import styles from "./Card.module.css";

export default class Card extends React.Component{
  render(){
    return(
      <div className={styles.card}>
        <img className={styles.cardAvatar} src={this.props.avatar} alt="" />
      </div>
    )
  }
}
