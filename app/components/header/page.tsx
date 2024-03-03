"use client";

import { ChevronLeftIcon, MessageCircle, Settings } from "lucide-react";
// import SideMenu from "./sidemenu";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { signIn, useSession } from "next-auth/react";
import helpers from "@/lib/helpers";
// import { SessionProps } from "./types/sessionType";
// import useSWR from "swr";
// import sessionData from "@/lib/helpers";

const Header = () => {
  //   const { data } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const handleBackClick = () => {
    router.back();
  };

  const pathParts = helpers.handblePathHeader(pathName);
  // console.log(pathParts);
  // useEffect(() => {
  //   console.log(pathName);
  // }, []);

  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-end p-12 bg-gradient-to-r from-cyan-400 to-indigo-700 py-4 gap-3">
        {/* {data?.user?.name ? ( */}
        <>
          <div className="flex-grow">
            <h2 className="ml-[220px] text-white">
              <p className="uppercase">
                <span className="font-semibold">{pathParts}</span>
              </p>
            </h2>
          </div>
          <div className="mr-0 cursor-pointer">
            <MessageCircle className="text-white" />
          </div>
          <div className="mr-4 cursor-pointer">
            <Settings className="text-white" />
          </div>
          <h2 className="text-white font-normal uppercase text-xs">
            {/* {data.user?.name} */}
          </h2>
          <Avatar className="h-10 w-10 ">
            <AvatarImage
              src="/assets/profile-pic-new.jpg"
              className="rounded-full border-2 border-solid border-white"
            />
          </Avatar>
        </>
        {/* ) : (
          <div className="h-10 w-10 ">
            <h2 className="text-white font-normal uppercase text-xs">
              <Button onClick={() => signIn("azure-ad")}>Login</Button>
            </h2>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

export default Header;
