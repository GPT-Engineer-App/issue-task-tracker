import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const project = {
  id: 1,
  title: "Project One",
  description: "This is a detailed description of the first project.",
  issues: [
    { id: 1, title: "Issue One", status: "Open", assignee: "John Doe" },
    { id: 2, title: "Issue Two", status: "Closed", assignee: "Jane Doe" },
  ],
  tasks: [
    { id: 1, title: "Task One", status: "In Progress", assignee: "John Doe" },
    { id: 2, title: "Task Two", status: "Completed", assignee: "Jane Doe" },
  ],
};

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p>{project.description}</p>
        <Button className="mt-2">Add Issue/Task</Button>
      </header>
      <Tabs defaultValue="issues">
        <TabsList>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="issues">
          <ul>
            {project.issues.map((issue) => (
              <li key={issue.id} className="mb-2">
                <div className="font-bold">{issue.title}</div>
                <div>Status: {issue.status}</div>
                <div>Assignee: {issue.assignee}</div>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="tasks">
          <ul>
            {project.tasks.map((task) => (
              <li key={task.id} className="mb-2">
                <div className="font-bold">{task.title}</div>
                <div>Status: {task.status}</div>
                <div>Assignee: {task.assignee}</div>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDetail;