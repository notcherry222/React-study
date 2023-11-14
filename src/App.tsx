import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { useState } from 'react';
import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책읽기'
  ]);

  const [showToDoInput, setShowToDoInput] = useState(false); //컴포넌트를 필요할 때만 표시할 수 있도록 새로운 state변수 선언

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
    setShowToDoInput(false);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const [toDo, setToDo] = useState(''); 

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && <ToDoInput onAdd={onAdd} />}
      <ShowInputButton
      show = {showToDoInput}
      onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </Container>
  );
}

export default App;