import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "200px",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
}
