interface DashboardPageProps {
  params: { storeId: string };
}

// const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
//   return <div>DashboardPage</div>;
// };

// export default DashboardPage;

export default async function DashboardPage({ params }: DashboardPageProps) {
  return <div>DashboardPage</div>;
}
