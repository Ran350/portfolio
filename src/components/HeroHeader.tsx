import { accounts } from "../const/about";

export const HeroHeader = () => (
  <div>
    <div className="bg-aiiro">
      <canvas width={400} height={400} />
    </div>

    <div className="mt-8 w-full flex justify-center">
      <div className="flex gap-6">
        {accounts.map((account) => (
          <a
            key={account.service}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1"
          >
            <img
              src={account.image.path}
              alt={account.image.alt}
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>
    </div>
  </div>
);
