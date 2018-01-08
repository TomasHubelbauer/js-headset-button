# JavaScript Headphones Button

Both Google's Android and Apple's iPhone provide programmatic ways for listening for the headphones button press in an application:

- [The Google API](https://stackoverflow.com/a/19543982/2715716)
- [The Apple API](https://stackoverflow.com/a/15425324/2715716)

This is different from USB headsets, I am interested in headphones connected using a 2 or 3 pin Jack connector.

I am curious to see if the same can be done in browser JavaScript. I doubt a direct API for this is exposed, although some arkane,
no longer supported WebAudio API may support that in some headsets as an extended device capability. I can't use HID or BlueTooth
in JavaScript (not in a meaningful way anyway), but I might be able to set an audio output device (the headphones) to act as if it
was an audio input device (a microphone - but not as in "the headphones are really a headset with a microphone", but as in using
the actual reproductor as a microphone). If this is possible using the WebAudio API, and assuming the button works by shorting one
of or both of the channels to the ground, a difference in the levels may be a sufficient enough indicator of a button press and 
release.

This repository is an experiment in exploring and exploiting the above.
