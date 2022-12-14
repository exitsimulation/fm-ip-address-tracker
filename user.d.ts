import React, { Dispatch } from "react";
import { LatLngExpression } from "leaflet";

interface IFloatingBoxProps {
  className?: string;
  children?: React.ReactNode;
  queryResponse: IQueryResponse;
}

interface IFloatingBoxItemProps {
  title: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
}

interface IQueryResponse {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

interface IMapComponentProps {
  position: LatLngExpression;
  children?: React.ReactNode;
  className?: string;
}

interface IHeadProps {
  title: string;
  description?: string;
  url?: string;
}

interface IData {
  data?: string;
  err?: string;
}

interface IInputFieldProps {
  placeholder: string;
  pattern?: string;
  setIpAddress: Dispatch<SetStateAction<string>>;
  children?: React.ReactNode;
  className: string;
}
