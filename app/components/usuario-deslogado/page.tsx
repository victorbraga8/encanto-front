"use client";
import TabelaInicial from "@/app/components/tabela/page";
import helpers from "@/lib/helpers";
import SideBar from "@/app/components/sidebar/page";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { signIn } from "next-auth/react";

const UsuarioDeslogado = () => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/assets/home-screen.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/assets/home-screen.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden max-h-[884px] h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-green-900" />
          <Image
            src="/assets/home-screen.png"
            alt="Descrição da imagem"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            ></svg>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Sistema Encanto
                </CardTitle>
                <CardDescription className="text-center">
                  Clique no botão abaixo e faça o seu login
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={() => signIn("azure-ad")}>
                  Acessar
                </Button>
                {/* <p className="mt-2 text-xs text-center text-gray-700">
                  {" "}
                  Don't have an account?{" "}
                  <span className=" text-blue-600 hover:underline">
                    Sign up
                  </span>
                </p> */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsuarioDeslogado;
