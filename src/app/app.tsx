//"use client";
import HelloWorld from "~/components/HelloWorld";

import dynamic from "next/dynamic";

//const HelloWorld = dynamic(() => import("~/components/HelloWorld"), {
//  ssr: false,
//});

export default function App({ token }: { token: string; }) {
  return <HelloWorld />;
}

/*
"use client";

import dynamic from "next/dynamic";

const TokenSwap = dynamic(() => import("~/components/TokenSwap"), {
  ssr: false,
});

export default function App({ token }: { token: string; }) {
  return <TokenSwap token={token} />;
}
*/