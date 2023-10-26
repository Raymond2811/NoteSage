# NoteSage [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description 

I created this website to assist in managing daily tasks and taking notes efficiently. It serves as a straightforward note-taking app where users can input a title and description. During the development process, I encountered a few challenges. The first was getting the routes to function correctly. Initially, it was a bit confusing, and I struggled to make them work. I received help from both my friend and tutor to create the proper paths.Through this collaboration, I realized that the solution was simpler than I initially thought, and I had been overcomplicating things. To resolve the issue with notes.html not appearing on the website, I adopted a straightforward approach for the GET request.

I faced another issue where my router.get wasn't working as expected, and it took me a while to figure out the problem. Initially, I thought that the order of routes in my server.js file didn't matter, so I spent a lot of time trying to debug my code and make it work. I reviewed my server.js file multiple times, but everything seemed fine. Then, I recalled something from class about the order of route declarations. I decided to switch the order of my route definitions, placing apiRoutes on top of htmlRoutes. To my surprise, this simple change made everything work perfectly. It turned out that these two lines of code and their order were the key to resolving the issue that had frustrated me for hours. 

## Usage

This app is designed with ease of use in mind. Saving your notes is as simple as clicking the top right corner of the screen, and if you ever need to delete a note, just click the trash can icon. 

## Credits

Josue, https://github.com/JosueHernand
      
## License
  
This project is licensed under the terms of the MIT License 

