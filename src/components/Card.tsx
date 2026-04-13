import { useState, type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  const [likes, setLikes] = useState<number>(0);
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
      <button onClick={()=>{setLikes((prev)=> prev +1)}}>❤️ Лайк <span>{likes}</span></button>
    </div>
  );
}
