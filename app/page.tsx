"use client";

import Modal from "@/components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main>
        <h1 className="text-3xl font-semibold mb-4">Modal Example</h1>
        <Modal />
      </main>
    </main>
  );
}
