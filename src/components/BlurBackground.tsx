import styled from "styled-components"

export function BlurBackground() {
    return (
        <Wrapper>
            <div>
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    
    & > div {
        background-color: red;
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        top:0;
        left: 0;
    }
`