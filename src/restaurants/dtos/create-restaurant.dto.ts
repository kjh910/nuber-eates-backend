import { InputType, Field, OmitType } from "@nestjs/graphql";
import { Length, IsString, IsBoolean } from "class-validator";
import { Restaurant } from "../entities/restaurant.entity";

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant,['id']){
    
}