activate environment
.\venv\Scripts\Activate  ( Powershell)
run

python app.py 


Review Your Existing Endpoints
Here are your endpoints and their expected HTTP methods:

/by-laws: GET (to fetch by-laws).

/vote: POST (to send voting data).

/start-meeting: POST (to start a meeting).

/chat: POST (if still enabled, for the chatbot).

2. How to Test Each Endpoint
By-laws (/by-laws):

Use a GET request to retrieve the list of by-laws.

Example in Postman or the browser:

URL: http://127.0.0.1:5000/by-laws

Vote (/vote):

Use a POST request with the following JSON body:

json
{
    "total_votes": 10,
    "yes_votes": 7
}
Example in Postman:

Method: POST

URL: http://127.0.0.1:5000/vote

Body (raw, JSON):

json
{
    "total_votes": 10,
    "yes_votes": 7
}
Start Meeting (/start-meeting):

Use a POST request to this endpoint:

Method: POST

URL: http://127.0.0.1:5000/start-meeting

Chat (/chat) (if enabled):

Requires a POST request with JSON content (e.g., {"question": "your question"}).