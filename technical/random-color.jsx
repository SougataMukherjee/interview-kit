import styled from "styled-components";
export default function App() {
  // return a random 6-digit hex color
  function randomColor() {
    const chars = "0123456789abcdef";
    let color = "";

    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
  }

  return (
       <Container>
      {Array.from({ length: 30 }).map((_, i) => {
        const color = randomColor();
        return (
          <Box key={i} bgColor={`#${color}`}>
            #{color}
          </Box>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  width: 16rem;
  height: 10rem;
  margin: 0.4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid;
  border-radius: 0.6rem;
  background-color: ${(props) => props.bgColor};
`;

