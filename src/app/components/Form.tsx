"use client";

import { Word } from "@/utils/types";
import FormItem from "./FormItem";
import { useState } from "react";
import words from "@/utils/types/getShuffleData";

function Form() {
  const [check, setCheck] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCheck(true);
  };
  return (
    <form onSubmit={onSubmit} spellCheck={false}>
      <ul>
        {words.map((word: Word) => (
          <li key={word.id}>
            <FormItem word={word} check={check} />
          </li>
        ))}
      </ul>
      <button className="bg-indigo-500">Check!</button>
    </form>
  );
}

export default Form;
