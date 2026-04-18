"use client";
import React, { useEffect, useState } from "react";
import Button from "@/component/Button";
import CardTitle from "@/component/card/CardTitle";
import handleLogout from "@/utils/logout";
import { useRouter } from "next/navigation";

function Result() {
  const [score, setScore] = useState();
  const [incorrect, setIncorrect] = useState();
  const [totalQ, setTotalQ] = useState();
  const router = useRouter();
  useEffect(() => {
    const score = localStorage.getItem("score");
    const incorrect = localStorage.getItem("incorrect");
    const totalQ = localStorage.getItem("totalQ");
    setScore(score);
    setIncorrect(incorrect);
    setTotalQ(totalQ);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CardTitle title="Result">
        <div className="flex flex-col gap-2">
          <p className="text-text mb-3">Total Soal: {totalQ}</p>
          <p className="text-text mb-3">Benar: {score}</p>
          <p className="text-text mb-3">Salah: {incorrect}</p>
          <div className="flex gap-2">
            <Button onClick={() => handleLogout(router)} className="w-full">
              Logout
            </Button>
            <Button onClick={() => router.push("/home")} className="w-full">
              Home
            </Button>
          </div>
        </div>
      </CardTitle>
    </div>
  );
}

export default Result;
