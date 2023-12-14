export type BlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
};