import HeaderDeslogado from "./components/Header";
import Cultura from "./Cultura/page";
import Geografia from "./Geografia/page";
import Historia from "./Historia/page";
import Visitacao from "./Visitacao/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <HeaderDeslogado/>
        <div>
          <p>Teste</p>
          <Cultura />
          <Geografia />
          <Historia />
          <Visitacao />
        </div>
    </main>
  );
}
