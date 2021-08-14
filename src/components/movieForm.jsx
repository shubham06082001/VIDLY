import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>MovieForm</h1>
      <p>id: {match.params.id}</p>
      <button
        className='btn btn-lg btn-warning'
        onClick={() => history.push('/movies')}
      >
        SAVE
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
