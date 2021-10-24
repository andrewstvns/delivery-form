import styled from 'styled-components';

const Button = styled.button`
    width: 280px;
    height: 60px;
    background-color: #FF8A00;
    cursor: pointer;
    opacity: 1;
    transition: all .25s ease;
    border-radius: 8px;
    &:hover {
        opacity: 0.7;
    }
    color: #FFFFFF;
    font-size: 16px;
`;

export default Button;