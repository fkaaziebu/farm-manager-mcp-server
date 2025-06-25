export interface ToolsInterface<T> {
  name: string;
  description: string;
  input: T;
  fn: (input: T) => Promise<ToolOutputInterface>;
}

interface ToolOutputInterface {
  content: {
    type: 'text';
    text: string;
  }[];
}
