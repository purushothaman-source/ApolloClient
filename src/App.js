import React from 'react';

import {useQuery,gql } from '@apollo/client';

    const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

    function App(){
      const {loading,error,data} = useQuery(EXCHANGE_RATES);
     if(loading) return <p>Loading ...</p>
     if(error) return <p>whoops ..</p>
     return <><h2>My first Apollo app 🚀</h2>

      { data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))
         }
         </>
     

    }

    export default App;