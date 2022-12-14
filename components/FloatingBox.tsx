import { IFloatingBoxProps } from "../user";
import FloatingBoxItem from "./FloatingBoxItem";

const FloatingBox = ({
  children,
  className,
  queryResponse,
}: IFloatingBoxProps) => {
  return (
    <div className={className}>
      <FloatingBoxItem title={"IP Address"} value={queryResponse.ipAddress} />
      <FloatingBoxItem title={"Location"} value={queryResponse.location} />
      <FloatingBoxItem title={"Timezone"} value={queryResponse.timezone} />
      <FloatingBoxItem title={"ISP"} value={queryResponse.isp} />
    </div>
  );
};

export default FloatingBox;
