import { IInputFieldProps } from "../user";
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
          className={
            "w-[75vw] cursor-pointer rounded-l-2xl p-4 focus:outline-none md:w-[50vw] md:max-w-lg"
          }
          ref={inputField}
          pattern={pattern}
          title={"Enter a valid IP address in the format '192.168.0.1'"}
        />
        <div
          className={"flex cursor-pointer flex-col justify-center self-stretch"}
        >
          <div className={"h-14 w-12 overflow-hidden rounded-r-2xl p-0"}>
            <input
              type={"submit"}
              value={""}
              className={
                "h-14 w-12 cursor-pointer rounded-r-2xl bg-black bg-icon-bg bg-center bg-no-repeat hover:bg-very-dark-gray"
              }
            />
          </div>
          {/*<Image src={iconArrow} alt={"Icon Arrow"} className={""} />*/}
        </div>
      </div>
    </form>
  );
};

export default InputField;
