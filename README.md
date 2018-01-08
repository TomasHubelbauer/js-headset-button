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

**[Live Web Audio Input Enabled!](https://developers.google.com/web/updates/2012/09/Live-Web-Audio-Input-Enabled)**

The sample here shows how to use `getUserMedia` to grab a low latency audio input stream and set it as `AudioContext`'s source.
The audio context then could I think be connected to a custom node which would dump the stream data for exploration and that could
reveal a distinct pattern caused by the Jack button click.

**[Web Audio API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)**

A general overview of the API.

**[Web Audio input example from the WebRTC WG](https://webrtc.github.io/samples/src/content/peerconnection/webaudio-input/)**

Could show some way to process input audio in order to create a dumper and a pattern matcher.

**Information about how the button over Jack works**

- [Electronics SE explanation](https://electronics.stackexchange.com/a/38492/116328)
- [Another one with diagrams](https://electronics.stackexchange.com/a/242885/116328)
