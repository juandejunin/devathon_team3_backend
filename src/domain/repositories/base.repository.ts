export interface BaseRepository<T> {
  save(entity: T): Promise<void>;
  getAll(): Promise<T[]>;
  getById(entityId: string): Promise<T>;
  getPaginated(page: number, pageSize: number): Promise<T[]>;
}
