"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AUTH_TRIGGER } from "@/constants";
import { Button } from "./ui/button";
import { ArrowRight, Lock } from "lucide-react";

export default function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id={AUTH_TRIGGER}></button>
      </DialogTrigger>
      <DialogContent className=" rounded-md">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2">
            <Lock />
            <span> Login to Continue</span>
          </DialogTitle>
          <DialogDescription>
            Choose the authentication method you want to log in with{" "}
          </DialogDescription>
        </DialogHeader>
        <Button className="group w-full cursor-pointer gap-2 bg-gradient-to-br from-accent via-primary via-60% to-primary transition-transform hover:scale-95 hover:opacity-90 sm:h-14 sm:px-10 sm:text-base">
          Login with Github{" "}
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Button>

        <Button className="group w-full cursor-pointer gap-2 bg-gradient-to-br from-accent via-primary via-60% to-primary transition-transform hover:scale-95 hover:opacity-90 sm:h-14 sm:px-10 sm:text-base">
          Login with Google{" "}
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
