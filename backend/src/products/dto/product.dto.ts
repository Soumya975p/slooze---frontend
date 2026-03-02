import { InputType, Field, Float, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber, IsOptional, Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  sku: string;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  stock: number;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  price: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  discount?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  purchase?: number;
}

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
