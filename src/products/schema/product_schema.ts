import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Products extends Document {
    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    merchant_id: string;
    
    @Prop({ required: true })
    price: number;
    
    @Prop({ required: true,enum:['active','inactive'] ,default:'inactive'})
    status: string;

}

export const ProductsSchema = SchemaFactory.createForClass(Products);
