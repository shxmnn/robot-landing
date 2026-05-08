"use client";

import dynamic from "next/dynamic";
import { Component, type ErrorInfo, type ReactNode, Suspense } from "react";

import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

interface SplineSceneProps {
  scene: string;
  className?: string;
}

type SplineErrorBoundaryProps = {
  children: ReactNode;
};

type SplineErrorBoundaryState = {
  hasError: boolean;
};

function SplineFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="loader" aria-label="Loading 3D scene" />
    </div>
  );
}

class SplineErrorBoundary extends Component<
  SplineErrorBoundaryProps,
  SplineErrorBoundaryState
> {
  state: SplineErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline scene failed to render", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-[2rem] border border-amber-950/12 bg-yellow-50/70 text-sm text-amber-950/60">
          3D preview is unavailable on this device.
        </div>
      );
    }

    return this.props.children;
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <SplineErrorBoundary>
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={scene} className={cn("h-full w-full", className)} />
      </Suspense>
    </SplineErrorBoundary>
  );
}
