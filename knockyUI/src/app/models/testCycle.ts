import { ProjectModel } from './project';

export interface TestCycleModel {
  id: number;
  CycleHash: string;
  IsComplete: boolean;
  description: string;
  dateCompleted: Date;
  projectId: number;
  project: ProjectModel;
}
