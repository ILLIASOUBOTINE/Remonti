import {Dimensions} from 'react-native';

export const SE_EDITION_HEIGHT = 667;
export const DEVICE_BREAK_HEIGHT = 568;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const scaleSize = (size: number) => {
  if (WINDOW_HEIGHT === SE_EDITION_HEIGHT) {
    return Math.round((WINDOW_HEIGHT / 790) * size);
  } else if (WINDOW_HEIGHT > DEVICE_BREAK_HEIGHT) {
    return Math.round((WINDOW_WIDTH / 393) * size);
  } else {
    return size;
  }
};
