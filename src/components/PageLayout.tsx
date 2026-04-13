import type { ReactNode } from "react";

interface PageLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  content: ReactNode;
}
export function PageLayout({ header, sidebar, content }: PageLayoutProps) {
  return (
    <div>
      <header
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          border: "1px solid grey",
        }}
      >
        {header}
      </header>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <aside
          style={{
            width: "200px",
            borderRight: "1px solid grey",
          }}
        >
          {sidebar}
        </aside>
        <main style={{ padding: "20px" }}>{content}</main>
      </div>
    </div>
  );
}
