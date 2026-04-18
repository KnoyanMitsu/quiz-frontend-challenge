"use client";

import React from "react";
import Button from "@/component/Button";
import Input from "@/component/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import CardTitle from "@/component/card/CardTitle";
import handleLogin from "@/utils/login";

function LoginView() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    handleLogin(e, username, password, router, setError);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <CardTitle title="Login">
        <form
          className="flex flex-col gap-2 mt-3"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-500">{error}</p>}
          <Input
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </CardTitle>
    </div>
  );
}

export default LoginView;
