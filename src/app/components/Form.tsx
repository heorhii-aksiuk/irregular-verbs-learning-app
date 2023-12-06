'use client';

import { Word } from '@/utils/types';
import FormItem from './FormItem';
import { useState } from 'react';
import words from '@/utils/getShuffleData';

function Form() {
  const [check, setCheck] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCheck(true);
  };
  return (
    <div className="flex justify-center">
      <form spellCheck={false}>
        <ol className="list-decimal">
          {words.map((word: Word) => (
            <li key={word.id}>
              <FormItem word={word} check={check} />
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={onSubmit}
          className="bg-indigo-500 rounded-sm p-2"
        >
          Check!
        </button>
      </form>
    </div>
  );
}

export default Form;
