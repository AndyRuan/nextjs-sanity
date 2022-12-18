
import  ImageUrlBuilder  from "@sanity/image-url";
import { client } from "./sanity.cliet";




export default function urlFor(source:any) {
  return ImageUrlBuilder(client).image(source)
}
