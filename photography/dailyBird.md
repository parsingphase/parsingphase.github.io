---
description: "#DailyBird"
title: "#DailyBird"
---

<style>ul li { list-style-position: inherit; list-style-type: disc; padding-left: 0.5em; }</style>

# Posting a bird photo a day, 365 days a year

[#DailyBird](https://m.phase.org/@parsingphase/tagged/DailyBird) is a project where I post one of my bird photos each day
to Mastodon, under that hashtag. It's been running automatically every day since Jan 1st, 2021, originally on Twitter,
after running manually for a short period in 2020.

## Image usage

The images are posted on Mastodon primarily for enjoyment. Each is watermarked with my website/email and licenced as [by-nc-nd](https://creativecommons.org/licenses/by-nc-nd/4.0/). This allows viewers to view and share the images, but prevents modification of any sort (including removing or obscuring the watermark) or any sort of commercial usage. It also specifies that the image is attributed to me (also handled by the watermark).

These terms apply specifically to the copy of the image obtained from social media in this way, although other sources of my images have similar requirements.
However, many of these images are available under other (generally non-commercial) terms. For example I've agreed to their usage by local community journalists, by environmental educators, and on podcasts. In general, if I am able to grant non-commercial usage rights, I'm generally happy to do so, although it's important to verify this on a per-image basis, as some may have been taken in locations that do not allow such usage without licencing agreements with the landowners. As I have no intent at this time to make any money from my photography, I have no interest in dealing with such complexities.

Nevertheless, I have occasionally been asked if I will sell prints of my images. Again I have no intention to do so directly, but occasionally I may allow printing of unencumbered images in return for a donation to a named charity or organization.

## Technical details

Initially, the automatic posting was done via a Python-based script from my [phetch](https://github.com/parsingphase/phetch)
repo, running as an [AWS Lambda](https://aws.amazon.com/lambda/).

That lambda ran the project throughout 2021 and 2022, gaining Mastodon functionality in late 2022. It ran from
a simple dated list of images prepared before the start of each year, using the Flickr API to fetch metadata
(location, camera info etc) which was then assembled into human-friendly form before posting.

When I was preparing 2023's images (taken in 2022), I wanted a smarter system. Firstly, in keeping with the more
inclusive community approach on the Fediverse, I wanted to include a proper image description each day. Secondly, I
wanted to most of the processing locally before uploading the lambda, allowing for more flexibility in experimenting
with the posts created. And thirdly, as I spent more time following wildlife content on social media, and seeing how
often it was reshared without attribution, I wanted to automatically watermark my photos before posting.

The new system, written in Typescript (the code not public until I tidy it up a bit, at least) therefore does the following:

### Location processing

With the help of tools currently still in the `phetch` codebase, performs some GPS-based operations (I purchased a [Canon GPS unit](https://www.bhphotovideo.com/c/product/847538-REG/Canon_6363B001_GPS_Receiver_GP_E2.html) in 2021, and almost all of my photos taken since are geo-tagged).

- Work out where the photo was taken, in a human-meaningful way. This is done by matching the location against a number of resources:
  - The [MassGIS Data: Protected and Recreational OpenSpace](https://www.mass.gov/info-details/massgis-data-protected-and-recreational-openspace) database
  - The [USGS PAD-US](https://maps.usgs.gov/padus/) databases for various States.
  - Some custom hand-built polyfiles, for cases where I want to assign my own specific name to a location.
- Combine that data with Flickr's place data for the photo, which generally gives a neighborhood or town rather than park or reserve names I prefer.
- Locate the photo in [Native Land Digital](https://native-land.ca/resources/api-docs/)'s database, to recognize the traditional ownership of the places I enjoy.

### Camera settings & image properties

Extract EXIF data such as the camera, lens and settings used, and process those to be more human-meaningful:

- Give the focal length only on zoom lenses, as it's redundant otherwise.
- Expose a lot of details about how each photo is taken. While I hope that many will enjoy the daily images just for their content, I also wanted to provide a resource of sorts to other photographers, curious about how a camera's capabilities can be used to achieve certain results.
- Work out the crop percentage on images. When preparing 2023's images, mostly taken with lenses of 600 to 800mm, often with a teleconverter of 1.4 to 2x, and cropped from high-res images of up to 45Mpx, it became clear to me that it looks like I get very close to a lot of my subjects, when in fact I'm using a lot of magnification capabilities to take an image from a significant distance without disturbing my subject. I wanted to make that very explicit in the posts!

### Manual processing

The above tools result in a 26-column spreadsheet describing every detail of a given set of images. This gives me a document to which I can add custom manual descriptions for each line, with the photo in front of me. As you can imagine, adding a description to each of 365 files takes a while, but once I've done this I can shuffle the contents and add a posting date to each, and the revised spreadsheet can be used as the input for the lambda. It's triggered once per day and simply scans the spreadsheet for the matching posting date, then combines these into a post and publishes them.

Feedback on those descriptions is greatly welcomed as I've limited expertise in such areas of accessibility. Part of my intent in putting the effort into describing so many images is to help normalize the usage of such descriptions across the Fediverse.

## Notes on technique

As I've developed my photographic skills throughout this project, I've been recording my evolving approach in a three-part series:

1. [Some Notes on DSLR Wildlife Photography](https://parsingphase.medium.com/some-notes-on-wildlife-photography-6370ea4f8965)
2. [Further Thoughts on DSLR Wildlife Photography](https://parsingphase.medium.com/further-thoughts-on-dslr-wildlife-photography-c528cb7b37de)
3. [More Thoughts But No Reflections](https://parsingphase.medium.com/more-thoughts-but-no-reflections-taking-wildlife-photography-mirrorless-f244639aca13)

## Contact

For any queries or feedback on any of my photographic work, please use my [photography@parsingphase.com](mailto:photography@parsingphase.com) address.

---

[Back to site index](..)
