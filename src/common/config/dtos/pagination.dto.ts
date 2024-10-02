import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object (DTO) for pagination parameters.
 * 
 * This class is used to define the structure of pagination parameters
 * that can be passed to API endpoints. It includes optional properties
 * for `limit` and `offset` to control the number of items returned and
 * the starting point of the items, respectively.
 */
export class PaginationDTO {
    @ApiProperty({ description: 'The maximum number of items to return. Must be a positive number.', required: false })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @ApiProperty({ description: 'The number of items to skip before starting to collect the result set. Must be a non-negative number.', required: false })
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}