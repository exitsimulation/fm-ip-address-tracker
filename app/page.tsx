import Image from "next/image";
import RootLayout from "./layout";

import iconArrow from "../public/icon-arrow.svg";
import FloatingBox from "./components/FloatingBox";
import { IFloatingBoxItemProps, IQueryResponse } from "../user";
import MapComponent from "./components/MapComponent";
import dynamic from "next/dynamic";

export default function Home() {
  let templateResponse: IQueryResponse = {
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC-05:00",
    isp: "SpaceX, Starlink",
  };

  // const MapWithNoSSR = dynamic(() => import("./components/MapComponent"), {
  //   ssr: false,
  // });

  const MapWithNoSSR = dynamic(() => import("./components/MapComponent"), {
    ssr: false,
  });

  return (
    <div
      className={
        "relative grid h-[100vh] w-[100vw] grid-cols-1 grid-rows-[250px_1fr]"
      }
    >
      <div className={"bg-pattern-bg"}>
        <div className={"m-6 text-center text-3xl text-stone-100"}>
          IP Address Tracker
        </div>
        <div className={"flex flex-row justify-center"}>
          <input
            type={"text"}
            placeholder={"Search for any IP address or domain"}
            className={
              "w-[50vw] max-w-lg rounded-l-2xl px-4 focus:outline-none"
            }
          />
          <div
            className={
              "flex flex-col justify-center self-stretch rounded-r-2xl bg-very-dark-gray p-4 "
            }
          >
            <Image src={iconArrow} alt={"Icon Arrow"} className={""} />
          </div>
        </div>
      </div>
      <MapComponent className={"overflow-hidden"}></MapComponent>
      {/*<MapWithNoSSR />*/}
      <FloatingBox
        className={
          "absolute top-[350px] left-2/4 flex w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col justify-between divide-solid rounded-2xl bg-stone-100 p-4 md:top-[250px] md:w-2/3 md:flex-row md:divide-x"
        }
        queryResponse={templateResponse}
      />
    </div>
  );
}
