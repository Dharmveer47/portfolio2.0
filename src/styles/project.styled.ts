import styled from "styled-components";

export const ProjectWrap = styled.div`
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #2c3c4052 0%,
      #182226e0 100%
    );
    z-index: 1;
  }
`;
