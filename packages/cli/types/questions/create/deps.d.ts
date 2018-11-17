import { Questions } from "inquirer";
export declare type Deps = string[];
export interface DependencyAnswers {
    ui: string;
    interactions: Deps;
    sideEffects: Deps;
    static: boolean;
    history: Deps;
}
declare const questions: Questions<DependencyAnswers>;
export default questions;
