import styled from "styled-components";
import { device } from "./breakpoints";

export const Section = styled.section`
  display: flex;
  position: relative;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.main_Font_Color};
  min-height: 100vh;
`;
export const SectionMain = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 25px 25px;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 45px;
  @media ${device.phone} {
    flex: 4;
    margin: 25px 40px;
    gap: 55px;
  }
`;

export const SectionContent = styled.div``;