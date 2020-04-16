export interface Question<T> {
  id: number;
  text: string;
  type: T;
  options: any[];
}
