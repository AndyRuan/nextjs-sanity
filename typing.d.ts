import { Block, Slug,Image } from "@sanity/types/dist/dts";
import category from "./schemas/category";



type Base  ={
  _createdAt:string,
  _id:string,
  _rev:string,
  _type:string,
  _updateAt:string
}


interface  Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage:Image;
  slug:Slug;
  title:string,
  description:string
}
interface Category extends Base{
  title?: string;
  description?: string;
}



interface Author extends Base{
  bio: Block[],
  image:Image,
  name:string,
  slug:Slug
}


