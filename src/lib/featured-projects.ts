import { projectsData, type Project } from "@/data/projects";

export type FlatProject = Project & {
  /** translation key for the year group, e.g. "ongoing" or "1404" */
  yearKey: string;
  yearIndex: number;
};

/** All projects flattened and ordered (most recent first). */
export function getAllProjects(): FlatProject[] {
  return projectsData
    .slice()
    .sort((a, b) => a.index - b.index)
    .flatMap((year) =>
      year.projects
        .slice()
        .sort((a, b) => a.index - b.index)
        .map((project) => ({
          ...project,
          yearKey: year.title,
          yearIndex: year.index,
        }))
    );
}

/** The curated set highlighted in the landing hero/work section. */
export function getFeaturedProjects(limit = 6): FlatProject[] {
  return getAllProjects().slice(0, limit);
}

/** Total number of delivered projects, used in the stats section. */
export function getProjectCount(): number {
  return projectsData.reduce((sum, year) => sum + year.projects.length, 0);
}
