import { cookies } from "next/headers";
import { TabBar } from "@/components";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};
export default async function CookiesPage() {
  const cookieStore = await cookies();
  const cookieTab = Number(cookieStore.get("selectedTab")?.value ?? "1");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-2">Tabs</span>
        <TabBar currentTab={cookieTab} />
      </div>
    </div>
  );
}
