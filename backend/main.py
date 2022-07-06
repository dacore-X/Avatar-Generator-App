import os
import random

from typing import Union
from fastapi import FastAPI
from services import gen_avatar
import os
from dotenv import load_dotenv


dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

app = FastAPI()


@app.get('/api/generate')
async def generate(seed: Union[int] = None):
    if seed:
        random.seed(seed)

    try:
        trait_size = os.getenv('TRAIT_SIZE').split(',')
        x, y = int(trait_size[0]), int(trait_size[1])
    except (IndexError, TypeError):
        return {'message': 'Error in .env file'}

    metadata = gen_avatar((x, y))
    return metadata
