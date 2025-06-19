import { Sidebar, TopMenu } from "@/components";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="p-6 m-2 bg-white rounded" >{children}</div>
      </div>
    </>
  );
}
