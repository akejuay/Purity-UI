"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "../src/shared/ui/button";

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
