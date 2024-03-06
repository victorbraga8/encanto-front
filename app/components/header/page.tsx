"use client";

import { MessageCircle, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import helpers from "@/lib/helpers";

const Header = () => {
  const { data } = useSession();
  const pathName = usePathname();
  const pathParts = helpers.handblePathHeader(pathName);

  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-end p-12 bg-gradient-to-r from-cyan-400 to-indigo-700 py-4 gap-3">
        <>
          {data?.user ? (
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
                {data?.user?.name}
              </h2>
              <Avatar className="h-10 w-10 ">
                <AvatarImage
                  src="/assets/profile-pic-new.jpg"
                  className="rounded-full border-2 border-solid border-white"
                />
              </Avatar>
            </>
          ) : (
            <div className="py-5"></div>
          )}
        </>
      </CardContent>
    </Card>
  );
};

export default Header;
