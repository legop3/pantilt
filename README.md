# Control utilities for the D-Link DCS-5009L camera
(running firmware version 1.00)
as far as i know, firmware can be downgraded without doing anything special.
updating the firmware may change the way the camera expects to be told what to do.

## This repo is an NPM module!
Use `npm install --save legop3/pantilt` to install.

Usage:

```
import moveCamera from "pantilt";

moveCamera(12, 'left')
```
`left`, `right`, `up`, `down`, and `home` are all valid directions.