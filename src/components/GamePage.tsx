import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface GamePageProps {
  title: string;
  description: string | React.ReactNode;
  gameUrl: string;
  gameTitle: string;
}

export const GamePage = ({
  title,
  description,
  gameUrl,
  gameTitle,
}: GamePageProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
        >
          <ArrowLeft size={20} />
          Back to Games
        </Link>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {typeof description === "string" ? (
          <p className="text-muted-foreground text-lg">{description}</p>
        ) : (
          <div className="text-muted-foreground text-lg">{description}</div>
        )}
      </div>
      <div
        className="w-full bg-black rounded-lg overflow-hidden shadow-lg"
        style={{ minHeight: "600px", height: "70vh" }}
      >
        <iframe
          src={gameUrl}
          className="w-full h-full border-0"
          title={gameTitle}
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default GamePage;
