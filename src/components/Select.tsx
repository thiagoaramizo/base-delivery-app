import styled from "styled-components"

export function Select() {

    return (
      <Wrapper>
        <input 
          type='number'
          min={1}
          max={9}
          step={1}
          value={1}
        />
      </Wrapper>
    )
  }

  const Wrapper = styled.div``