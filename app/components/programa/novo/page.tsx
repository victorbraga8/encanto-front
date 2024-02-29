"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const tempUpload = () => {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="py-10 lg:pl-[226px] max-w-fit">
        <h1>TESTE</h1>
        <form onSubmit={onSubmit} action="">
          <Input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </>
  );
};

export default tempUpload;
