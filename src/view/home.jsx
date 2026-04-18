"use client";
import React, { useState } from "react";
import Card from "@/component/card/Card";
import { useRouter } from "next/navigation";
import Button from "@/component/Button";
import Input from "@/component/Input";


function Home() {
  const [minute, setMinute] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    if (minute <= 0) {
      alert("Berapa Menit?");
      return;
    }
    router.push(`/test?minute=${minute}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>  
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold"></h1>
          <p>Total Soal: 20</p>
          <p>Tipe: Multiple Choice</p>
          <p>Berapa Menit?</p>
          <Input type="number" required value={minute} onChange={(e) => setMinute(e.target.value)} />
          <Button type="submit" onClick={handleSubmit}>Start</Button>
        </div>
      </Card>
    </div>
  );
}

export default Home;
