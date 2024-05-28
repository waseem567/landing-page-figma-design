import Container from "@/components/container/Container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
      </Container>
    </main>
  );
}
