import { IMAGE_PATH_PREFIX } from '@/constants';

export function getRandomData(data) {
    return data[Math.floor(Math.random() * data.length)];
}

export function getImageFullPath(image) {
    if (image) {
        return `${IMAGE_PATH_PREFIX}${image}`;
    }
}

export function noScroll() {
    document.body.classList.add('no-scroll');
}

export function removeNoScroll() {
    document.body.classList.remove('no-scroll');
}
