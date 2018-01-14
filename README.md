# My Eyes

Helping dyslectics read by using vision and text-to-speech.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Create a file called '.env' and a folder called 'uploads' in the root folder 

Append API keys from [IBM Watson](https://www.ibm.com/watson/services/text-to-speech/)

Append API keys from Google Cloud Vision
1. [Select or create a Cloud Platform project](https://console.cloud.google.com/project)
2. [Enable billing for your project](https://support.google.com/cloud/answer/6293499#enable-billing)
3. [Enable the Google Cloud Vision API API](https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com)
4. [Set up authentication with a service account so you can access the API from your local workstation](https://cloud.google.com/docs/authentication/getting-started)

.env should look like this when you're done:
```
USERNAME=<watson_username>
PASSWORD=<watson_password>
GOOGLE_APPLICATION_CREDENTIALS=<path_to_json_file>
```

Install dependencies and start the program:

```
npm install
npm start
```


Take a picture of some text and and press play to activate text-to-speech.


## Built With

* [Cloud Vision API](https://cloud.google.com/vision/) - Used to read text from images
* [Watson Text to Speech](https://console.bluemix.net/catalog/services/text-to-speech) - Used to read text from images to speech

## Authors

* **Zachary Anderson** - *Frontend* - [ZachaRuba](https://github.com/ZachaRuba)
* **Håvard Estensen** - *Google Cloud Vision* - [estensen](https://github.com/estensen)
* **Kristian Jensen** - *Backend, IBM Watson* - [HoboKristian](https://github.com/HoboKristian)
* **Charissa Sukontasukkul** - *Design*
* **Josh Vocal** - *Frontend* - [joshvocal](https://github.com/joshvocal)
