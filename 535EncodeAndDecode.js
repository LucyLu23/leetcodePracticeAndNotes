let HashMap = new Map();
var encode = function(longUrl){
    const code = Math.random().toString(32).slice(6);
    const tinyUrl = `https://tinyurl.com/${code}`;
    HashMap.set(tinyUrl, longUrl)
    return tinyUrl;
};
var decode = function(shortUrl){
    return HashMap.get(shortUrl);
}