from flask import Flask, request, jsonify
from pydantic import BaseModel, ValidationError, Field
from typing import Optional

app = Flask(__name__)
class UserData(BaseModel):
    name: str #= Field(..., title="User's name", description="Name of the user")  
    age: Optional[int] = None #= Field(..., title="User's age", description="Age of the user")  
    city: Optional[str] = "unknown" # = Field(..., title="City", description="City where the user resides")  

@app.route('/receive', methods=['POST'])
def receive_json():
    try:
        data = request.get_json() 

        user_data = UserData(**data)  
        return jsonify({
            "status": "JSON received successfully",
            "validated_data": user_data.dict()
        }), 200
    
    except ValidationError as e:
        return jsonify({
            "status": "Validation failed",
            "errors": e.errors()
        }), 400

if __name__ == '__main__':
    app.run(debug=True)
