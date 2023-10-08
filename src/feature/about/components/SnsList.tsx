import { accounts } from "../store/about";

export const SnsList = () => (
  <div className="w-full flex justify-center">
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
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  </div>
);
