import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsBoolean, Length, IsOptional } from "class-validator";

@InputType({ isAbstract:true })
@ObjectType()
@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    @Field( type => Number)
    id:number

    @Field( type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;

    @Field( type => Boolean,  { defaultValue: true})
    @Column({ default : true })
    @IsOptional()
    @IsBoolean()
    isVegan: string;

    @Field( type => String)
    @Column()
    @IsString()
    address: string;

    @Field( type => String,  { defaultValue: ""})
    @Column({ default : "" })
    @IsOptional()
    @IsString()
    ownersName: string;

    @Field( type => String, { defaultValue: ""})
    @Column({ default : "" })
    @IsOptional()
    @IsString()
    categoryName: string;
}