import styled from "styled-components";

const Heading = styled.h2`
    font-size: 36px;
    line-height: 43.88px;
    color: #FF8A00;
    float: ${props => props.floatLeft ? 'left;' : 'unset;'};
    text-align: ${props => props.alignRight ? 'right;' : 'unset;'};
    margin: 0;
    margin-bottom: 36px;
`;

export default Heading;