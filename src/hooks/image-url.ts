import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target);
    if (index === -1) return url; // Return original URL if 'media/' not found
    return url.slice(0, index + target.length) + 'crop/600/400/' + url.slice(index + target.length);
};

export default getCroppedImageUrl;