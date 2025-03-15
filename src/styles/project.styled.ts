import styled from "styled-components";

export const ProjectWrap = styled.div`
  .project-container {
    filter: contrast(2) brightness(47.5) hue-rotate(325deg) sepia(1)
      saturate(0.1);
  }
  .wrap-section {
    backdrop-filter: blur(8px);
    border-radius: 16px;
    filter: contrast(1.5);
  }
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
