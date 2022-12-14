import React from "react";

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
  children?: React.ReactNode;
  className?: string;
}

interface IMapProps {
  children?: React.ReactNode;
  className?: string;
}

interface MapProps extends LeafletMapProps {}
