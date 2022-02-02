import styled from 'styled-components';

export const ContainerCentralizado = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  border: 2px solid black;
  color: white;
  width: 25%;
  height: 410px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    display: block;
    margin: 0 auto;
    color: black;
    font-weight: bold;
    background: #FFF;
    border: 2px solid rgba(255, 104, 89);
  }

  button:nth-of-type(1) {
    margin-top: 40px;
    background: rgba(255, 104, 89);

    &:disabled {
      background: rgba(255, 104, 89, .4);
      border: 2px solid rgba(255, 104, 89, .4);
    }
  }
  `;

export const SubContainer = styled.div`
  width: 100%;
  
  input {
    display: block;
    margin: 0 auto;
  }
  `;

export const Button = styled.button`
  width: 70%;
  height: 40px;
  border: 0;
  border-radius: 8px;
  `;

export const BannerLogo = styled.div`
  height: 30px;
  text-align: center;
  margin-top: 20px;
`;

export const Text = styled.div`
  font-size: 12px;
`;

export const Input = styled.input`
  height: 25px;
  width: 90%;
  font-size: 18px;
  padding: 3px;
  background-color: white;
  border: 0;
  border-bottom: 1px solid rgba(255, 104, 89);
  border-left: 2px solid rgba(255, 104, 89);
  color: black;
  text-align: center;
  outline: none;
  
`;
