
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-5">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-banking-blue animate-fade-in">404</h1>
          <h2 className="text-2xl font-semibold animate-fade-in">Page non trouvée</h2>
        </div>
        <p className="text-muted-foreground max-w-md animate-fade-in">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="mt-8 animate-fade-in">
          <Link to="/">
            Retourner au tableau de bord
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
