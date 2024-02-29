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
      {/* {data?.user ? ( */}
      <Card className="fixed left-0 top-0 h-screen z-50 bg-white text-white rounded-none drop-shadow-2xl shadow-blue-500/20 border-r-[6px] border-r-emerald-400">
        <CardContent className="flex flex-col items-center justify-between h-full">
          <div className="mt-8">
            {/* <Button
              className=" text-indigo-600 py-2 px-7 rounded"
              variant="link"
              onClick={() => signIn("azure-ad")}
            >
              Login
            </Button>
            <Button
              className=" text-indigo-600 py-2 px-7 rounded"
              variant="link"
              onClick={() => signOut()}
            >
              Logout
            </Button> */}
            <Image
              src="/assets/profile-pic-new.jpg"
              width={148}
              height={148}
              alt="Profile"
              className="rounded-full mb-4 border-4 border-solid border-purple-500"
            />
            <h2 className="text-purple-500 text-center uppercase font-semibold">
              {/* {data?.user?.name} */}
            </h2>
          </div>
          <div id="testeMenu">
            <SideMenu />
          </div>
          <div className="mt-auto">
            <Image
              className="mt-auto"
              alt="encantologo"
              width={150}
              height={150}
              src="/assets/encanto-footer.png"
            />
          </div>
        </CardContent>
      </Card>
      {/* ) : null} */}
    </>
  );
};

export default Sidebar;
