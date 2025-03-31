import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps:true})
export class countries extends Document{
    @Prop({required:true})
    code:number;
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    continent_name:string;
}
export const CountrySchema = SchemaFactory.createForClass(countries);