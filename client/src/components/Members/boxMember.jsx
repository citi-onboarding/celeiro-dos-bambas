import React from 'react';

// import './Datas.css';

export default class BoxMember extends React.Component{
  render(){
    return(
      <div className="boxMember">
        <h2>{this.props.nome}</h2>
        <p>{this.props.cargo}</p>
        <img src={this.props.avatar} alt="" />
      </div>
    )
  }
}
