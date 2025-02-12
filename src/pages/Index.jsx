import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to the Project Tracker</h1>
      <p>Get started by navigating to the dashboard.</p>
      <Button onClick={() => navigate("/dashboard")} className="mt-4">Go to Dashboard</Button>
    </div>
  );
};

export default Index;
