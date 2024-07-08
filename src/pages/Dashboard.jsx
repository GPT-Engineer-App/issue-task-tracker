import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Project One", description: "This is the first project." },
  { id: 2, title: "Project Two", description: "This is the second project." },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <Button className="mt-2">Add Project</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id} onClick={() => navigate(`/project/${project.id}`)} className="cursor-pointer">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;