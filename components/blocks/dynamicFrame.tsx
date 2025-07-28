"use client";
import FramesData from "@/constant/dynamicFrameData";
import { DynamicFrameLayout, Frame } from "../dynamic-frame-layout";

export function DynamicFrame() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <DynamicFrameLayout
        frames={FramesData as Frame[]}
        className="w-full h-full"
        hoverSize={6}
        gapSize={4}
      />
    </div>
  );
}
