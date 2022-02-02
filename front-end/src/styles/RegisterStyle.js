import styled from 'styled-components';

export const ContainerCentralizado = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 1px solid white;
  color: white;
  width: 25%;
  height: 410px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  `;

export const BannerLogo = styled.div`
  height: 30px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  height: 25px;
  width: 90%;
  font-size: 15px;
  padding: 3px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: blue;
  
`;

export const Button = styled.button`
  width: 70%;
  height: 40px;
  border: 0;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  background: #4CAF50;
  color: white;
  font-weight: bold;
`;
