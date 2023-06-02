type Props = {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  description?: string;
  href: string;
  tags: string[];
};

export const Card = ({ title, image, description, tags, href }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-border rounded-lg h-auto transition hover:bg-background-dark w-72"
  >
    <img
      src={image.url}
      alt={image.alt}
      loading="lazy"
      className="rounded-t-lg w-full h-1/2 object-cover"
    />

    <div className="p-4 flex flex-col gap-2">
      <h2 className="font-semibold">{title}</h2>
      {description && <p className="text-sm">{description}</p>}
      <p className="text-xs text-blue-400 flex gap-2">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
    </div>
  </a>
);
