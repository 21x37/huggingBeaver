require('dotenv').config();
const commentBot = require('comment-bot');

const creds = {
    userAgent: 'huggingBeaver',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
};

const streamOpts = {
    subreddit: 'all',
    results: 25
};

const bot = new commentBot(creds)

bot.streamComments(streamOpts, (comment) => {
    console.log(comment);
    if (comment.body.includes('beaver')) {
        comment.reply('*hugs*');
    } else if (comment.body.includes('hug me')) {
        comment.reply('*hugs*')
    };
})