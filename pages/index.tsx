import Head from "next/head";
import dynamic from "next/dynamic";
import FloatingBox from "../components/FloatingBox";
import useSWR from "swr";

import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { LatLngExpression } from "leaflet";
import { NextApiRequest } from "next";
import Link from "next/link";
import Attribution from "../components/Attribution";

/*
Fetcher is basically a wrapper around the standard fetch function
It is needed for passing it into the uswSWR(...) hook
 */
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const regex_ipv4 =
  "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";

export default function Home({ ip }: { ip: string | undefined }) {
  const [position, setPosition] = useState<LatLngExpression>({
    lat: 51.505,
    lng: -0.09,
  });

  const [ipQueryResponse, setIpQueryResponse] = useState({
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC-05:00",
    isp: "SpaceX, Starlink",
  });

  const [ipAddress, setIpAddress] = useState(ip);

  /*
  https://swr.vercel.app/
   */
  const { data, error } = useSWR("/api/ip/" + `${ipAddress}`, fetcher);

  useEffect(() => {
    setIpQueryResponse({
      ipAddress: data?.ip || "undefined",
      location: `${data?.location?.city || "undefined"}, ${
        data?.location?.region
      } ${data?.location?.postalCode}`,
      timezone: `UTC${data?.location?.timezone || "-undefined"}`,
      isp: data?.isp || "undefined",
    });

    console.log(data);
    console.log(ip);

    setPosition({
      lat: data?.location?.lat || 51.505,
      lng: data?.location?.lng || -0.09,
    });
  }, [data]);

  /*
  Dynamically load map component, so it is not rendered on the server. LeafletJS needs a window object and this would not be available in SSR
  https://stackoverflow.com/a/64634759
   */
  const MapWithNoSSR = dynamic(() => import("../components/MapComponent"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta
          name="description"
          content="Frontend Mentor - IP address tracker challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "relative grid h-[100vh] w-[100vw] grid-cols-1 grid-rows-[250px_1fr]"
        }
      >
        <div className={"bg-pattern-bg"}>
          <div className={"m-6 text-center text-3xl text-stone-100"}>
            IP Address Tracker
          </div>

          <InputField
            placeholder={"Search for any IP address or domain"}
            className={"flex flex-row justify-center"}
            setIpAddress={setIpAddress}
            pattern={regex_ipv4}
          />
        </div>
        {/*<MapComponent className={"overflow-hidden"}></MapComponent>*/}
        <MapWithNoSSR
          position={position}
          className={"overflow-hidden bg-very-dark-gray"}
        />
        <FloatingBox
          className={
            "absolute top-[375px] left-2/4 z-[500] flex w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between divide-solid rounded-2xl bg-white p-4 text-center md:top-[250px] md:w-2/3 md:flex-row md:divide-x md:text-left"
          }
          queryResponse={ipQueryResponse}
        />

        <Attribution
          className={
            "absolute bottom-0 left-2/4 z-[500] -translate-y-1/2 -translate-x-1/2 rounded-lg bg-very-dark-gray p-2 text-center text-sm text-stone-100 opacity-70 "
          }
        />
      </div>
    </>
  );
}

/*
Get client IP address
https://stackoverflow.com/a/72002568
 */
export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const forwarded = req.headers["x-forwarded-for"];

  const ip =
    typeof forwarded === "string"
      ? forwarded.split(/, /)[0]
      : req.socket.remoteAddress;

  console.log(ip);

  return {
    props: { ip },
  };
};
