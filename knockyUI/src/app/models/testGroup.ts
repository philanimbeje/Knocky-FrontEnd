import { ProjectModel } from './project';
import { TestCaseModel } from './testCase';

export interface TestGroupModel {
  id: number;
  groupName: string;
  description: string;
  projectId: number;
  dateCreated: Date;
  project: ProjectModel;
  testCases: TestCaseModel[];

}
