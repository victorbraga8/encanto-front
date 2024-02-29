"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SideMenu from "../sidemenu/page";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { SessionProps } from "./types/sessionType";
// import useSWR from "swr";

const Sidebar = (token: any) => {
  const { data } = useSession();
  const sessionData = data;

  // const sessionData = data;
  // const { data } = useSWR("/api/session", {
  //   revalidateOnFocus: true,
  // });
  console.log(sessionData);
  return (
    <>
      <SideMenu />
    </>
  );
};

export default Sidebar;
