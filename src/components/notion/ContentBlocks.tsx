type RichText = {
  annotations: {
    bold: boolean;
    code: boolean;
    color: string;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  text: {
    content: string;
    link: {
      url: string;
    };
  };
}[];

type SpanTextProps = {
  richText: RichText;
  id: string;
};
const SpanText = ({ richText, id }: SpanTextProps) => (
  <>
    {richText.map(({ annotations, text }, i) => (
      <span
        key={id + i}
        className={[
          annotations.bold ? "font-bold" : "",
          annotations.code
            ? "bg-gray-100 p-1 font-mono text-sm rounded-md"
            : "",
          annotations.italic ? "italic" : "",
          annotations.strikethrough ? "line-through" : "",
          annotations.underline ? "underline" : "",
        ].join(" ")}
        style={
          annotations.color !== "default" ? { color: annotations.color } : {}
        }
      >
        {text.link ? (
          <a href={text.link.url} className="underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    ))}
  </>
);

type TextProps = {
  richText: RichText;
  id: string;
};
const Text = ({ richText, id }: TextProps) => {
  return (
    <p className="mb-4 text-gray-700">
      <SpanText richText={richText} id={id} />
    </p>
  );
};

type ListItemProps = {
  id: string;
  richText: RichText;
};
const ListItem = ({ richText, id }: ListItemProps) => {
  return (
    <li>
      <SpanText richText={richText} id={id} />
    </li>
  );
};

type HeadingProps = {
  richText: RichText;
  id: string;
};
const Heading1 = ({ richText, id }: HeadingProps) => (
  <h1 className="my-2 text-3xl font-bold tracking-tight text-black md:text-5xl">
    <SpanText richText={richText} id={id} />
  </h1>
);
const Heading2 = ({ richText, id }: HeadingProps) => (
  <h2 className="my-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
    <SpanText richText={richText} id={id} />
  </h2>
);
const Heading3 = ({ richText, id }: HeadingProps) => (
  <h3 className="my-2 text-lg font-bold tracking-tight text-black md:text-xl">
    <SpanText richText={richText} id={id} />
  </h3>
);

type ToDoProps = {
  id: string;
  value: {
    checked: boolean;
    richText: RichText;
  };
};
const ToDo = ({ id, value }: ToDoProps) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
        <SpanText richText={value.richText} id={id} />
      </label>
    </div>
  );
};

type ToggleProps = {
  value: {
    richText: RichText;
    children: Array<
      | {
          type: "paragraph";
          id: string;
          paragraph: {
            richText: RichText;
          };
        }
      | {
          type: null;
        }
    >;
  };
};
const Toggle = ({ value }: ToggleProps) => {
  return (
    <details>
      <summary className="cursor-pointer">
        {value.richText[0].text.content}
      </summary>
      {value.children?.map((block) => {
        if (block.type === "paragraph") {
          return (
            <Text
              key={block.id}
              richText={block.paragraph.richText}
              id={block.id}
            />
          );
        }
      })}
    </details>
  );
};

type ImageProps = {
  richText: RichText[];
  external: {
    url: string;
  };
  file: {
    url: string;
  };
  type: "external" | "file";
};
const Image = ({ external, file, type }: ImageProps) => {
  const imageSrc = type === "external" ? external.url : file.url;
  const caption = ""; // FIXME

  return (
    <figure>
      <img alt={caption} src={imageSrc} />
      {caption && <figcaption className="mt-2">{caption}</figcaption>}
    </figure>
  );
};

type RenderBlocksProps = {
  blocks: Array<
    | {
        id: string;
        type: "heading_1";
        heading_1: { richText: RichText };
      }
    | {
        id: string;
        type: "heading_2";
        heading_2: { richText: RichText };
      }
    | {
        id: string;
        type: "heading_3";
        heading_3: { richText: RichText };
      }
    | {
        id: string;
        type: "paragraph";
        paragraph: { richText: RichText };
      }
    | {
        id: string;
        type: "bulleted_list_item";
        bulleted_list_item: { richText: RichText };
      }
    | {
        id: string;
        type: "numbered_list_item";
        numbered_list_item: { richText: RichText };
      }
    | {
        id: string;
        type: "to_do";
        to_do: { checked: boolean; richText: RichText };
      }
    | {
        id: string;
        type: "toggle";
        toggle: {
          richText: RichText;
          children: Array<
            | {
                type: "paragraph";
                id: string;
                paragraph: {
                  richText: RichText;
                };
              }
            | {
                type: null;
              }
          >;
        };
      }
    | {
        id: string;
        type: "quote";
        quote: { richText: RichText };
      }
    | {
        id: string;
        type: "divider";
        divider: null;
      }
    | {
        id: string;
        type: "image";
        image: ImageProps;
      }
    | {
        id: string;
        type: "unsupported";
        unsupported: null;
      }
  >;
};
export const RenderBlocks = ({ blocks }: RenderBlocksProps) => (
  <>
    {blocks.map((block) => {
      switch (block.type) {
        case "divider":
          return <hr className="w-full border" />;

        case "paragraph":
          return <Text richText={block.paragraph.richText} id={block.id} />;

        case "heading_1":
          return <Heading1 richText={block.heading_1.richText} id={block.id} />;

        case "heading_2":
          return <Heading2 richText={block.heading_2.richText} id={block.id} />;

        case "heading_3":
          return <Heading3 richText={block.heading_3.richText} id={block.id} />;

        case "quote":
          return (
            <blockquote className="border-l-2 border-l-black pl-4">
              <SpanText id={block.id} richText={block.quote.richText} />
            </blockquote>
          );

        case "bulleted_list_item":
          return (
            <ListItem
              richText={block.bulleted_list_item.richText}
              id={block.id}
            />
          );
        case "numbered_list_item":
          return (
            <ListItem
              richText={block.numbered_list_item.richText}
              id={block.id}
            />
          );

        case "to_do":
          return <ToDo value={block.to_do} id={block.id} />;

        case "toggle":
          return <Toggle value={block.toggle} />;

        case "image":
          return <Image {...block.image} />;

        default:
          return `Unsupported block (${block.type})`;
      }
    })}
  </>
);
