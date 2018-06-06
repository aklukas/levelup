import { Project } from './project';

export interface Developer {
  id: number;
  name: string;
  repo: string;
  projects: Project[];
}
