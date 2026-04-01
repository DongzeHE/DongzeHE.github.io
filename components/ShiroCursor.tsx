"use client";

import { useEffect, useRef, useState } from "react";

export function ShiroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lastXRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      // Position the cursor image centered on mouse
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Determine direction
      const dx = e.clientX - lastXRef.current;
      if (Math.abs(dx) > 2) {
        setFacingLeft(dx < 0);
      }
      lastXRef.current = e.clientX;

      // Set moving state
      setIsMoving(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isMoving ? "/cursors/shiro-moving.gif" : "/cursors/shiro-idle.gif"}
        alt=""
        width={isMoving ? 64 : 48}
        height={isMoving ? 64 : 48}
        style={{
          transform: facingLeft ? "scaleX(-1)" : "none",
          imageRendering: "auto",
        }}
        draggable={false}
      />
    </div>
  );
}
