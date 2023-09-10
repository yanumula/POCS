import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Slider = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const text = [
    {
      text: "hi keerthi sai",
    },
    {
      text: "hi sowjanya",
    },
    { text: "hi my dear family" },
  ];
  const length = text.length;
  const slideIncrement = () => {
    console.log("---i am inside slide");
    if (slidePosition < length - 1) {
      setSlidePosition((slidePosition) => slidePosition + 1);
    }
  };
  const slideDecrement = () => {
    console.log("--,,,", slidePosition, length);
    if (slidePosition !== 0)
      setSlidePosition((slidePosition) => slidePosition - 1);
  };
  return (
    <>
      I am slider component + ' ' + {slidePosition}
      <div>
        <p>I am going to have 3 buttons.</p>
        <Button
          className="m-5"
          size="lg"
          variant="outline-primary"
          onClick={slideIncrement}
          disabled={slidePosition >= length - 1}
        >
          Starter
        </Button>
        <Button
          size="lg"
          variant="outline-light"
          onClick={slideDecrement}
          disabled={slidePosition == 0}
        >
          Reverse
        </Button>
        <br />
        <div>{text[slidePosition].text}</div>
      </div>
    </>
  );
};

export default Slider;
