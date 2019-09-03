import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Info = styled.div`
  font-size: 1em;
  border-bottom: 1px solid palevioletred;
  color: palevioletblue;
  padding: 10px;
`;

const CountriesList = ({ countries }) => (
  <ul style={{listStyle: 'none'}}>
    {countries.map((country) => {
      return (
        <li key={country.code} style={{margin: '10px'}}>
          <Info>
            <Link to={"/countries/"+country.code}>{country.name}</Link><br/>
            Languages: {country.languages.map((language,index) =>
              <span key={index}>{language.name} ({language.native})
                {(index<country.languages.length-1?', ':'')}
              </span>
            )}<br/>
            Continent: {country.continent.name}
          </Info>
        </li>
      );
    })}
  </ul>
);

const GET_COUNTRIES = gql`
  {
    countries { name, code, continent {name}, languages {code, name, native} }
  }
`;

export default class CountriesPage extends React.Component {
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    return (
      <div>
        <Link to={"/"}>Back to home page</Link>
        <Title>Countries</Title>
        <Query query={GET_COUNTRIES}>
          {({ data: { countries }, loading }) => {
            if (loading || !countries) {
              return <div>Loading ...</div>;
            }
            return (
              <CountriesList countries={countries}/>
            );
          }}
        </Query>
      </div>
    );
  }
}
