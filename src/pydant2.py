from flask import Flask, request, jsonify
from pydantic import BaseModel, ValidationError
from typing import Optional

app = Flask(__name__)

class UserModel(BaseModel):
    name: str

class CityModel(BaseModel):
    city: Optional[int]

class AgeModel(BaseModel):
    age: int

@app.route('/json', methods=['POST'])
def submit_data():
    data = request.get_json()

    try:
        user = UserModel(**data)
        return jsonify({
            "status": "Valid user data",
            "table": "user",
            "data": user.dict()
        }), 
    except ValidationError:
        pass

    try:
        city = CityModel(**data)
        return jsonify({
            "status": "Valid city data",
            "table": "city",
            "data": city.dict()
        }), 200
    except ValidationError:
        pass

    try:
        age = AgeModel(**data)
        return jsonify({
            "status": "Valid age data",
            "table": "age",
            "data": age.dict()
        }), 200
    except ValidationError:
        pass

    return jsonify({
        "status": "Invalid",
    }), 400

if __name__ == '__main__':
    app.run(debug=True)
