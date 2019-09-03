import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default class HomePage extends React.Component {
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    return (
      <div className="container">
        <Title>Demo app for Scoutbase<br/>
          <Link to="/countries">Countries list</Link>
        </Title>
      </div>
    )
  }
}
