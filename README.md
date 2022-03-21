# Image Search Coding Test

This is an application that has been developed as a coding test as a job application to HiPeople. The application is a very simple image search utilizing _Unsplash_ API for images. It was developed using Typescript with React.

# Usage

The usage of the application is very simple: There is a search bar on the screen where the user types what kind of images they are looking for. Whenever the user types their terms for search, the application automatically fires a request to the API to search the images, after a small debounce provided by _lodash_'s library.

To prevent an extremely heavy response that would potentially crash the application, there is a pagination system implemented. Every page contains 10 images and the user is free to keep changing pages until they find the image they were searching for.
# Future improvements

Given the short timeframe for this application (just a couple of hours), there were a few aspects that could use improvement: 

- **Better UI**. While the current UI is serviceable, a much better UI could help so much to better showcase the images.

- **Sorting**. Unsplash allows sorting for "relevant" and "latest". Implementing this would give more flexibility to the user's search.

- **Unit tests**.
