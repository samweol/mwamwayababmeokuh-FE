import React from "react";
import { ColorRing } from "react-loader-spinner";
import { useRecoilValue } from "recoil";
import { loadingState } from "../../recoil/atom";

export default function Loading() {
  const isLoading = useRecoilValue(loadingState);
  return (
    <ColorRing
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: "1000",
        transform: "translate(-50%, -100%)",
      }}
      wrapperClass="color-ring-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}
