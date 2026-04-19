import type { ReactNode } from "react";
import './customCards.css'

interface CustomCardProps {
    type: string;
    children: ReactNode;
}

function HorizontalCard({ content }: { content: ReactNode }) {
  return <div className="horizontal">{content}</div>;
}

function VerticalCard({ content }: { content: ReactNode }) {
  return <div className="vertical">{content}</div>;
}

export function CustomCard({type, children}: CustomCardProps){
    return <div className="productList">
        {type === 'horizontal' ? <HorizontalCard content={children} /> : <VerticalCard content={children} />}
    </div>
}