"use client";

import { Word } from "@/utils/types";
import Input from "./Input";

interface Props {
  word: Word;
  check: boolean;
}

function FormItem({ word, check }: Props) {
  const { translation, infinitive, pastSimple, pastParticle } = word;

  return (
    <>
      <Input correctValue={translation} readOnly />
      <Input correctValue={infinitive} check={check} />
      <Input correctValue={pastSimple} check={check} />
      <Input correctValue={pastParticle} check={check} />
    </>
  );
}

export default FormItem;
