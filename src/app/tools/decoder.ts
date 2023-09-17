/**
 * src : https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
 * Decode a base64-encoded string containing Unicode characters and return the original string.
 *
 * @param str - The base64-encoded string to decode.
 * @returns The decoded original string.
 */
export function b64DecodeUnicode(str: string): string {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
}
