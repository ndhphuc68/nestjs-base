import { BaseRepositoryInterface } from '../repository/base.interface.repository';
import { BaseEntity } from '../entity/base.entity';
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export abstract class BaseAbstractService<T extends BaseEntity>
  implements BaseRepositoryInterface<T>
{
  protected repository: BaseRepositoryInterface<T>;

  protected constructor(repository: BaseRepositoryInterface<T>) {
    this.repository = repository;
  }

  //create not save
  async create(create_dto: T | any): Promise<T> {
    return await this.repository.create(create_dto);
  }

  //save many data
  async createMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.repository.saveMany(data);
  }

  //save data
  async save(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }

  async saveMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.repository.saveMany(data);
  }

  async findOneById(id: number): Promise<T> {
    return this.repository.findOneById(id);
  }

  async findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return this.repository.findByCondition(filterCondition);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.findAll(options);
  }

  async remove(data: T): Promise<T> {
    return this.repository.remove(data);
  }

  async findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return this.repository.findWithRelations(relations);
  }

  async preload(entityLike: DeepPartial<T>): Promise<T> {
    return this.repository.preload(entityLike);
  }

  async findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(options);
  }
}
