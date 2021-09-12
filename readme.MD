#### To create new cypress project

```shell script
yarn init 
yarn add cypress --dev
yarn run cypress open
```

## To run tests in specific folder
```shell
yarn 
yarn start:local:infrastucture
```

## Flow
```
1. Update infratsructure
2. Github actions for infrastructure - releases the npm version
3. Github Actions - Re-release all the other apps with the new infrastructure version - main, workflows, teams,
4. Run infrastructure tests - in folder infratsructure
```