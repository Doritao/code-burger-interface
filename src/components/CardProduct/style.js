import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 30px 60px 0px #3939391a;
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #000000;
`

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000;

  margin-top: 34px;
`
