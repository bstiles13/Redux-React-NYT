# NYT-Redux-React-Search

Single-page app that utilizes Redux and React to query and display articles from New York Times based on user searches. Node, Express and MongoDB are used in conjunction so that users can save articles to read later.

### Overview

1. The <b>Search</b> includes three parameters:
  * `Keywords` (required)
  
  * `Start Date` (optional)
  
  * `End Date` (optional)
  
2. Click <b>Search</b> to display new results. New results will replace any articles in the database (and on the webpage) that are not favorited, or "starred".  

2. Your <b>Search Results</b> will have the following:

   * `headline` (Title of the stored article from nytimes.com)

   * `snippet` (Summary of the stored article from nytimes.com)

   * `date` (Publish date of the stored article from nytimes.com)
   
   * `url` (Click the article Title to view the New York Times url and full article in a new tab)

   * `favorite` (Click the star icon on the left side of a search result to add the article to your user favorites and remove it from the queue)
   
   * `delete` (Click the trashcan icon on the right side of a search result to delete the article from the results list)


4. React Layout
     ```
     * **App** - contains the Home-container div that holds the main layout and navigation.

     * **Search** - queries the NYT API for articles.

     * **Results** - displays the articles that were searched and stored in the database. Gives the user the ability to save (and delete) an article to their Favorite Articles.
     
     * **Favorites** - displays the Favorited Articles that were "starred" in any previous searches
     ```
