import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Order extends Document {
    @Prop({ required: true })
    user_id: number;
    @Prop({ required: true })
    status: string;

}
export const orderSchema = SchemaFactory.createForClass(Order)