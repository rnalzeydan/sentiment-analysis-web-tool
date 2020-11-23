# Sentiment Analysis Web Tool

Sentiment Analysis tool allows users to run Natural Language Processing (NLP) on provided text or articles found on other websites. This tool will help on classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

The project uses Natural Language Processing via a Sentiment Analysis API developed by [MeaningCloud](https://www.meaningcloud.com/).

### Project Motivation
The motive of this project is to have a taste of the environment and tools I will most likely come across in a front end role. My focus was on understanding the role every tool and technology is playing in the overall architecture.

### The goal of this project is to practise:
* Setting up Webpack
* Webpack Loaders and Plugins
* Sass styles
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external URLs
* Unit testing with Jest


## Live link of the project
```bash

```

## Getting Started Locally
### Development Setup
#### Installing Node and NPM
First, this project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

#### Installing project dependencies
The project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root directory of this repository. After cloning, open your terminal and run:
```bash
npm install
```
This will install all of the required packages.

#### Running The Frontend in Dev Mode
In order to run and open the project in development mode use `npm start-dev`. You can change the script in the `package.json` file. 
```bash
npm run start-dev
```

#### Running the server:
##### Get meaningCloud API Key
To make a sucsseful request you need to get your meaningCloud API key, so create an account in meaningCloud, after that create a new file named `.env` in the root directory and add this line:
```
API_KEY = <Your meaningCloud API key>
```
##### Run the express server:
To run the express server (server.js) located in the `src/server` directory, open new terminal and run:
```bash
npm start
```
