import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps:true})
export class User extends Document{
    @Prop({required:true})
    full_name:string;

    @Prop({required:true})
    country_code:string;
}
export const UserSchema = SchemaFactory.createForClass(User);