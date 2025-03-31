import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Merchants extends Document {
@Prop({ required: true })
country_code:number

@Prop({ required: true })
merchant_name:string

@Prop({ required: true })
admin_id:number;
}
export const merchantSchema = SchemaFactory.createForClass(Merchants);