import Image from "next/image";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { users } from "@/assets/data";
import Dashboard from "./components/Dashboard/Dashboard";

export default function Home() {

  return (
    <main className="flex gap-4">
      <section className="w-72">
        <Sidebar />
      </section>
      <section className="flex flex-col flex-1 gap-4 ">
        <Header />
        <Dashboard />
      </section>
    </main>
  );
}
