import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="landing-page">
      <h1 className="site-title">Your AI</h1>
      <p>
        Your AI mempersembahkan AI Tools untuk semua orang. Your AI menggunakan API dari{" "}
        <a href="https://huggingface.co" target="_blank">
          Huggingface
        </a>{" "}
        untuk membuat gambar{" "}
        <a href="https://deepinfra.com" target="_blank">
          Deepinfra
        </a>{" "}
        untuk ChatAI.
      </p>
      <p>
        Your AI memungkinkan anda memilih model AI untuk digunakan. Kamu dapat menggunakan model AI yang menurutmu bagus untuk di gunakan.
      </p>
      <h2>Coba Sekarang</h2>
      <div className="ai-menus"> 
        <Link to="/chat">Chat AI</Link>
        <Link to="/image">Image Generator</Link>
      </div>
      <p className="ai-footer"> &copy; 2024 Hoed AI Tools for Everyone.</p>
    </main>
  );
}