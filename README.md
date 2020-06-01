# Cookbook-fs-API
This is the back end API for the Fullstack Cookbook App. 
# Tech

  - JavaScript
  - node.js
  - Express framework
  - PostgreSQL
  - Heroku



### Routes

   **GET recipes**
----

* **URL**

  /recipes/

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 
    **Content:** `{ id : 12, "name" : 'PB&J', "cooktime":':15',"servings":'1',"ingredients": 'peanut butter, jelly, sliced bread',"instructions":'Add jelly to one slice of bread and peanut butter to another. Next put them together. Then Enjoy.' }`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error
    **Content:** `{json(error) }`

* **Sample Call:**

```
curl --location --request GET 'url/recipes' \
--header 'Content-Type: application/json'
```
 
 **Post Recipe**
----


* **URL**

    /recipes/

* **Method:**
  
    POST

* **Data Params**

  **recipe:** `{ id : 12, "name" : 'PB&J', "cooktime":':15',"servings":'1',"ingredients": 'string',"instructions":'Add jelly to one slice of bread and peanut butter to another. Next put them together. Then Enjoy.' }`

* **Success Response:**

  * **Code:** 201 
    **Content:**  `{ id : 12, "name" : 'PB&J', "cooktime":':15',"servings":'1',"ingredients": 'string',"instructions":'Add jelly to one slice of bread and peanut butter to another. Next put them together. Then Enjoy.' }`
 
* **Error Response:**


  * **Code:** 500 Internal Server Error
    **Content:** `{ "not posted" + json(error) }`

* **Sample Call:**

```
curl --location --request GET 'url/recipes' \
--header 'Content-Type: application/json'
```


**Delete Recipe**
----


* **URL**

    '/recipes/{id}'

* **Method:**

    DELETE 
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`



* **Success Response:**
  

  * **Code:** 204
    
 
* **Error Response:**

  * **Code:** 500 Internal Server Error
    **Content:** `{ json(error) }`

* **Sample Call:**
```
 curl --location --request DELETE '/recipes/id' \
--header 'Content-Type: application/json'
```

    
## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone THIS-PROJECT-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository

3. Install the node dependencies `npm install`


## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

