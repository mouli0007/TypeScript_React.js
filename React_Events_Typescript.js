import React, { ChangeEvent, FC, useState } from "react";
import { PeopleDetails as Props } from "./LaithTypeScript";

// Creating an interface for passing down a use State function
interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const AddToList: FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setInput((per) => ({ ...per, [name]: value }));
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img || !input.note) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        note: input.note,
        url: input.img,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name..."
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />

      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add Person
      </button>
    </div>
  );
};

export default AddToList;
