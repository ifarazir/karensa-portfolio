import { projectsData, type Project } from "@/data/projects";

export type FlatProject = Project & {
  /** translation key for the year group, e.g. "ongoing" or "1404" */
  yearKey: string;
  yearIndex: number;
  /** URL-safe identifier derived from the English title */
  slug: string;
};

/** Turn an English project title into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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
          slug: slugify(project.title.en),
        }))
    );
}

/** The curated set highlighted in the landing hero/work section. */
export function getFeaturedProjects(limit = 6): FlatProject[] {
  return getAllProjects().slice(0, limit);
}

/** Look up a single project by its slug (used by the case study page). */
export function getProjectBySlug(slug: string): FlatProject | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

/** Total number of delivered projects, used in the stats section. */
export function getProjectCount(): number {
  return projectsData.reduce((sum, year) => sum + year.projects.length, 0);
}
