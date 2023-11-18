import { useState, useEffect, useRef } from 'react';

const CreditCard = () => {
  const [creditCard, setCreditCard] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (field, value) => {
    setCreditCard({
      ...creditCard,
      [field]: value,
    });
  };

  useEffect(() => {
    const { input1, input2, input3, input4 } = creditCard;

    const inputs = [input1, input2, input3, input4];

    for (let index = 0; index < inputs.length; index++) {
      if (inputs[index].length === 4 && index < inputs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  }, [creditCard]);

  return (
    <>
      <h2 className="title">Zadejte číslo kreditní karty:</h2>
      <div className="credit-card">
        <input
          ref={inputRefs[0]}
          type="text"
          maxLength="4"
          value={creditCard.input1}
          onChange={(event) => handleChange('input1', event.target.value)}
        />
        <input
          ref={inputRefs[1]}
          type="text"
          maxLength="4"
          value={creditCard.input2}
          onChange={(event) => handleChange('input2', event.target.value)}
        />
        <input
          ref={inputRefs[2]}
          type="text"
          maxLength="4"
          value={creditCard.input3}
          onChange={(event) => handleChange('input3', event.target.value)}
        />
        <input
          ref={inputRefs[3]}
          type="text"
          maxLength="4"
          value={creditCard.input4}
          onChange={(event) => handleChange('input4', event.target.value)}
        />
      </div>
    </>
  );
};

export default CreditCard;
