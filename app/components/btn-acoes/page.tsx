import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Pencil, SquareUserRound, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BtnAcoes = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="mr-2 bg-amber-400 hover:bg-amber-200"
            >
              <Pencil />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-600 text-white py-2 px-3 mb-3 rounded-full">
            <p>Editar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="mr-2 bg-red-600 hover:bg-red-300"
            >
              <Trash2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-600 text-white py-2 px-3 mb-3 rounded-full">
            <p>Excluir</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default BtnAcoes;
