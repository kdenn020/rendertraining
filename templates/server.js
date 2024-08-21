const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/calculate-age" method="post">
            <label for="age">Enter your age:</label>
            <input type="number" id="age" name="age" required>
            <button type="submit">Calculate</button>
        </form>
    `);
});

app.post('/calculate-age', (req, res) => {
    const age = req.body.age;
    if (!age || isNaN(age)) {
        return res.send("Please provide a valid age.");
    }

    // Calculate woman's age but don't display it
    const womanAge = age / 2 + 7;
    res.send(`
        <p>You need to marry someone who is <strong>__</strong> years old.</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
