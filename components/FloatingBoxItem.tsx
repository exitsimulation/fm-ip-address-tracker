import { IFloatingBoxItemProps } from "../user";

const FloatingBoxItem = ({ value, title }: IFloatingBoxItemProps) => {
  return (
    <div className={"flex flex-col gap-2 p-4"}>
      <div className={"uppercase text-dark-gray"}>{title}</div>
      <div className={"text-xl font-medium text-very-dark-gray"}>{value}</div>
    </div>
  );
};

export default FloatingBoxItem;
