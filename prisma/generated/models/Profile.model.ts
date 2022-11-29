import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import { User } from "./";

export class Profile {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsDefined()
    user!: User;

    @IsDefined()
    @IsInt()
    userId!: number;
}
