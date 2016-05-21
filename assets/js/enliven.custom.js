"use strict";
var e_dir, e_mode, enliven_config;

e_mode = 'demo';

if ('demo' === e_mode) {
  e_dir = 'demo';
} else {
  e_dir = 'placehold';
}

enliven_config = {
  bg_single: [
    {
      src: e_dir + "/background/cover/0.jpg",
      fade: 1000
    }
  ],
  bg_slideshow: [
    {
      src: e_dir + "/background/slideshow/0.jpg",
      fade: 1000
    }, {
      src: e_dir + "/background/slideshow/1.jpg",
      fade: 1000
    }, {
      src: e_dir + "/background/slideshow/2.jpg",
      fade: 1000
    }
  ]
};
