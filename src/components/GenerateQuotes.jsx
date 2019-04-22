import React from 'react';

const GenerateQuotes = ({ selectedQuote }) => {
    return (
        <div>
            <button onClick={selectedQuote}>Get Simpson Quote</button>
        </div>
    );
};

export default GenerateQuotes;