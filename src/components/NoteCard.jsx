import { useEffect } from "react";
import Trash from "../icons/Trash";
import { useRef } from "react";

const NoteCard = ( { note } ) => {
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);
  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef)
  }, [])

//   oninput= {() => {
//     autoGrow(textAreaRef)
//   }};

  const autoGrow = (textAreaRef) => {
    const {current} = textAreaRef;
    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";
  }

  return (
    <div
      className=" w-[400px] rounded-[5px] cursor-pointer shadow-lg absolute z-10"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className=" bg-[#9bd1de] rounded-b-md rounded-t-md flex justify-between items-center p-[5px]"
        style={{
          backgroundColor: colors.colorHeader,
        }}
      >
        <Trash />
      </div>
      <div className="p-4 rounded-l-2 rounded-r-2">
        <textarea
          ref={textAreaRef}
          className="bg-inherit border-none w-full h-full resize-none text-lg focus:bg-inherit focus:outline-none focus:w-full focus:h-full"
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
