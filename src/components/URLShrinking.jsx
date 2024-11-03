import { useState } from 'react'
import './URLShrinking.css'

const URLShrinking = () => {

    // State management
    const [longUrl, setLongUrl] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    
    const shortenUrl = (e) => {
        if (longUrl) {
            if (shortCode){
                setShortUrl(`http://tinyurl/${shortCode}`);
            } else {
                let id = Math.random().toString(36).substring(6);
                setShortUrl(`http://tinyurl/${id}`);
            }
        }
    }
    return (
        <div className="shrinking-url-form">
            <h1>Link Shrinker</h1>
            <div className="form-group">
                <label htmlFor="longUrl">Long URL:</label>
                <input type="text" id="longUrl" value={longUrl} onChange={(e) => setLongUrl(e.target.value)}/>
                <label htmlFor="shortCode">Enter short code:</label>
                <input type="text" id="shortCode" value={shortCode} onChange={(e) => setShortCode(e.target.value)}/>
            </div>
            <button className="submit-btn" onClick={shortenUrl}>Shorten URL</button>
            <div className="result">
                <label htmlFor="shortUrl">Short URL</label>
                <input type="text" id="shortURL" value={shortUrl} readOnly/>
            </div>

        </div>
    )
}

export default URLShrinking;