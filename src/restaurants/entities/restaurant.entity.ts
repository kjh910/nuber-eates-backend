import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Restaurant {

    @Field( type => String)
    name: string;

    @Field( type => Boolean)
    isGood: string;

    @Field( type => String)
    address: string;

    @Field( type => String)
    ownerName: string;
}