import Dexie, { Table } from 'dexie';

export interface File {
  id?: number;
  key: string;
  value: FileSystemFileHandle | FileSystemDirectoryHandle;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  file!: Table<File>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      file: '++id, key, value' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();