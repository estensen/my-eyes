<img width="250" height="250" src="https://user-images.githubusercontent.com/9142800/34920456-d6fa338c-f927-11e7-92b1-2a77e79cab3e.png">

# My Eyes

Helping dyslectics read by using vision and text-to-speech.

## Mission Statement

Dyslexia is a reading disability that affects 5% of the population.  Individuals with dyslexia have difficulty decoding written word with speed and accuracy.  To help those afflicted with dyslexia, many schools in BC provide additional reading classes.  But even with reading strategies, it can take quite a bit of concentration and effort to comprehend text.

Listening to an audio book is more convenient than reading a physical one.  There are text-to-speech services which can read off digital text on your tablet or computer.  However, there aren't any easily accessible services which offer reading off physical text.

Our mission was to provide an easily accessible service that could read off physical text.  Our MOBILE app at 104.131.142.126:3000 or eye-speak.org allows you to take a picture of any text and play it back.  The site's UI was designed for those with dyslexia in mind.  The site fonts and color scheme were purposely chosen to be as easily read as possible.

This site attempts to provide an easy free service for those with reading disabilities.

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
