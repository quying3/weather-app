import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 600px;
  border: 5px solid blue;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 10px;
  text-align: center;
`;

const ContainP = styled.p`
  margin: auto;
`;

const ContainHeader = styled.h2`
  justify-self: flex-start;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  width: 600px;
  margin: auto;
`;

const CardSub = styled.span`
  display: flex;
  align-items: center;
`;
export { Container, ContainP, ContainHeader, Card, CardSub };
