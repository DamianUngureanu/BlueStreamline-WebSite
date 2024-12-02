import { FormulaStudentTests } from "@/enums/formula-student-tests";
import { TestType } from "@/enums/test-types";

export type AboutFormulaStudentType = {
  titleEN: string;
  titleRO: string;
  messageEN: string;
  messageRO: string;
  tests: {
    id:FormulaStudentTests;
    titleEN: string;
    titleRO: string;
    value: number;
    color:string;
    messageEN: string;
    messageRO: string;
    type: TestType;
  }[];
};
