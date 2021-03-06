import styled from "styled-components";
import { Box } from "rebass";

const AspectRatioBox = styled(Box)`
  padding-bottom: ${(props) => (1 / props.ratio) * 100}%;
  background: #e3e4e5;
  height: 0;
  /* border: 1px solid grey; */
  box-shadow: 2px 8px 8px 6px #A8CCCF;
  border: 1px solid gold;
`;

export default AspectRatioBox;
