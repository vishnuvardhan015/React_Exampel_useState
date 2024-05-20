import React from "react";
import { useState } from "react";

const Index1 = () => {
  const [Data, setData] = useState(true);
  const item = () => {
    setData(!Data);
  };

  return (
    <section className="Main">
      <button onClick={item} className="button1">
        {Data ? "hide" : "show"}
      </button>
      <div>
        {Data ? (
          <img
            className="Image1"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2023/03/jingming-pan-iYsrkq5qq0Q-unsplash-scaled.jpg "
            alt="Andhra Pradesh Gold Price"
          />
        ) : (
          <h3>"I Love You Mummy"</h3>
        )}
      </div>
    </section>
  );
};

export default Index1;
