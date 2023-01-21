import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'react-bootstrap';

import { mapExpressionToEmoji } from '../helpers/emojis';


const Results = ({ results, processing }) => {
  if (processing && results) {
    return <Spinner />;
  }
  if (!processing && results && results.length > 0) {
    return (
      <div className="results">
        {results.length > 1 ? (
          <div>
            {results.map((result, i) => (
              <div style={{ width: '300px' }} className="results__wrapper" key={i}>
                {result.expressions.asSortedArray()[0].expression}
                <FontAwesomeIcon icon={mapExpressionToEmoji(result.expressions.asSortedArray()[0].expression)} size="2x" />
              </div>
            ))}
          </div>
        ) : (
          <div className="results__wrapper">
            {results[0].expressions.asSortedArray()[0].expression}
            <FontAwesomeIcon icon={mapExpressionToEmoji(results[0].expressions.asSortedArray()[0].expression)} size="2x" />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="results">
        <Spinner />
      </div>
    );
  }
};

export default Results;
