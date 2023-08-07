import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../style/Main";
const Calculator = () => {
  const [prevoius, setPrevoius] = useState("");
  const [opeation, setOpeation] = useState("");
  const [current, setCurrent] = useState("");

  const appendValue = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allClearHandler = () => {
    setCurrent("");
    setOpeation("");
    setPrevoius("");
  };
  const choseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOpeation(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOpeation("");
  };

  const compute = () => {
    let result;
    let prevoiusNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(prevoiusNumber) || isNaN(currentNumber)) return;
    switch (opeation) {
      case "÷":
        result = prevoiusNumber / currentNumber;
        break;

      case "x":
        result = prevoiusNumber * currentNumber;
        break;

      case "+":
        result = prevoiusNumber + currentNumber;
        break;

      case "-":
        result = prevoiusNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius}
            {opeation}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allClearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEl</Button>
        <Button data={"÷"} operation onClick={choseOperationHandler}>
          ÷
        </Button>
        <Button data={7} onClick={appendValue}>
          7
        </Button>
        <Button data={8} onClick={appendValue}>
          8
        </Button>
        <Button data={9} onClick={appendValue}>
          9
        </Button>
        <Button data={"x"} operation onClick={choseOperationHandler}>
          x
        </Button>
        <Button data={4} onClick={appendValue}>
          4
        </Button>
        <Button data={5} onClick={appendValue}>
          5
        </Button>
        <Button data={6} onClick={appendValue}>
          6
        </Button>
        <Button data={"+"} operation onClick={choseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValue}>
          1
        </Button>
        <Button data={2} onClick={appendValue}>
          2
        </Button>
        <Button data={3} onClick={appendValue}>
          3
        </Button>
        <Button data={"-"} operation onClick={choseOperationHandler}>
          -
        </Button>
        <Button data={"."} onClick={appendValue} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValue}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;