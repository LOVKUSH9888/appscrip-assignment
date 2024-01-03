"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Stories = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastParam = pathSegments[pathSegments.length - 1];

  const capitalizedLastParam =
    lastParam.charAt(0).toUpperCase() + lastParam.slice(1);
  return <div>{capitalizedLastParam}</div>;
};

export default Stories;
