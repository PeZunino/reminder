import { Container } from "./styles";

export const TextArea: React.FC = () => {
  return (
    <>
      <Container>
        <textarea name="description" id="" cols={30} rows={10}></textarea>
      </Container>
    </>
  );
};
