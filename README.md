## IP Address Tracker - Frontend Mentor Challenge
### Solution with Next.js, Tailwind CSS and Typescript

For this solution to the [Frontend Mentor - IP Address tracker challenge](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) I used the ``npx create-next-app`` template as a base and customized it with Tailwind CSS support.
Initially I was using Next.js 13 and the new app directory, however, Leaflet.js (which is used for rendering the live map) seems to have problems with this Next.js version or its experimental features. 
Thus, I rolled back to the old pages directory.

### Map component with Leaflet.js
The map component needs to be dynamically loaded with ``next/dynamic`` because Leaflet.js needs access to the window object:
```typescript jsx
  const MapWithNoSSR = dynamic(() => import("../components/MapComponent"), {
    ssr: false,
  });
```
https://stackoverflow.com/a/64634759

### Querying the IP data
For the IP queries to ``https://geo.ipify.org`` I am using Vercel's ``useSWR`` hook and axios in combination with Next.js dynamic API routes.

``useSWR`` needs a fetcher function which is a wrapper around the usual fetch method:
```typescript
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const { data, error } = useSWR("/api/ip/" + `${ipAddress}`, fetcher);
```
https://swr.vercel.app/

### Data validation with regex pattern
For the data validation of the input field I am using the following regex pattern:
```regexp
const regex_ipv4 =
"(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
```

### Get client IP address

```typescript
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
```
https://stackoverflow.com/a/72002568

