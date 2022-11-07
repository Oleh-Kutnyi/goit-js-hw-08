import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const time = +localStorage.getItem('videoplayer-current-time');

if (time) {
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
