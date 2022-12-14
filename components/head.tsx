import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";
import { IHeadProps } from "../user";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = ({ title, description, url }: IHeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ""} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
  </NextHead>
);

export default Head;
