import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const label = styled.h1`
  margin-top: 0;
`;

interface Props {
    readonly label: string;
}

export const Title = ({ label }: Props) => {
    return (
        <Container>
            <label>{label}</label>
        </Container>
    )
}