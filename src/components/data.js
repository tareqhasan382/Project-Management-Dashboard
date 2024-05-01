// Mock projects data
export const projects = [
  {
    id: 1,
    name: "Project A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    teamMembers: ["John Doe", "Jane Smith", "Michael Johnson"],
    tasks: [
      {
        id: 1,
        title: "Task 1",
        description: "Complete task 1 by end of the week.",
        status: "In Progress",
        dueDate: "2024-05-05",
        assignedTo: "John Doe",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Review documentation.",
        status: "To Do",
        dueDate: "2024-05-10",
        assignedTo: "Jane Smith",
      },
      // Add more tasks as needed
    ],
  },
  {
    id: 2,
    name: "Project B",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    teamMembers: ["Alice Johnson", "Bob Brown", "Eva Davis"],
    tasks: [
      {
        id: 3,
        title: "Task 3",
        description: "Prepare presentation slides.",
        status: "Done",
        dueDate: "2024-04-25",
        assignedTo: "Bob Brown",
      },
      // Add more tasks as needed
    ],
  },
  // Add more projects as needed
];
