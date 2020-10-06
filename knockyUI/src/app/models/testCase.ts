import { TestGroupModel } from './testGroup';

export interface TestCaseModel {
  id: number;
  testCaseDescription: string;
  expectedResults: string;
  testGroupId: number;
  dateCreated: Date;
  testGroup: TestGroupModel;

}
