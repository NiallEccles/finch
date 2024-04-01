import Dexie, { Table } from 'dexie';

export interface Directory {
  id?: number;
  key: string;
  value: FileSystemDirectoryHandle;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  directory!: Table<Directory>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      directory: '++id, key, value' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();