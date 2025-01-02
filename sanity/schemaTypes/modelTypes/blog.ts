import { defineField } from "sanity";

export const blogsType = {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "Category",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      }
    },
    {
      name: "main_paragraph",
      title: "Main Paragraph",
      type: "object",
      fields: [
        defineField(
          {
            name: "heading",
            title: 'Heading',
            type: 'string',
          }
        ),
        defineField(
          {
            name: "paragraph",
            title: 'Paragraph',
            type: 'string',
          }
        ),
      ],
    },

    {
      name: "sub_sec_paragraph",
      title: "Sub Paragraph",
      type: "object",
      fields: [
        defineField(
          {
            name: "sub_heading",
            title: 'Sub Heading',
            type: 'string',
          }
        ),
        defineField(
          {
            name: "sub_paragraph",
            title: 'Sub Paragraph',
            type: 'string',
          }
        ),
      ],
    },

    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        defineField(
          {
            name: "desc_heading",
            title: 'Desc Heading',
            type: 'string',
          }
        ),
        defineField(
          {
            name: "desc_paragraph",
            title: 'Desc Paragraph',
            type: 'array',
            of : [{ type: "string"}],
          }),
      ],
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
   {
    name: "cooking_process",
    title: "Cooking Process",
    type: 'array',
    of : [
      {
        type: "object",
        fields: [
          defineField(
            {
              name: "cooking_process_heading",
              title: 'Cooking Process Heading',
              type: 'string',
            }
          ),
          defineField(
            {
              name: "cooking_process_paragraph",
              title: 'Cooking Process Paragraph',
              type: 'string',
            }),
        ]
      }
    ]
   },
   {
    name : "conclusion",
    title: 'Conclusion',
    type: "object",
      fields: [
        defineField(
          {
            name: "conclusion_heading",
            title: 'Conclusion Heading',
            type: 'string',
          }
        ),
        defineField(
          {
            name: "conclusion_paragraph",
            title: 'Conclusion Paragraph',
            type: 'string',
          },
        ),
      ],
   },
  ],
};
