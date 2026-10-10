import "./MainPageContent.css";

export type PageContentProps = {
  children: React.ReactNode;
};

export default function MainPageContent({ children }: PageContentProps) {
  return <div>{children}</div>;
}
