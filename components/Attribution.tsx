import { IAttributionProps } from "../user";
import Link from "next/link";

const Attribution = ({ className }: IAttributionProps) => {
  return (
    <div className={className}>
      Frontend Mentor - IP Address Tracker - Solution by{" "}
      <Link
        href={"https://github.com/exitsimulation"}
        className={"text-blue-400"}
      >
        @exitsimulation
      </Link>
    </div>
  );
};

export default Attribution;
