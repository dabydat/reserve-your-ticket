import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
/**
 * Service for debugging SQL queries generated by TypeORM.
 */
export class SqlDebugService {
  /**
   * Executes a callback function to build a raw SQL query using a TypeORM repository,
   * then logs the generated SQL query and its parameters.
   *
   * @template T - The entity type for the repository.
   * @param {Repository<T>} repository - The TypeORM repository to use for creating the query builder.
   * @param {(qb: SelectQueryBuilder<T>) => SelectQueryBuilder<T>} queryBuilderCallback - A callback function that receives a query builder and returns a modified query builder.
   * @returns {Promise<void>} - A promise that resolves when the query and parameters have been logged.
   */
  async getRawSql<T>(repository: Repository<T>, queryBuilderCallback: (qb: SelectQueryBuilder<T>) => SelectQueryBuilder<T>): Promise<void> {
    const queryBuilder = queryBuilderCallback(repository.createQueryBuilder());
    const [query, parameters] = queryBuilder.getQueryAndParameters();
    console.log('Raw SQL Query:', query);
    console.log('Parameters:', parameters);
  }
}