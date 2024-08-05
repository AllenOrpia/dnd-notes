import { fakeData as notes } from "../assets/fakeData";
import NoteCard from "../components/NoteCard";
import TestNote from "../components/TestNote";

const test = {
    body: JSON.stringify('asd')
}

const NotesPages = () => {
  return (
    <div>
      Hello World
      {notes.map((note) => {
        <NoteCard note={note} key={note.$id} />;
      })}

      <TestNote note={test} />
    </div>
  );
};

export default NotesPages;
