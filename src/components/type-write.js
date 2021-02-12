import React, { useState, useEffect } from "react";
import styled from "styled-components";

const words = [
  "Hi, I'm Andrew. ",
  "I'm a developer. ",
  "Welcome to my little slice of the web. ",
  "Have fun and take a look around. ",
];

const Styledh1 = styled("h1")`
  font-family: "Righteous";
  color: teal;
`;

export default function Typer() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 100);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) return;
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <>
      <Styledh1>{`${words[index].substring(0, subIndex)}`}</Styledh1>
    </>
  );
}
