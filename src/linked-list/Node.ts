export interface INode {
  value: any;
  next: INode | null;
}

export class Node implements INode {
  public value: any;
  public next: INode | null;

  constructor(value: any, next: INode | null = null) {
    this.value = value;
    this.next = next;
  }
}
