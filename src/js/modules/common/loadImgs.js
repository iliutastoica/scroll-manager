/**
* Preload images with Promise.all()
*/

const loadImg = (target) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(true, img);
    };
    img.onerror = () => {
      reject(false);
    };
    img.src = target;
  });
}

export default function(targets) {
  if (typeof(targets) === 'string') {
    return loadImg(targets);
  } else if (Array.isArray(targets) === true) {
    return Promise.all(targets.map((target) => {
      return loadImg(target);
    }));
  } else {
    console.warn('You should set String or Array to the first attribute of loadImgs function.');
    return;
  }
}
