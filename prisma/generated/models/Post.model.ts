import { IsInt, IsDefined, IsDate, IsString, IsOptional, IsBoolean } from "class-validator";
import { User } from "./";

export class Post {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    @IsString()
    title!: string;

    @IsOptional()
    @IsString()
    body?: string;

    @IsDefined()
    @IsBoolean()
    published!: boolean;

    @IsDefined()
    author!: User;

    @IsDefined()
    @IsInt()
    authorId!: number;
}
