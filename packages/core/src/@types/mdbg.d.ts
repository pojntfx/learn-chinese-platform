declare module "mdbg" {
  export function getByPinyin(pinyin: string): Promise<IHanzi[]>;
  export function getByHanzi(hanzi: string): Promise<IHanzi>;
}

interface IHanzi {
  traditional: string;
  simplified: string;
  definitions: any;
}
