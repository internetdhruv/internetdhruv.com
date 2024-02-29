import type { CollectionEntry } from "astro:content";

export const sortMDByDate = (posts: Array<CollectionEntry<"blog">>) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}

