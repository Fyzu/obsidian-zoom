declare namespace jest {
  interface Matchers<R> {
    toEqualEditorState(s: string): Promise<R>;
    toEqualEditorState(s: string[]): Promise<R>;
  }
}

interface IPosition {
  line: number;
  ch: number;
}

interface ISelection {
  from: IPosition;
  to: IPosition;
}

interface IState {
  hidden: number[];
  folds: number[];
  selections: ISelection[];
  value: string;
}

declare function applyState(state: string): Promise<void>;
declare function applyState(state: string[]): Promise<void>;
declare function parseState(state: string): Promise<IState>;
declare function parseState(state: string[]): Promise<IState>;
declare function simulateKeydown(keys: string): Promise<void>;
declare function executeCommandById(keys: string): Promise<void>;
declare function getCurrentState(): Promise<IState>;
