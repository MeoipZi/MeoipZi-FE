import React, {ChangeEvent} from "react";
import styled from "styled-components";

interface TextInputProps {
    height?: number;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextarea = styled.textarea<{ height?: number }>`
    width: calc(100% - 32px);
    ${(props) => props.height &&
    `
    height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 2px solid #ccc;

`;

function TextInput(props: TextInputProps){
    const {height, value, onChange } = props;

    return <StyledTextarea 
        height ={height}
        value = {value} 
        onChange={onChange} />
}

export default TextInput;