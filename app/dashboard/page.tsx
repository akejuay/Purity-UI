"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

export default function page() {
  return (
    <div>
      <h4>Welcome</h4>
      <Button variant="link" onClick={() => signOut()}>
        Log Out
      </Button>
    </div>
  );
}
