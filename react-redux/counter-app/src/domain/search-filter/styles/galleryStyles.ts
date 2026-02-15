import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  margin-right: 8px;
  padding: 6px 12px;
  background: ${p => (p.active ? '#333' : '#eee')};
  color: ${p => (p.active ? '#fff' : '#000')};
`;
