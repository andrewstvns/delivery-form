import styled from "styled-components";

const Text = styled.p`
    font-size: 14px;
    line-height: 18.8px;
    color: ${props => props.delivery ? '#1BD97B;' : '#000000;'};  
    font-weight: ${props => props.bold ? '700;' : '400;'};
    opacity: ${props => props.blur ? '0.6;' : '1;'};
    float: ${props => props.floatLeft ? 'left;' : 'unset;'};
    text-align: ${props => props.alignRight ? 'right;' : 'unset;'};
    display: ${props => props.inline ? 'inline;' : 'block;'}
`;

export default Text;