import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`

export const Button = styled.button`
  width: 60px;
  height: 28px;
  padding: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`

export const Button1 = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  font-size: 18px;
  border-style: none;
  outline: none;
  align-self: flex-end;
  margin-bottom: 5px;
`
