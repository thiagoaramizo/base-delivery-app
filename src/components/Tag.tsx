import { ReactNode } from "react";
import styled from "styled-components";

interface TagProps {
    children: ReactNode
}

export function Tag({children}: TagProps) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.span`
    display: block;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.color.brandPrimaryLight};
    color: ${(props) => props.theme.color.brandPrimary};
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 0.5rem;
`