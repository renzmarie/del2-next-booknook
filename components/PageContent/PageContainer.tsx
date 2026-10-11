import "./PageContainer.css";

export type PageContentProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContentProps) {
  return <>{children}</>;
}
