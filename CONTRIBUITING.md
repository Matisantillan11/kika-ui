Thanks for showing interest to contribute to Chakra UI 🖤, you rock!

Here's a few guidelines that should help you as you
prepare your contribution.

# Setup the Project

The following steps will get you up and running to contribute to Kika UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/Matisantillan11/kika-ui))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/kika-ui.git
cd kika-ui
```

3. Setup all the dependencies and packages by running `yarn`. This
   command will install dependencies.

### Commands

**`yarn `**: bootstraps the entire project, symlinks all dependencies for
cross-component development and builds all components.

**`yarn dev`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`yarn build`**: run build for all component packages.


## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the kika-ui repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/button-component` or `docs/button-primary`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/Matisantillan11/kika-ui/blob/main/CONTRIBUTING.md#commit-convention).
  
