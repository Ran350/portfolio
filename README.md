<div align="center">

# [ran350.github.io](https://ran350.github.io/)

![Deploy](https://github.com/Ran350/ran350.github.io/workflows/Deploy/badge.svg)
![Code Check](https://github.com/Ran350/ran350.github.io/workflows/Code%20Check/badge.svg)


</div>

## Develop

### Requirements

- [Node.js](https://nodejs.org/) - V~14
- [yarn](https://yarnpkg.com/) - V~1

### Preparation
```sh
git clone <this repo>
cd ran350.github.io
yarn install
```

### Commands

See `scripts` section of [package.json](./package.json)

- `yarn dev` - runs in developing mode
- `yarn build && yarn export` - exports HTML files and others in `./out`
- `yarn run check` - checks with code formatting with Prettier, type checking with tsc, linting with ESLint

## Continuos Integrations (CI)

See [.github/workflows/code-check.yml](./.github/workflows/code-check.yml)

This workflows runs `yarn run check` in pushing/PR on `main` branch.

## Continuous Delivery (CD)

See [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

This workflows runs `yarn install && yarn build && yarn export` in pushing/PR on `main` branch, then deploys using GitHub Pages.

## TODO
See [issue](https://github.com/Ran350/ran350.github.io/issues).
