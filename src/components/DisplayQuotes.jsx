import  React  from  'react';

const DisplayQuotes = ({ quote }) => {
      return (
            <div>
                <img src={quote.image}  alt="picture"  />
                <p>{quote.character}</p>
                <p>{quote.quote}</p>
            </div>
      );
};

export  default  DisplayQuotes;