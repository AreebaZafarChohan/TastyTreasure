export type LiProps = {
  href: string;
  name: string;
};

type BlogDataHeadingAndPara = {
    heading: string;
    paragraph: string;
}

type SubBlogData = {
  sub_heading: string;
  sub_paragraph: string;
}

type Description = {
  desc_heading: string;
  desc_paragraph: string[];
};

type CookingProcess = {
  cooking_process_heading: string;
  cooking_process_paragraph: string;
}

type Conclusion = {
  conclusion_heading: string;
  conclusion_paragraph: string;
}

export type BlogDataProps = {
  id: number;
  category: string;
  image: string;
  title: string;
  date: string;
  main_paragraph: BlogDataHeadingAndPara;
  sub_sec_paragraph: SubBlogData;
  description: Description;
  ingredients: string[];
  cooking_process: CookingProcess[];
  conclusion: Conclusion;
};

export interface Comment {
    id: number;
    text: string;
    likes: number;
  }
  