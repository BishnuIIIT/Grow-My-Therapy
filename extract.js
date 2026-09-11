const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\jhara\\.gemini\\antigravity\\brain\\7572f6da-f638-4de1-b2f2-1c82dbfc0f1f\\.system_generated\\steps\\2428\\content.md', 'utf8');

// The ChatGPT response usually has elements with data-message-author-role="user" and "assistant"
const matches = html.match(/<div[^>]*data-message-author-role="([^"]+)"[^>]*>([\s\S]*?)<\/div>/g);

if (matches) {
    matches.forEach(m => {
        // Just strip html tags
        const stripped = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        console.log("---- MESSAGE ----");
        console.log(stripped.substring(0, 1000));
    });
} else {
    // If not found, let's just use regex to strip all HTML tags from the document and find the relevant text.
    let text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                   .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<[^>]+>/g, '\n')
                   .replace(/\n\s*\n/g, '\n');
    
    // Print lines around "Find a therapist" or "Antigravity Appointment Design Brief"
    const lines = text.split('\n');
    let output = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().length > 30) {
            output.push(lines[i].trim());
        }
    }
    console.log(output.join('\n').substring(0, 5000));
}
