/**
 * Ensures the url starts with a protocol
 * @param url - The url being tested
 * @returns A url with a protocol
 */
export default (url: string) => (!/^(?:f|ht)tps?\:\/\//.test(url) ? `http://${url}` : url);
