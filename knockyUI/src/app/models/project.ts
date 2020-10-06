import { TestGroupModel } from './testGroup';


export interface ProjectModel {
  id: number;
  projectName: string;
  dateCreated: Date;
  testGroups: TestGroupModel[];
}
