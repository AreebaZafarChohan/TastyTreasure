export type LiProps = {
  href: string;
  name: string;
};

type BlogDataHeadingAndPara = {
    heading: string;
    para: string;
}

export type BlogDataProps = {
  id: number;
  category: string;
  image: string;
  title: string;
  date: string;
  main: BlogDataHeadingAndPara;
  sub: BlogDataHeadingAndPara;
  description: {
    heading: string;
    para: string[];
  };
  ingredients: string[];
  cookingProcess: BlogDataHeadingAndPara[];
  conclusion: BlogDataHeadingAndPara;
};

export interface Comment {
    id: number;
    text: string;
    likes: number;
  }
  