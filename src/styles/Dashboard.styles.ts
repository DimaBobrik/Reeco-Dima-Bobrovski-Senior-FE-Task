import styled, { css } from "styled-components";
import { KPIBlockProps } from "../types/Dashboard.types.ts";

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
`;

export const DashboardContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
`;

export const KPIContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const KPIBlock = styled.div<KPIBlockProps>`
    flex: 1 1 200px;
    ${({ bgcolor = '#fff' }) => css`
    background: ${bgcolor};
  `}
    padding: 1rem;
    border-radius: 4px;
`;