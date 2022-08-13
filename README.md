# notion-testing

To use this simple script that searches notion data and displays as well as store it in a database, create a ```.env``` file at root directory<br>
It should contain 3 items: 

```
NOTION_KEY = [Your notion api key]
NOTION_PAGE_ID = [page id of notion document]
MONGODB = [mongodb URI]
```

then run ```npm i``` in terminal.<br>
After that, run ```node index``` to start the script. (make sure to run mongodb database if using a local db server by running ```mongod``` before this line)
