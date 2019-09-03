import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const GET_COUNTRIES_CODE = gql`
  query country($code: String!) {
    country(code: $code) {
      name
      native
      phone
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default class CountriesCodePage extends React.Component {
  render() {
    const code = this.props.match.params.code;

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    const Info = styled.div`
      font-size: 1em;
      text-align: center;
      color: palevioletblue;
    `;

    return (
      <div>
        <Link to={"/countries"}>Back to country list</Link>

        <div style={{marginBottom: '10px'}}>
          <Query query={GET_COUNTRIES_CODE} variables={{code}} >
            {({ data: { country }, loading }) => {
              if (loading || !country) {
                return <div>Loading ...</div>;
              }
              return (
                <div>
                  <Title>{country.name}</Title>
                  <Info>
                    Currency: {country.currency}<br/>
                    Area code: {country.phone}
                  </Info>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}
