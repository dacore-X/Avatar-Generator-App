from typing import Union

import requests
import os
from fastapi import HTTPException


def upload_file(output_path: str, name: str) -> str:
    url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
    files = [('file', (f'{name}.png', open(output_path + f'\\{name}.png', 'rb'), 'application/octet-stream'))]
    headers = {
        'pinata_api_key': os.getenv('PINATA_API_KEY'),
        'pinata_secret_api_key': os.getenv('PINATA_SECRET_API_KEY')
    }
    response = requests.request("POST", url, headers=headers, files=files)

    if response.status_code == 200:
        return response.json()['IpfsHash']
    else:
        raise HTTPException(status_code=404, detail="API KEY Error")
