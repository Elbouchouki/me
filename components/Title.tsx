import React from "react";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-500 text-xl font-semibold">
      {text}
    </h3>
  );
};

export default Title;
