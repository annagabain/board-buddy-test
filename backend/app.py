# import openai
from flask import Flask, request, jsonify
# openai.api_key = "key-here"
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify({"message": "Welcome to Board Buddy!"})

@app.route('/start-meeting', methods=['POST'])
def start_meeting():
    # Placeholder logic for starting a meeting
    return jsonify({"status": "Meeting started successfully!"})

@app.route('/by-laws', methods=['GET'])
def fetch_by_laws():
    by_laws = {
        "rule_1": "Decisions must be approved by at least 70% of the board.",
        "rule_2": "Meetings must not exceed 2 hours in duration.",
        "rule_3": "A quorum of 5 members is required to start a meeting."
    }
    return jsonify(by_laws)

@app.route('/vote', methods=['POST'])
def handle_vote():
    data = request.json  # Expecting {"total_votes": 10, "yes_votes": 8}
    total_votes = data.get("total_votes")
    yes_votes = data.get("yes_votes")

    if yes_votes / total_votes >= 0.7:
        return jsonify({"decision": "Approved"})
    else:
        return jsonify({"decision": "Rejected"})


# @app.route('/chat', methods=['POST'])
# def chat():
#     data = request.json  # Expecting {"question": "Your question here"}
#     question = data.get("question")

#     # Use ChatCompletion for GPT models
#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",  # Change this to "gpt-4" if you have access
#         messages=[
#             {"role": "system", "content": "You are an assistant well-versed in meeting by-laws."},
#             {"role": "user", "content": question}
#         ],
#         max_tokens=150,
#         temperature=0.7
#     )

#     answer = response['choices'][0]['message']['content'].strip()
#     return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)
