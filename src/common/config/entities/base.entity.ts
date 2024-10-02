import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

/**
 * Abstract base entity class that includes common properties for all entities.
 * 
 * @property {number} id - The primary key: id.
 * @property {boolean} isActive - A boolean to identify if a row is active.
 * @property {Date} createdAt - The creation date of the row.
 * @property {Date} updatedAt - The update date of the row.
 * @property {Date} deletedAt - The deletion date of the row.
 */
export abstract class BaseEntity {
    @ApiProperty({ description: 'The primary key: id.'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'A boolean to identify if a row is active.' })
    @Column('boolean', { default: true })
    isActive: boolean;

    @ApiProperty({ description: 'The creation date of the row.' })
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @ApiProperty({ description: 'The update date of the row.' })
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @ApiProperty({ description: 'The deletion date of the row.', name: 'deleted_at' })
    @DeleteDateColumn({ type: 'timestamp', default: null })
    deletedAt: Date;
}