import { client } from "@/lib/sanity.cliet"
import urlFor from "@/lib/urlFor"
import { Post } from "@/typing"
import { groq } from "next-sanity"

import {PortableText} from  '@portabletext/react'
import Image from "next/image"
import { RichTextComponents } from "@/components/RichTextComponents"

type Props = {
  params: {
    slug: string
  }
}
export const revalidate = 60;

export async function generateStaticParams(){
  const query = groq`*[_type=='post']
  {
    slug
  }`
  const slugs: Post[] = await client.fetch(query);
  const sluginRoute = slugs.map(slug => slug.slug.current)
  return sluginRoute.map(slug => ({
    slug:slug,

  }))
}

async function Post({ params: { slug } }: Props) {

  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `

  const post: Post = await client.fetch(query, { slug })
  console.log(post)


  return (

    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#f7ab0a] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image className="object-cover object-center mx-auto "
              src={urlFor(post.mainImage).url()}

              alt={post.author.name}
              fill></Image>
          </div>


          <section className="p-5 bg-[#f7ab01]  w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>{new Date(post._createdAt).toLocaleDateString('en-US', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image className="rounded-full aspect-square"
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}

                />

                <h3>{post.author.name}</h3>
                <div>{/** AUtho Bio */}</div>
              </div>
            </div>


                <div>
                  <h2 className="italic py-10">{post.description}</h2>
                  <div className="flex items-center justify-end m-auto space-x-2">
                    {post.categories.map(cate=>(
                      <p key={cate._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                        {cate.title}
                      </p>

                    ))}
                  </div>
                </div>
          </section>
        </div>
      </section>
                      
      <PortableText components={RichTextComponents}  value={post.body}></PortableText>

    </article>
  )
}

export default Post
