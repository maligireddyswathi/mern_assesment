app.post("/translate", (req, res) => {
    const { original_text, translated_text, source_lang, target_lang } = req.body;
    const sql = "INSERT INTO translations (original_text, translated_text, source_lang, target_lang) VALUES (?, ?, ?, ?)";
    db.query(sql, [original_text, translated_text, source_lang, target_lang], (err, result) => {
        if (err) throw err;
        res.send("Translation saved successfully.");
    });
});
