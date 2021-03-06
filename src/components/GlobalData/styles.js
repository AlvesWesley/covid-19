import styled from 'styled-components'

export const Card = styled.div`
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  ul li {
    display: inline-block;
  }
`

export const ChartContainer = styled.div`
  margin: 5px 0;
`

export const Bar = styled.div`
  display: inline-block;
  height: 8px;
  background: ${props => props.color};
  width: ${props => props.value}%;
`
