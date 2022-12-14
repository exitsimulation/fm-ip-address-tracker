import { IInputFieldProps } from "../user";
import Image from "next/image";
import iconArrow from "../public/icon-arrow.svg";
import React, { useRef } from "react";

const InputField = ({
  children,
  className,
  placeholder,
  setIpAddress,
  pattern,
}: IInputFieldProps) => {
  let inputField = useRef<HTMLInputElement | null>(null);
  const handleSetIpAddress = () => {
    setIpAddress(inputField.current?.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIpAddress(inputField.current?.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={className}>
        <input
          type={"text"}
          placeholder={placeholder}
          className={"w-[50vw] max-w-lg rounded-l-2xl px-4 focus:outline-none"}
          ref={inputField}
          pattern={pattern}
          title={"Enter a valid IP address in the format '192.168.0.1'"}
        />
        <div
          className={
            "flex cursor-pointer flex-col justify-center self-stretch rounded-r-2xl bg-very-dark-gray p-4"
          }
          // onClick={handleSetIpAddress}
        >
          <input type={"submit"} />
          {/*<Image src={iconArrow} alt={"Icon Arrow"} className={""} />*/}
        </div>
      </div>
    </form>
  );
};

export default InputField;
