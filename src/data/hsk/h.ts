/** Helpers for the HSK lesson files: the book helpers plus the picture path of an HSK lesson. */
export * from '../book/h';

/** path of a picture cut from the HSK workbook: hskPic(2, 1)('la') -> 'hsk/2/01/la.webp' */
export const hskPic = (hsk: number, n: number) => (name: string) => `hsk/${hsk}/${String(n).padStart(2, '0')}/${name}.webp`;
