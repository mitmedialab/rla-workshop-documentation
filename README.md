# Phase 2 Website

## Technologies

The website is a very standard React/Express web app (no database). All data and files were either stored in Google Drive or as simple JSON files on the server. An improvement to be made would be using the Google Drive API (as opposed to manually generating folder and document links) and using a simple key/value database in place of JSON. 

The code is divided into server and client portions, both of which are in Typescript. Libraries were used to help perform a variety of tasks, from rendering Markdown to automating the build process.

Effort was made to make the page responsive and mobile-friendly by customizing the layout of tiles and buttons based on the screen size. Further user experience improvement could be made by giving each page and modal a URL that could be directly linked to, and so that the back button works as expected.

## Pages
### Portfolios
![](https://d2mxuefqeaa7sj.cloudfront.net/s_130A22BC00CE8474CA7C9A128DA377280F1585C1A288B34A349542A310CE7A37_1518705789148_image.png)



![](https://d2mxuefqeaa7sj.cloudfront.net/s_130A22BC00CE8474CA7C9A128DA377280F1585C1A288B34A349542A310CE7A37_1518706013625_image.png)


This page is meant to give a quick overview of what all the teams are working on, giving teams control over the content but not the burden of creating it.

The display consists of a layout of clickable tiles with team names and one-line descriptions. Clicking a tile displays a page with a full description, a slideshow of team photos, and a link to the team’s folder. There is also an edit button which toggles textboxes to edit the descriptions in Markdown format with real-time rendering. This was accomplished by having a textbox that triggered on change both sending the text to the backend to save and re-rendering the display of the description. On the backend, these are simply stored as text files on the server. These were originally populated by the workshop facilitators and the teams were told they are free to edit them as they wish.

### Documentation
![](https://d2mxuefqeaa7sj.cloudfront.net/s_130A22BC00CE8474CA7C9A128DA377280F1585C1A288B34A349542A310CE7A37_1518705780570_image.png)


This page contains several buttons linking to Google Drive folders and files relevant to the workshop. This can be quickly edited during the workshop to give easy access to new folders and files as the need arises.

This page also contains a link to a folder for each team. In order to streamline the onboarding process for teams, they can create their own folder by submitting their team name, which immediately creates a new empty folder for them. On the backend, this is supported by having enough (i.e. 20) folders premade and simply assigning a new name to a folder as the name is submitted. This mapping is stored as a JSON file on the server, and this JSON file serves as the source of truth for the list of teams in the workshop.

(add API potential improvement)

### Schedule
![](https://d2mxuefqeaa7sj.cloudfront.net/s_130A22BC00CE8474CA7C9A128DA377280F1585C1A288B34A349542A310CE7A37_1518705798506_image.png)


This page consists of an accordian listing the events for each day in a table. The current day is open on load and is marked by a “Today” label to help with navigation. Information for the schedule is directly written in the code, but could potentially be dynamically loaded from elsewhere (e.g. Google sheet) with additional work.

### Office Hours
![](https://d2mxuefqeaa7sj.cloudfront.net/s_130A22BC00CE8474CA7C9A128DA377280F1585C1A288B34A349542A310CE7A37_1518706128099_image.png)


Coordination of mentors and hours were done in a Google spreadsheet that ultimately also became the interface for signing up for the office hours. This page simply hosts an iframe that points to that Google sheet.

## Deployment

The app was hosted on a server in the form of a DigitalOcean droplet with 1 core and 1 GB of memory. The source code was synced via Github and run in a node process using the `forever` package. The URL `rlawork.shop` was acquired and linked to the server using Namecheap.
