import "./PageContainer.css";

export type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <>{children}</>;
}
