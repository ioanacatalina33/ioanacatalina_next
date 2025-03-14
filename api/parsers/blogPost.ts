import { BlogPost, BlogPostCard } from "types";

export function parseToBlogPost(post: any): BlogPost {
  const postCard = parseToBlogPostCard(post);
  return {
    ...postCard,
    fields: {
      ...postCard.fields,
      content: post.fields.content,
    },
  };
}

export function parseToBlogPostCard(post: any): BlogPostCard {
  return {
    sys: {
      id: post.sys.id,
    },
    fields: {
      title: post.fields.title,
      slug: post.fields.slug,
      summary: post.fields.summary,
      date: post.fields.date,
      headerPhoto: post.fields.headerPhoto,
      keywords: Object.values(post.fields.keywords).map(
        (k: any) => k.fields.name,
      ),
      author: {
        sys: {
          id: post.fields.author.sys.id,
        },
        fields: {
          name: post.fields.author.fields.name,
          avatar: {
            sys: {
              id: post.fields.author.fields.avatar.sys.id,
            },
            fields: {
              title: post.fields.author.fields.avatar.fields.title,
              description: post.fields.author.fields.avatar.fields.description,
              file: {
                url: post.fields.author.fields.avatar.fields.file.url,
                details: {
                  image: {
                    width:
                      post.fields.author.fields.avatar.fields.file.details.image
                        .width,
                    height:
                      post.fields.author.fields.avatar.fields.file.details.image
                        .height,
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}
