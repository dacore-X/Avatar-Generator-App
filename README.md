# **Avatar Generator Web APP (IPFS)🌀**

## Information
Web APP includes implementation of Avatar Generator from [dacore-X
/NFT-Avatar-Python-Generator](https://github.com/dacore-X/NFT-Avatar-Python-Generator) with requests to the Python FastAPI server.
Backend generates an image and uploads it to [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System). Then the user receives a response from the server in the form of metadata with the URL to the image in the IPFS. 
In this project I used [Pinata API](https://docs.pinata.cloud/pinata-api/pinning) for IPFS.

## Example
![app](https://user-images.githubusercontent.com/86720231/178335211-f4e7166d-9e3e-45c6-a621-b404130b6262.PNG)
## Local deploy
- **Backend:** Python FastAPI
- **Frontend:** ReactJS + Tailwind
### Backend
```sh
./venv/Scripts/activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```
### Frontend
```sh
npm install
npm start
```
Additional proxy parameter in **package.json** for requests to the backend:
```sh
"proxy": "http://localhost:8000"
```
