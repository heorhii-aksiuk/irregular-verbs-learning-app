import { useEffect, useState } from "react";

interface Props {
  correctValue: string;
  check?: boolean;
  readOnly?: boolean;
}

function Input({ correctValue, check, readOnly }: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<boolean | null>(null);
  const [errorStyle, setErrorStyle] = useState("");

  useEffect(() => {
    if (!check) {
      return;
    }

    if (input === correctValue) {
      setError(false);
    } else {
      setError(true);
    }
  }, [check, correctValue, input]);

  useEffect(() => {
    if (error === false) {
      setErrorStyle("bg-green-500");
    }
    if (error === true) {
      setErrorStyle("bg-rose-600");
    }
  }, [error]);

  return (
    <div className="">
      {readOnly ? (
        <input
          className="mr-5 mb-5 pl-2 rounded-sm text-slate-950 bg-gray-100 w-48"
          value={correctValue}
          disabled
        />
      ) : (
        <>
          <input
            onChange={(e) => setInput(e.target.value.trim())}
            className={`mr-5 pl-2 rounded-sm text-slate-950 w-48 ${errorStyle}`}
            value={error ? `${input} > ${correctValue}` : input}
          />
        </>
      )}
    </div>
  );
}

export default Input;
