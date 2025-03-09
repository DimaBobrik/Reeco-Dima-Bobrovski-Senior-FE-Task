import styled, {css} from "styled-components";
import {TableCellProps} from "../types/ProductsTable.types.ts";

export const Section = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 4;
`;
export const SectionTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    color: #6c757d;
    opacity: 0.75;
  }
  
  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'%3E%3Cpath fill='%23333' d='M0 0l4 5 4-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 8px 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
`;

export const HoverableRow = styled.tr`
    transition: background-color 0.2s;

    &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
    }
`;

export const TableCell = styled.td<TableCellProps>`
    border-bottom: 1px solid #ccc;
    padding: 8px;

    ${({ align = 'center' }) => css`
    text-align: ${align};
  `}
`;

export const TableHeaderCell = styled.th<TableCellProps>`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  font-weight: bold;
    ${({ align = 'center' }) => css`
    text-align: ${align};
  `}
`;
