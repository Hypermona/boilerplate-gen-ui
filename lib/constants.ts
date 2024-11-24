export const FORM_FIELDS = [
  {
    label: "Project Name",
    type: "text" as const,
    name: "name" as const,
    placeholder: "my-awesome-project",
    className: "border-2",
  },
  {
    type: "select" as const,
    label: "Frontend Framework",
    name: "frontend" as const,
    className: "border-2",
    options: [
      { label: "React", value: "react", type: "web" },
      { label: "Vue", value: "vue", type: "web" },
      { label: "Svelte", value: "svelte", type: "web" },
      { label: "React Native", value: "react-native", type: "mobile" },
    ],
  },
  {
    type: "select" as const,
    label: "Backend Framework",
    name: "backend" as const,
    className: "border-2",
    options: [{ label: "Express", value: "express", type: "node" }],
  },
  {
    type: "select" as const,
    label: "Database",
    name: "db" as const,
    className: "border-2",
    options: [
      { label: "MongoDB", value: "mongoDB", type: "noSql" },
      { label: "MySQL", value: "mysql", type: "sql" },
      { label: "PostgreSQL", value: "postgresql", type: "sql" },
    ],
  },
  {
    label: "Docker Container",
    type: "switch" as const,
    name: "container" as const,
    show: (value: any) => value === "web",
  },
  {
    label: "Docker Compose",
    type: "switch" as const,
    name: "container" as const,
    show: (value: any) => !!value,
  },
];
