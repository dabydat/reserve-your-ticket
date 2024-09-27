import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class SqlDebugService {
  async getRawSql<T>(repository: Repository<T>, queryBuilderCallback: (qb: SelectQueryBuilder<T>) => SelectQueryBuilder<T>): Promise<void> {
    const queryBuilder = queryBuilderCallback(repository.createQueryBuilder());
    const [query, parameters] = queryBuilder.getQueryAndParameters();
    console.log('Raw SQL Query:', query);
    console.log('Parameters:', parameters);
  }
}