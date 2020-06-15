import styled from "styled-components";


// TODO pare che non prenda i Props nel modo giusto
const coloredPrice = (props) =>
  props.current_price > props.buy_value ? "color: #FF6A6A;" : "color: #A7FF7D;";


const specialWidth = ({specialWidth}) => {
    console.log(specialWidth);
    
  if (specialWidth === "large") {
    return "20%";
  } else if (specialWidth === "small") {
    return "6%";
  }

  return "13%";
};
export const StockItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #1ae4ff79;
`;

export const StockItemStyle = styled.div`
  width: ${specialWidth};
  padding: 0 5px;

  &::first-child {
    width: 5%;
  }
`;

export const StockNumberStyle = styled.div`
  width: 13%;
  text-align: right;

  &:last-child{
    font-size: 24px;
    font-weight: 500;
    color: #000;
  }
`;

export const StockPriceStyle = styled.div`
  width: 13%;
  text-align: right;
  font-weight: 500;
  ${coloredPrice}
`;

export const DeleteButton = styled.div`
  width: 9%;
  text-align: center;
  cursor: pointer;

  &:hover{
    color: #FF6A6A;
    text-shadow: 0px 0px 5px #FF6A6A;
  }
`;
