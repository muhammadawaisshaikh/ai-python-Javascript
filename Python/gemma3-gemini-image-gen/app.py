from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO
import base64
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Load the .env file
load_dotenv()

CORS(app)

api_key = os.getenv('GOOGLE_API_KEY')

if api_key is None:
    raise ValueError("GOOGLE_API_KEY is not set in the environment variables")

client = genai.Client()

@app.route('/generate-image', methods=['POST'])
def generate_image():
    try:
        data = request.get_json()
        prompt = data.get('prompt')

        if not prompt:
            return jsonify({"error": "Missing prompt"}), 400

        response = client.models.generate_content(
            model="gemini-2.0-flash-exp-image-generation",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=['Text', 'Image']
            )
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                image = Image.open(BytesIO(part.inline_data.data))

                buffered = BytesIO()
                image.save(buffered, format="PNG")
                encoded_img = base64.b64encode(buffered.getvalue()).decode("utf-8")

                return jsonify({"image": encoded_img})

        return jsonify({"error": "No image returned"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
